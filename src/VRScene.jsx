import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';

export function VRScene() {
  const group = useRef();
  const { nodes } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const [section, setSection] = useState(0);

  // Monitor scroll position and update section index
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

  // Hide parts based on scroll
  useFrame(() => {
    if (!group.current) return;

    group.current.children.forEach((child, idx) => {
      child.visible = idx >= section ? true : false;
    });
  });

  return (
    <group ref={group} scale={1.5} position={[0, -1.2, 0]}>
      {Object.entries(nodes).map(([name, node]) => {
        const clone = node.clone();
        return <primitive key={name} object={clone} />;
      })}
    </group>
  );
}

useGLTF.preload('/Cybernetic_Listener_Splitted.glb');
