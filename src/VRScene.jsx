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

  const breakPositions = {
    'input':      new THREE.Vector3(-3, 2, -2),
    'input.001':  new THREE.Vector3(3, 1.5, -2),
    'input.002':  new THREE.Vector3(-2, -2, -3),
    'input.003':  new THREE.Vector3(2, -1.5, -2),
    'input.004':  new THREE.Vector3(0, 3, -4),
    'input.005':  new THREE.Vector3(-2, 2, -5),
  };

  useFrame(() => {
    if (!group.current) return;

    group.current.children.forEach((child, idx) => {
      const name = child.userData.partName;
      const target = breakPositions[name] || new THREE.Vector3(0, 5, -5);

      if (idx < section) {
        child.position.lerp(target, 0.05);
        child.rotation.y += 0.02;
      } else {
        child.position.lerp(new THREE.Vector3(0, 0, 0), 0.05);
        child.rotation.y *= 0.9;
      }
    });
  });

  return (
    <group ref={group} scale={1.5} position={[0, -1.2, 0]}>
      {Object.entries(nodes).map(([name, node]) => {
        const clone = node.clone();
        clone.userData.partName = name; // 💡 Attach name for later use
        return <primitive key={name} object={clone} />;
      })}
    </group>
  );
}

// Preload for performance
useGLTF.preload('/Cybernetic_Listener_Splitted.glb');
