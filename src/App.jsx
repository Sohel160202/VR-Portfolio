// src/App.jsx
import { Canvas } from '@react-three/fiber';
import { VRScene } from './VRScene'; // this will host your glTF and animation logic
import './style.css';

export default function App() {
  return (
    <div className="app">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <VRScene />
      </Canvas>

      <div className="section-container">
        <section className="section">ABOUT ME</section>
        <section className="section">WORK EXPERIENCE</section>
        <section className="section">PUBLICATIONS</section>
        <section className="section">IMPRESSIONS</section>
        <section className="section">AWARDS</section>
      </div>
    </div>
  );
}
