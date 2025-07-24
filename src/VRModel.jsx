import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function VRModel(props) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const ref = useRef();

  useFrame(() => {
    //ref.current.rotation.y += 0.003;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[2, 2, 2]}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI, 0]}
      {...props}
    />
  );
}
