import { useGLTF } from '@react-three/drei';

export default function VRModel(props) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  return <primitive object={scene} {...props} />;
}

// File: src/Hotspots.jsx
import { Html, useThree } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { hotspotData } from './data/hotspots';
import { useSpring, animated } from '@react-spring/three';

export default function Hotspots() {
  const { camera } = useThree();
  const targetRef = useRef(null);

  const handleClick = (target) => {
    camera.position.lerp(target.position, 0.1);
    camera.lookAt(...target.lookAt);
  };

  return hotspotData.map((hotspot, idx) => (
    <Html key={idx} position={hotspot.position} style={{ pointerEvents: 'auto' }}>
      <button
        onClick={() => handleClick(hotspot)}
        style={{ background: '#ffd000', border: 'none', padding: '5px 10px', borderRadius: '6px' }}
      >
        {hotspot.label}
      </button>
    </Html>
  ));
}
