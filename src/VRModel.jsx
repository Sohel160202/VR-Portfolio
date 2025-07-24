import { useGLTF } from '@react-three/drei';

export default function VRModel(props) {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  return <primitive object={scene} {...props} />;
}
