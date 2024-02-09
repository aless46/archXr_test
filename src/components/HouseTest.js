import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Box3, Vector3 } from 'three'

function Model() {
  const gltf = useLoader(GLTFLoader, 'House.glb')
  
  // Calculer les dimensions de la boîte englobante du modèle
  const box = new Box3().setFromObject(gltf.scene)
  const size = box.getSize(new Vector3())
  
  // Calculer le facteur d'échelle pour que le modèle ait une hauteur de 1.50 mètres
  const scale = 1.10 / size.y
  gltf.scene.scale.set(scale, scale, scale)

  gltf.scene.position.set(0, 1.10, 0) //Possition de la maison a 1 metres de la zone du user
  
  return <primitive object={gltf.scene} />
}

function App() {
  return (
    <>
      <ARButton />
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight color="white"/>
        <XR>
          <Controllers />
          <Hands />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </XR>
      </Canvas>
    </>
  )
}

export default App;
