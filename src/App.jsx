import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { useRef } from 'react';
import VRModel from './VRModel';
import PartsController from './PartsController';

export default function App() {
  const modelRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 40 }} style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />

      <ScrollControls pages={5} damping={0.1}>
        <VRModel modelRef={modelRef} />
        <PartsController modelRef={modelRef} />
      </ScrollControls>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
