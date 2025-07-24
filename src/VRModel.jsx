import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

export default function VRModel(props) {
  const { scene, nodes } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const modelRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scroll.offset * Math.PI * 2;
    }
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
