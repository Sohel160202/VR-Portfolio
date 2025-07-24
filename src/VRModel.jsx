// File: src/VRModel.jsx
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function VRModel() {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const modelRef = useRef();
  const scroll = useScroll();

  const partNames = ['BACK', 'Eye_Left', 'Eye_Right', 'Pipes', 'Strap'];
  const partRefs = useRef({});

  useEffect(() => {
    // Reset all part visibility & positions on load
    partNames.forEach((name) => {
      const part = scene.getObjectByName(name);
      if (part) {
        part.visible = true;
        part.position.set(0, 0, 0);
        partRefs.current[name] = part;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y = scroll.offset * Math.PI * 2;

    const step = 1 / partNames.length;
    const currentIndex = Math.floor(scroll.offset / step);

    partNames.forEach((name, index) => {
      const part = partRefs.current[name];
      if (!part) return;

      if (index < currentIndex) {
        // Animate flying away
        part.position.lerp(new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, -10), 0.05);

        // Optional: hide once far enough
        if (part.position.length() > 15) {
          part.visible = false;
        }
      } else {
        // Reset if user scrolls back
        part.visible = true;
        part.position.lerp(new THREE.Vector3(0, 0, 0), 0.1);
      }
    });
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[2, 2, 2]}
      position={[0, -0.5, 0]}
    />
  );
}
