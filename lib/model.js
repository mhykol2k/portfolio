import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
    scene,
    gblPath,
    options = { recieveShadow: true, castShadow: true }
) {
    const { recieveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            gblPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'item'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = recieveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = recieveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}