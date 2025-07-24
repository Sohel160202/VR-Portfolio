// File: src/App.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import VRModel from './VRModel';
import InfoPanels from './InfoPanels';

export default function App() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 8], fov: 40 }}
      style={{ height: '100vh', width: '100vw' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />

      <ScrollControls pages={1} damping={0.1}>
        <VRModel />
        <InfoPanels />
      </ScrollControls>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
