// File: src/VRModel.jsx
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function VRModel({ modelRef }) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const localRef = useRef();
  const scroll = useScroll();

  const partNames = ['BACK', 'Eye_Left', 'Eye_Right', 'Pipes', 'Strap'];
  const [animatedParts, setAnimatedParts] = useState({});

  useEffect(() => {
    if (modelRef?.current && localRef.current) {
      modelRef.current.add(localRef.current);
    }

    partNames.forEach((name) => {
      const part = scene.getObjectByName(name);
      if (part) {
        part.visible = true;
        part.position.set(0, 0, 0);
      }
    });

    localRef.current = scene;
  }, [scene, modelRef]);

  useFrame(() => {
    if (!localRef.current) return;

    localRef.current.rotation.y = scroll.offset * Math.PI * 2;

    const step = 1 / partNames.length;
    const currentIndex = Math.floor(scroll.offset / step);

    partNames.forEach((name, index) => {
      const part = scene.getObjectByName(name);
      if (!part) return;

      if (index < currentIndex && !animatedParts[name]) {
        const direction = new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize();

        animatedParts[name] = { direction, speed: 0.15, distance: 0 };
        setAnimatedParts({ ...animatedParts });
      }

      if (animatedParts[name]) {
        const partAnim = animatedParts[name];
        part.position.addScaledVector(partAnim.direction, partAnim.speed);
        partAnim.distance += partAnim.speed;

        if (partAnim.distance > 10) {
          part.visible = false;
          delete animatedParts[name];
          setAnimatedParts({ ...animatedParts });
        }
      }
    });
  });

  return null;
}
