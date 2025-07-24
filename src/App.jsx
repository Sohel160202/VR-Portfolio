import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import VRModel from './VRModel';
import './style.css';

export default function App() {
  return (
    <div className="app">
      {/* 🎮 VR Canvas fixed in background */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={1.2} />
          <Environment preset="city" />
          <VRModel />
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>

      {/* 📄 Scroll Sections */}
      <div className="section-container">
        <section className="section">ABOUT ME</section>
        <section className="section">WORK EXPERIENCE</section>
        <section className="section">PUBLICATIONS</section>
        <section className="section">IMPRESSIONS</section>
        <section className="section">HONOURS AND AWARDS</section>
      </div>
    </div>
  );
}
