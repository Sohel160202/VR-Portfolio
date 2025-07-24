// File: src/VRModel.jsx
import { useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function VRModel(props) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const modelRef = useRef();
  const scroll = useScroll();

  const partNames = ['Part_1', 'Part_2', 'Part_3', 'Part_4', 'Part_5'];
  const [removedParts, setRemovedParts] = useState(new Set());

  useEffect(() => {
    // Reset all parts to visible and original position
    partNames.forEach((name) => {
      const part = scene.getObjectByName(name);
      if (part) {
        part.visible = true;
        part.position.set(0, 0, 0);
      }
    });
  }, [scene]);

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y = scroll.offset * Math.PI * 2;

    const step = 1 / partNames.length;
    const currentIndex = Math.floor(scroll.offset / step);

    partNames.forEach((name, index) => {
      const part = scene.getObjectByName(name);
      if (!part) return;

      if (index < currentIndex && !removedParts.has(name)) {
        // Fly part away
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          -10
        ).toArray((target) => {
          part.position.set(...target);
          part.visible = false;
        });

        setRemovedParts((prev) => new Set(prev).add(name));
      }
    });
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[2, 2, 2]}
      position={[0, -0.5, 0]}
      {...props}
    />
  );
}
