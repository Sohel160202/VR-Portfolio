import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export function VRScene() {
  const group = useRef();
  const { nodes } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const [section, setSection] = useState(0);

  // Track scroll and map to section index
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const index = Math.round(scrollY / vh);
      setSection(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate parts flying out based on scroll section
  useFrame(() => {
    if (!group.current) return;

    group.current.children.forEach((child, idx) => {
      if (idx < section) {
        // Move part outward
        child.position.lerp(new THREE.Vector3((idx + 1) * 2, idx * 1.5, -idx * 2), 0.05);
        child.rotation.y += 0.01;
      } else {
        // Reset to origin
        child.position.lerp(new THREE.Vector3(0, 0, 0), 0.05);
        child.rotation.y *= 0.9;
      }
    });
  });

  return (
    <group ref={group} scale={1.5} position={[0, -1.2, 0]}>
      {Object.values(nodes).map((node, idx) => (
        <primitive key={idx} object={node} />
      ))}
    </group>
  );
}
