import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { VRScene } from './VRScene';
import useSectionObserver from './hooks/useSectionObserver';
import './style.css';

const SECTIONS = [
  'Welcome to My VR Portfolio',
  'About Me',
  'Projects',
  'Experience',
  'Contact',
];

function App() {
  const currentSection = useSectionObserver(SECTIONS.length);

  return (
    <div className="app">
      {/* Canvas 3D scene */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={1.2} />
          <Environment preset="city" />
          <VRScene section={currentSection} />
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>

      {/* Scrollable sections */}
      <div className="section-container">
        {SECTIONS.map((label, index) => (
          <div className="section" key={index}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
