import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { Sky } from 'three/addons/objects/Sky.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader()

// Floor
const floorAlphaTexture = textureLoader.load('./floor/alpha.jpg')
const floorColorTexture = textureLoader.load('./floor/forrest_ground_01_diff_1k.jpg')
const floorAmbientOcclusionTexture = textureLoader.load('./floor/forrest_ground_01_disp_1k.png')
const floorNormalTexture = textureLoader.load('./floor/forrest_ground_01_nor_gl_1k.exr')
const floorRoughnessTexture = textureLoader.load('./floor/forrest_ground_01_rough_1k.jpg')
floorColorTexture.repeat.set(4, 4)
floorAmbientOcclusionTexture.repeat.set(4, 4)
floorNormalTexture.repeat.set(4, 4)
floorRoughnessTexture.repeat.set(4, 4)
floorColorTexture.wrapS = THREE.RepeatWrapping
floorColorTexture.wrapT = THREE.RepeatWrapping
floorAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
floorAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
floorNormalTexture.wrapS = THREE.RepeatWrapping
floorNormalTexture.wrapT = THREE.RepeatWrapping
floorRoughnessTexture.wrapS = THREE.RepeatWrapping
floorRoughnessTexture.wrapT = THREE.RepeatWrapping

// Walls
const wallColorTexture = textureLoader.load('./wall/yellow_plaster_02_diff_1k.jpg')
const wallAmbientOcclusionTexture = textureLoader.load('./wall/yellow_plaster_02_disp_1k.png')
const wallNormalTexture = textureLoader.load('./wall/yellow_plaster_02_nor_gl_1k.exr')
const wallRoughnessTexture = textureLoader.load('./wall/yellow_plaster_02_rough_1k.exr')
wallColorTexture.repeat.set(4, 2)
floorColorTexture.colorSpace = THREE.SRGBColorSpace
wallAmbientOcclusionTexture.repeat.set(4, 2)
wallNormalTexture.repeat.set(4, 2)
wallRoughnessTexture.repeat.set(4, 2)
wallColorTexture.wrapS = THREE.RepeatWrapping
wallColorTexture.wrapT = THREE.RepeatWrapping
wallAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
wallAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
wallNormalTexture.wrapS = THREE.RepeatWrapping
wallNormalTexture.wrapT = THREE.RepeatWrapping
wallRoughnessTexture.wrapS = THREE.RepeatWrapping
wallRoughnessTexture.wrapT = THREE.RepeatWrapping

// Roof
const roofColorTexture = textureLoader.load('./roof/ceramic_roof_01_diff_1k.jpg')
const roofAmbientOcclusionTexture = textureLoader.load('./roof/ceramic_roof_01_disp_1k.png')
const roofNormalTexture = textureLoader.load('./roof/ceramic_roof_01_nor_gl_1k.exr')
const roofRoughnessTexture = textureLoader.load('./roof/ceramic_roof_01_rough_1k.jpg')
roofColorTexture.repeat.set(4, 1)
roofAmbientOcclusionTexture.repeat.set(4, 1)
roofNormalTexture.repeat.set(4, 1)
roofRoughnessTexture.repeat.set(4, 1)
roofColorTexture.wrapS = THREE.RepeatWrapping
roofAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
roofNormalTexture.wrapS = THREE.RepeatWrapping
roofRoughnessTexture.wrapS = THREE.RepeatWrapping
roofColorTexture.wrapT = THREE.RepeatWrapping
roofAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
roofNormalTexture.wrapT = THREE.RepeatWrapping
roofRoughnessTexture.wrapT = THREE.RepeatWrapping

// Pumpkin
const pumpkinColorTexture = textureLoader.load('./pumpkin/Pumpkin_001_basecolor.jpg')
const pumpkinAmbientOcclusionTexture = textureLoader.load('./pumpkin/Pumpkin_001_ambientOcclusion.jpg')
const pumpkinNormalTexture = textureLoader.load('./pumpkin/Pumpkin_001_normal.jpg')
const pumpkinRoughnessTexture = textureLoader.load('./pumpkin/Pumpkin_001_roughness.jpg')
pumpkinAmbientOcclusionTexture.repeat.set(4, 1)
pumpkinNormalTexture.repeat.set(4, 1)
pumpkinRoughnessTexture.repeat.set(4, 1)
pumpkinColorTexture.repeat.set(4, 1)
pumpkinAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
pumpkinNormalTexture.wrapS = THREE.RepeatWrapping
pumpkinRoughnessTexture.wrapS = THREE.RepeatWrapping
pumpkinColorTexture.wrapS = THREE.RepeatWrapping

// Grave
const graveColorTexture = textureLoader.load('./grave/coral_fort_wall_03_diff_1k.jpg')
const graveAmbientOcclusionTexture = textureLoader.load('./grave/coral_fort_wall_03_disp_1k.png')
const graveNormalTexture = textureLoader.load('./grave/coral_fort_wall_03_nor_gl_1k.exr')
const graveRoughnessTexture = textureLoader.load('./grave/coral_fort_wall_03_rough_1k.exr')
graveNormalTexture.repeat.set(0.5, 0.6)
graveRoughnessTexture.repeat.set(0.5, 0.6)
graveColorTexture.repeat.set(0.5, 0.6)
graveAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
graveNormalTexture.wrapS = THREE.RepeatWrapping
graveRoughnessTexture.wrapS = THREE.RepeatWrapping
graveColorTexture.wrapS = THREE.RepeatWrapping

// Door
const doorColorTexture = textureLoader.load('./door/color.jpg')
const doorAlphaTexture = textureLoader.load('./door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./door/height.jpg')
const doorNormalTexture = textureLoader.load('./door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./door/roughness.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace

// Fence
const plankColorTexture = textureLoader.load('./fence/moss_wood_diff_1k.jpg')
const plankAmbientOcclusionTexture = textureLoader.load('./fence/moss_wood__disp_1k.png')
const plankNormalTexture = textureLoader.load('./fence/moss_wood__nor_gl_1k.exr')
const plankRoughnessTexture = textureLoader.load('./fence/moss_wood__rough_1k.jpg')
plankColorTexture.repeat.set(2, 1)
plankAmbientOcclusionTexture.repeat.set(2, 1)
plankNormalTexture.repeat.set(2, 1)
plankRoughnessTexture.repeat.set(2, 1)
plankColorTexture.wrapS = THREE.RepeatWrapping
plankColorTexture.wrapT = THREE.RepeatWrapping
plankAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
plankAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
plankNormalTexture.wrapS = THREE.RepeatWrapping
plankNormalTexture.wrapT = THREE.RepeatWrapping
plankRoughnessTexture.wrapS = THREE.RepeatWrapping
plankRoughnessTexture.wrapT = THREE.RepeatWrapping


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight('#86cdff', 1.5)
scene.add(ambientLight)


//0.8, 0.2, 2.2
const pumpkinLight = new THREE.PointLight('#ff7d46', 3)
pumpkinLight.position.x = 0.8
pumpkinLight.position.y = 0.2
pumpkinLight.position.z = 2.2
scene.add(pumpkinLight)


const directionalLight = new THREE.PointLight(0xffffff, 20)
directionalLight.position.x = 2
directionalLight.position.y = 3
directionalLight.position.z = 4
scene.add(directionalLight)

// House container
// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
        alphaMap: floorAlphaTexture,
        transparent: true,
        map: floorColorTexture
    })
)
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)
const house = new THREE.Group()
scene.add(house)

// Walls
wallColorTexture.colorSpace = THREE.SRGBColorSpace
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial(
        {
            map: wallColorTexture,
            aoMap: wallAmbientOcclusionTexture,
            normalMap: wallNormalTexture,
            roughnessMap: wallRoughnessTexture
        }
    )
)
walls.position.y += 1.25
house.add(walls)

// Roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1.5, 4),
    new THREE.MeshStandardMaterial({
        map: roofColorTexture,
        aoMap: roofAmbientOcclusionTexture,
        normalMap: roofNormalTexture,
        roughnessMap: roofRoughnessTexture
    })
)
house.add(roof)
roof.position.y = 2.5 + 0.75
roof.rotation.y = Math.PI * 0.25

// Door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 2.2),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture

    })
)
house.add(door)
door.position.y = 1
door.position.z = 2 + 0.01
house.add(door)

// pumpkins
const pumpkinGeometry = new THREE.SphereGeometry(1, 16, 16)
const pumpkinMaterial = new THREE.MeshStandardMaterial({
    map: pumpkinColorTexture,
    aoMap: pumpkinAmbientOcclusionTexture,
    normalMap: pumpkinNormalTexture,
    roughnessMap: pumpkinRoughnessTexture
})
const pumpkin1 = new THREE.Mesh(pumpkinGeometry, pumpkinMaterial)
pumpkin1.scale.set(0.5, 0.5, 0.5)
pumpkin1.position.set(0.8, 0.2, 2.2)
pumpkin1.rotation.x = Math.random()  * (-0.4 - 0.4) + 0.4

const pumpkin2 = new THREE.Mesh(pumpkinGeometry, pumpkinMaterial)
pumpkin2.scale.set(0.25, 0.25, 0.25)
pumpkin2.position.set(1.4, 0.1, 2.1)
pumpkin2.rotation.x = Math.random()  * (-0.4 - 0.4) + 0.4

const pumpkin3 = new THREE.Mesh(pumpkinGeometry, pumpkinMaterial)
pumpkin3.scale.set(0.4, 0.4, 0.4)
pumpkin3.position.set(- 0.8, 0.1, 2.2)
pumpkin3.rotation.x = Math.random()  * (-0.4 - 0.4) + 0.4

const pumpkin4 = new THREE.Mesh(pumpkinGeometry, pumpkinMaterial)
pumpkin4.scale.set(0.15, 0.15, 0.15)
pumpkin4.position.set(- 1, 0.05, 2.6)
pumpkin4.rotation.x = Math.random()  * (-0.4 - 0.4) + 0.4
house.add(pumpkin1, pumpkin2, pumpkin3, pumpkin4)

// Graves
const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveAmbientOcclusionTexture,
    normalMap: graveNormalTexture,
    roughnessMap: graveRoughnessTexture
})
const graves = new THREE.Group()
scene.add(graves)
for(let i = 0; i < 30; i++)
{
    const angle = Math.random() * Math.PI * 2
    const radius = 4.5 + Math.random() * 3
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius

    // Mesh
    const grave = new THREE.Mesh(graveGeometry, graveMaterial)
    grave.position.x = x
    grave.position.y = Math.random() * 0.4215
    grave.position.z = z

    grave.rotation.x = (Math.random() - 0.5) * 0.4
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4

    // Add to the graves group
    graves.add(grave)
}

// Ghosts
const ghost1 = new THREE.PointLight('#8800ff', 6)
const ghost2 = new THREE.PointLight('#ff0088', 6)
const ghost3 = new THREE.PointLight('#ff0000', 6)
scene.add(ghost1, ghost2, ghost3)

// Fence
const plankGeometry = new THREE.BoxGeometry(0.05, 1.5, 0.5) // товщина, висота, ширина
const plankMaterial = new THREE.MeshStandardMaterial({ 
    map: plankColorTexture,
    aoMap: plankAmbientOcclusionTexture,
    normalMap: plankNormalTexture,
    roughnessMap: plankRoughnessTexture
})
const plank = new THREE.Mesh(plankGeometry, plankMaterial)
for (let i = 0; i < 10; i++) {
  const fencePart = plank.clone()
  fencePart.position.set(-2.7 + i * 0.6, 0.65, -3) 
  // fencePart.rotation.y = 1.57 // 90 градусів в радіанах
  fencePart.rotation.y = Math.random() * Math.PI * 2
  fencePart.rotation.x += (Math.random() - 0.5) * 0.2 
  fencePart.rotation.z += (Math.random() - 0.5) * 0.2 
  fencePart.position.y += (Math.random() - 0.5) * 0.25

  scene.add(fencePart)
}
for (let i = 0; i < 10; i++) {
  const fencePart = plank.clone()
  fencePart.position.set(3, 0.65, -  2.7 + i * 0.6) 
  // fencePart.rotation.y = 1.57 // 90 градусів в радіанах
  fencePart.rotation.y = Math.random() * Math.PI * 2
  fencePart.rotation.x += (Math.random() - 0.5) * 0.2 
  fencePart.rotation.z += (Math.random() - 0.5) * 0.2 
  fencePart.position.y += (Math.random() - 0.5) * 0.25
  
  scene.add(fencePart)
}

for (let i = 0; i < 10; i++) {
  const fencePart = plank.clone()
  fencePart.position.set(-3, 0.65, -  2.7 + i * 0.6) 
  // fencePart.rotation.y = 1.57 // 90 градусів в радіанах
  fencePart.rotation.y = Math.random() * Math.PI * 2
  fencePart.rotation.x += (Math.random() - 0.5) * 0.2 
  fencePart.rotation.z += (Math.random() - 0.5) * 0.2 
  fencePart.position.y += (Math.random() - 0.5) * 0.25
  
  scene.add(fencePart)
}



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 5
camera.position.y = 3
camera.position.z = 7
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap


/**
 *  Shadows
 */
// Cast and receive
directionalLight.castShadow = true
ghost1.castShadow = true
ghost2.castShadow = true
ghost3.castShadow = true
pumpkinLight.castShadow = true

walls.castShadow = true
walls.receiveShadow = true
roof.castShadow = true
floor.receiveShadow = true

for(const grave of graves.children)
{
    grave.castShadow = true
    grave.receiveShadow = true
}

// Mappings
directionalLight.shadow.mapSize.width = 256
directionalLight.shadow.mapSize.height = 256
directionalLight.shadow.camera.top = 8
directionalLight.shadow.camera.right = 8
directionalLight.shadow.camera.bottom = - 8
directionalLight.shadow.camera.left = - 8
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 20

ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 10

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 10

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 10


/**
 * Sky
 */
const sky = new Sky()
sky.material.uniforms['turbidity'].value = 10
sky.material.uniforms['rayleigh'].value = 3
sky.material.uniforms['mieCoefficient'].value = 0.1
sky.material.uniforms['mieDirectionalG'].value = 0.95
sky.material.uniforms['sunPosition'].value.set(0.3, -0.038, -0.95)
sky.scale.set(100, 100, 100)
scene.add(sky)

/**
 * Fog
 */
scene.fog = new THREE.FogExp2('#317ecc', 0.08)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // timer.update()

    // Ghosts
    const ghost1Angle = elapsedTime *0.5
    ghost1.position.x = Math.cos(ghost1Angle) *  4
    ghost1.position.z = Math.sin(ghost1Angle) * 4
    ghost1.position.y = Math.sin(ghost1Angle) * Math.sin(ghost1Angle * 2.34) * Math.sin(ghost1Angle * 3.45)

    const ghost2Angle = - elapsedTime * 0.7
    ghost2.position.x = Math.cos(ghost2Angle) * 5
    ghost2.position.z = Math.sin(ghost2Angle) * 5
    ghost2.position.y = Math.sin(ghost2Angle) * Math.sin(ghost2Angle * 2.34) * Math.sin(ghost2Angle * 3.45)

    const ghost3Angle = elapsedTime * 0.23
    ghost3.position.x = Math.cos(ghost3Angle) * 6
    ghost3.position.z = Math.sin(ghost3Angle) * 6
    ghost3.position.y = Math.sin(ghost3Angle) * Math.sin(ghost3Angle * 2.34) * Math.sin(ghost3Angle * 3.45)

    
    const pumpkinLightIntensity = 3 + Math.sin(elapsedTime * 5) * 0.5
    pumpkinLight.intensity = pumpkinLightIntensity
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()