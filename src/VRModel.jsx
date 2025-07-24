import { useGLTF } from '@react-three/drei';

export default function VRModel(props) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');

  return (
    <primitive
      object={scene}
      scale={3} // 🔥 Try 2 or 3 if needed
      position={[0, -1.2, 0]} // 🔧 adjust to recenter it visually
      {...props}
    />
  );
}
