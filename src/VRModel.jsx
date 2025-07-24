// File: src/VRModel.jsx
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export default function VRModel({ modelRef }) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');

  useEffect(() => {
    if (modelRef.current && scene) {
      // 🧹 Remove existing children to prevent duplication
      while (modelRef.current.children.length > 0) {
        modelRef.current.remove(modelRef.current.children[0]);
      }

      modelRef.current.add(scene);
    }
  }, [scene, modelRef]);

  return null;
}
