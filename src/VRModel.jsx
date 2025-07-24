// File: src/VRModel.jsx
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function VRModel() {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const modelRef = useRef();
  const scroll = useScroll();

  const partNames = ['BACK', 'Eye_Left', 'Eye_Right', 'Pipes', 'Strap'];
  const partRefs = useRef({});
  const [hiddenTimers, setHiddenTimers] = useState({});

  useEffect(() => {
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
        // Move part outward slowly
        part.position.lerp(
          new THREE.Vector3((index - 2) * 5, (Math.random() - 0.5) * 8, -8),
          0.05
        );

        // Set timer to hide after 2 seconds
        if (!hiddenTimers[name]) {
          const timer = setTimeout(() => {
            if (part) part.visible = false;
          }, 500);

          setHiddenTimers((prev) => ({ ...prev, [name]: timer }));
        }
      } else {
        // Reset part if scrolling back up
        part.visible = true;
        part.position.lerp(new THREE.Vector3(0, 0, 0), 0.1);

        // Clear timer if exists
        if (hiddenTimers[name]) {
          clearTimeout(hiddenTimers[name]);
          setHiddenTimers((prev) => {
            const copy = { ...prev };
            delete copy[name];
            return copy;
          });
        }
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
