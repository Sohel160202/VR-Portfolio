import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

export default function VRModel(props) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const modelRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scroll.offset * Math.PI * 2; // full 360° rotation based on scroll
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, -1.2, 0]}
      {...props}
    />
  );
}
