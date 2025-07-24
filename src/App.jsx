import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import VRModel from './VRModel';
import BackgroundGrid from './BackgroundGrid';

export default function App() {

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 40 }} style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />

      <BackgroundGrid /> {/* ✅ Add grid behind everything */}

      <ScrollControls pages={5} damping={0.1}>
        <VRModel />
      </ScrollControls>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
