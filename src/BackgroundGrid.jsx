// File: src/BackgroundGrid.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function BackgroundGrid() {
  const gridRef = useRef();

  useFrame(({ clock }) => {
    if (gridRef.current) {
      // Slight rotation over time for animation
      gridRef.current.rotation.x = Math.PI / 2;
      gridRef.current.material.opacity = 0.05 + Math.sin(clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[100, 100, '#00ffff', '#00ffff']}
      position={[0, -3, 0]}
      renderOrder={-1}
    />
  );
}
