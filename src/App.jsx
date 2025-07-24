// File: src/App.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import VRModel from './VRModel';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      <ScrollControls pages={1} damping={0.1}>
        <VRModel />
      </ScrollControls>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
