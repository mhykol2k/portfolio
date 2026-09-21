"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// How much of the frame the model fills (1 = touches the edges).
const FIT = 1.0;
// true = render the model as one matte grey surface (silhouette). false = keep its own materials.
const MONO = true;
const MONO_DARK = "#52525b";
const MONO_LIGHT = "#a1a1aa";
// Caps applied to every material: lower metalness and higher roughness = less mirror.
const MAX_METALNESS = 0.5;
const MIN_ROUGHNESS = 0.45;
// Clearcoat is a mirror layer on top of the paint; a bright environment blows it out.
const MAX_CLEARCOAT = 0.4;
const MIN_CLEARCOAT_ROUGHNESS = 0.35;
// How strongly the room reflections light the model (1 = full).
const ENV_INTENSITY = 0.55;

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export function Model({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // PBR materials (metallic paint, clearcoat) need something to reflect.
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    const target = new THREE.Vector3(0, 0, 0);
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 1000);
    const start = new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI));
    camera.position.copy(start);
    camera.lookAt(target);

    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(5, 10, 7);
    scene.add(key);

    let req = 0;
    let frame = reduce ? 200 : 60;
    let angle = 0;
    let disposed = false;
    const cleanups: Array<() => void> = [];

    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load("/item.glb", (gltf) => {
      if (disposed) return;
      const obj = gltf.scene;
      // Many Sketchfab exports omit metallicFactor, which glTF defaults to 1,
      // so paint renders like chrome. Tame it.
      if (MONO) {
        // One matte material for the whole model: a silhouette, not a showroom.
        const dark = document.documentElement.classList.contains("dark");
        const mono = new THREE.MeshStandardMaterial({
          color: dark ? MONO_DARK : MONO_LIGHT,
          metalness: 0.1,
          roughness: 0.75,
          envMapIntensity: ENV_INTENSITY,
        });
        obj.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh) mesh.material = mono;
        });
        // Follow the theme toggle.
        const mo = new MutationObserver(() => {
          const d = document.documentElement.classList.contains("dark");
          mono.color.set(d ? MONO_DARK : MONO_LIGHT);
        });
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        cleanups.push(() => mo.disconnect());
      } else {
        obj.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (!mesh.isMesh) return;
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          for (const m of mats) {
            const std = m as THREE.MeshStandardMaterial;
            if (!("metalness" in std)) continue;
            std.metalness = Math.min(std.metalness, MAX_METALNESS);
            std.roughness = Math.max(std.roughness, MIN_ROUGHNESS);
            if ("clearcoat" in std) {
              const phys = std as THREE.MeshPhysicalMaterial;
              phys.clearcoat = Math.min(phys.clearcoat, MAX_CLEARCOAT);
              phys.clearcoatRoughness = Math.max(phys.clearcoatRoughness, MIN_CLEARCOAT_ROUGHNESS);
            }
            std.envMapIntensity = ENV_INTENSITY;
            std.needsUpdate = true;
          }
        });
      }
      // Centre the model on the origin and size the camera to fit it,
      // so any GLB works without hand-tuned offsets.
      const box = new THREE.Box3().setFromObject(obj);
      const centre = box.getCenter(new THREE.Vector3());
      obj.position.sub(centre);
      // Bounding sphere is rotation-invariant, so the model never leaves the frame as it turns.
      const sphere = box.getBoundingSphere(new THREE.Sphere());
      const radius = sphere.radius * FIT;
      camera.left = -radius;
      camera.right = radius;
      camera.top = radius;
      camera.bottom = -radius;
      camera.near = 0.01;
      camera.far = radius * 100;
      start.setLength(radius * 4);
      camera.updateProjectionMatrix();
      scene.add(obj);
      container.dataset.loaded = "true";

      const animate = () => {
        req = requestAnimationFrame(animate);
        if (frame <= 100) {
          frame += 1;
          const rot = -easeOutCirc(frame / 120) * Math.PI * 16;
          angle = rot;
        } else if (!reduce) {
          angle += 0.004;
        }
        camera.position.x = start.x * Math.cos(angle) + start.z * Math.sin(angle);
        camera.position.z = start.z * Math.cos(angle) - start.x * Math.sin(angle);
        camera.position.y = start.y * 0.55;
        camera.lookAt(target);
        renderer.render(scene, camera);
      };
      animate();
    });

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      cleanups.forEach((fn) => fn());
      cancelAnimationFrame(req);
      window.removeEventListener("resize", onResize);
      scene.environment?.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative aspect-square w-full select-none [&_canvas]:block ${className}`}
    />
  );
}
