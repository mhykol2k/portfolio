"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { cars } from "@/lib/cars";

// How much of the frame the model fills (1 = never clips at any angle).
const FIT = 1.0;
// Matte grey silhouette colours per theme.
const MONO_DARK = "#52525b";
const MONO_LIGHT = "#a1a1aa";
// How strongly the room reflections light the model.
const ENV_INTENSITY = 0.55;
// Idle turn speed (radians per second) and swap cadence.
const TURN_RATE = 0.24;
const INTRO_MS = 700;
const SWAP_EVERY = Math.PI / 2; // a quarter turn
const FADE_MS = 320; // per phase: out, then in

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export function Model({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = ref.current;
    const label = labelRef.current;
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
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(5, 10, 7);
    scene.add(key);

    // Every model is normalised to a unit bounding sphere, so one camera fits all.
    const radius = FIT;
    const camera = new THREE.OrthographicCamera(-radius, radius, radius, -radius, 0.01, 100);
    const start = new THREE.Vector3(Math.sin(0.2 * Math.PI), 0.55, Math.cos(0.2 * Math.PI)).setLength(radius * 4);
    const target = new THREE.Vector3(0, 0, 0);

    const isDark = () => document.documentElement.classList.contains("dark");
    const makeMaterial = () =>
      new THREE.MeshStandardMaterial({
        color: isDark() ? MONO_DARK : MONO_LIGHT,
        metalness: 0.1,
        roughness: 0.75,
        envMapIntensity: ENV_INTENSITY,
        transparent: true,
        opacity: 1,
      });

    // Sits a hair behind the real surface so the visible mesh always wins the depth test.
    const depthMaterial = new THREE.MeshBasicMaterial({
      colorWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    type Car = { group: THREE.Group; material: THREE.MeshStandardMaterial; name: string };
    const loaded: (Car | undefined)[] = new Array(cars.length);
    let disposed = false;

    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);

    const load = (i: number) =>
      new Promise<Car | undefined>((resolve) => {
        loader.load(
          cars[i].file,
          (gltf) => {
            if (disposed) return resolve(undefined);
            const obj = gltf.scene;
            const material = makeMaterial();
            obj.traverse((child) => {
              const mesh = child as THREE.Mesh;
              if (mesh.isMesh) {
                mesh.material = material;
                mesh.renderOrder = 1;
              }
            });
            // Depth-only twin drawn first: while the real mesh is translucent, its
            // own inner surfaces are hidden instead of bleeding through the panels.
            const depthOnly = obj.clone();
            depthOnly.traverse((child) => {
              const mesh = child as THREE.Mesh;
              if (mesh.isMesh) {
                mesh.material = depthMaterial;
                mesh.renderOrder = 0;
              }
            });
            const box = new THREE.Box3().setFromObject(obj);
            const centre = box.getCenter(new THREE.Vector3());
            const sphere = box.getBoundingSphere(new THREE.Sphere());
            const group = new THREE.Group();
            obj.position.sub(centre);
            depthOnly.position.copy(obj.position);
            group.add(depthOnly);
            group.add(obj);
            group.scale.setScalar(1 / sphere.radius);
            group.visible = false;
            scene.add(group);
            const car = { group, material, name: cars[i].name };
            loaded[i] = car;
            resolve(car);
          },
          undefined,
          () => resolve(undefined)
        );
      });

    // Theme changes recolour every material.
    const mo = new MutationObserver(() => {
      const c = isDark() ? MONO_DARK : MONO_LIGHT;
      loaded.forEach((car) => car?.material.color.set(c));
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let req = 0;
    let angle = 0;
    let t0 = 0;
    let last = 0;
    let introDone = reduce;
    let current = 0;
    let nextSwapAt = SWAP_EVERY;
    let fade: { from: Car; to: Car; started: number; phase: "out" | "in" } | null = null;
    let swapping = false;

    const setLabel = (name: string) => {
      if (!label) return;
      label.textContent = name;
    };

    const beginSwap = async () => {
      if (swapping) return;
      swapping = true;
      const nextIdx = (current + 1) % cars.length;
      const next = loaded[nextIdx] ?? (await load(nextIdx));
      const from = loaded[current];
      if (!next || !from || disposed) {
        swapping = false;
        return;
      }
      fade = { from, to: next, started: performance.now(), phase: "out" };
      current = nextIdx;
    };

    const animate = (now: number) => {
      req = requestAnimationFrame(animate);
      if (!t0) t0 = last = now;
      const dt = (now - last) / 1000;
      last = now;
      if (!introDone) {
        // Fast decelerating spin-in, then settle into the idle turn.
        const p = Math.min(1, (now - t0) / INTRO_MS);
        angle = -easeOutCirc(0.5 + p * 0.35) * Math.PI * 16;
        if (p >= 1) {
          introDone = true;
          nextSwapAt = angle + SWAP_EVERY;
        }
      } else if (!reduce) {
        angle += TURN_RATE * dt;
        if (angle >= nextSwapAt) {
          nextSwapAt += SWAP_EVERY;
          void beginSwap();
        }
      }

      if (fade) {
        const t = Math.min(1, (performance.now() - fade.started) / FADE_MS);
        const e = t * t * (3 - 2 * t); // smoothstep
        if (fade.phase === "out") {
          fade.from.material.opacity = 1 - e;
          if (t >= 1) {
            fade.from.group.visible = false;
            fade.from.material.opacity = 1;
            fade.to.material.opacity = 0;
            fade.to.group.visible = true;
            setLabel(fade.to.name);
            fade = { ...fade, started: performance.now(), phase: "in" };
          }
        } else {
          fade.to.material.opacity = e;
          if (t >= 1) {
            fade.to.material.opacity = 1;
            fade = null;
            swapping = false;
          }
        }
      }

      camera.position.x = start.x * Math.cos(angle) + start.z * Math.sin(angle);
      camera.position.z = start.z * Math.cos(angle) - start.x * Math.sin(angle);
      camera.position.y = start.y;
      camera.lookAt(target);
      renderer.render(scene, camera);
    };

    void load(0).then((car) => {
      if (!car || disposed) return;
      car.group.visible = true;
      setLabel(car.name);
      container.dataset.loaded = "true";
      req = requestAnimationFrame(animate);
      // Warm the rest in the background so swaps are instant.
      for (let i = 1; i < cars.length; i++) void load(i);
    });

    const onResize = () => renderer.setSize(container.clientWidth, container.clientHeight);
    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(req);
      mo.disconnect();
      window.removeEventListener("resize", onResize);
      scene.environment?.dispose();
      loaded.forEach((car) => car?.material.dispose());
      depthMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className={className}>
      <div ref={ref} aria-hidden="true" className="relative aspect-square w-full select-none [&_canvas]:block" />
      <p className="mt-1 text-center font-mono text-[11px] text-faint">
        <span ref={labelRef} />
      </p>
    </div>
  );
}
