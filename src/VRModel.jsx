import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';

export default function VRModel({ modelRef }) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.add(scene);
    }
  }, [scene, modelRef]);

  return null;
}
