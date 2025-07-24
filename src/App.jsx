import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import VRModel from './VRModel';
// import Hotspots from './Hotspots'; // 👈 Removed

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 40 }} // ✅ Your preferred static zoom
      style={{ height: '100vh', width: '100vw' }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <Environment preset="city" />
      <VRModel />
      {/* <Hotspots /> 👈 Removed */}
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}

export default App;
