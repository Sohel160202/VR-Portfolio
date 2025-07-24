import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import VRModel from './VRModel';
import Hotspots from './Hotspots';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <VRModel />
      <Hotspots />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}