import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { TextureLoader } from 'three'
import { Canvas, useLoader } from '@react-three/fiber'

function App() {
  const texture = useLoader(TextureLoader, 'pexels-pixabay-47367.jpg')

  return (
    <>
      <ARButton />
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight color="white"/>
        <XR>
          <Controllers />
          <Hands />
          <mesh position={[0, 0.50, 0]}>
            <boxGeometry args={[0.50, 0.50 , 0.50]} />
            <meshStandardMaterial map={texture}/>
          </mesh>
        </XR>
      </Canvas>
    </>
  )
}

export default App;
