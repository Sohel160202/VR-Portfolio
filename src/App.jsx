import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import VRModel from './VRModel';
import Hotspots from './Hotspots';

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 40 }}
      style={{ height: '100vh', width: '100vw' }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <Environment preset="city" />
      <VRModel />
      <Hotspots />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}

export default App;
