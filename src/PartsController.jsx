// File: src/PartsController.jsx
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useScroll } from '@react-three/drei';

const PART_NAMES = ['Strap', 'Pipes', 'Head', 'Eye_Right', 'Eye_Left'];
const PART_POSITIONS = {
  Strap: [0, 0.2, 0],
  Pipes: [0.2, -0.1, 0.1],
  Head: [0, 0, 0],
  Eye_Right: [0.1, 0.1, 0.2],
  Eye_Left: [-0.1, 0.1, 0.2],
};

export default function PartsController() {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const scroll = useScroll();
  const { camera } = useThree();

  const groupRefs = useRef({});

  // Memoize group initialization
  const partGroups = useMemo(() => {
    return PART_NAMES.map((name) => {
      const obj = scene.getObjectByName(name);
      const group = new THREE.Group();
      if (obj) {
        group.add(obj);
        scene.add(group);
      }
      groupRefs.current[name] = group;
      return group;
    });
  }, [scene]);

  useFrame(() => {
    const scrollIndex = Math.floor(scroll.offset * 5); // 5 scroll pages

    PART_NAMES.forEach((name, index) => {
      const group = groupRefs.current[name];
      if (!group) return;

      const basePos = PART_POSITIONS[name];
      const targetPos = scrollIndex > index
        ? [basePos[0] * 5, basePos[1] * 5, basePos[2] + 10]
        : basePos;

      group.position.lerp(
        new THREE.Vector3(...targetPos),
        0.1 // smoothness
      );

      // Optional: fade opacity based on distance
      group.visible = true;
    });

    // Optional: camera rotation based on scroll
    camera.rotation.y = scroll.offset * Math.PI * 2;
  });

  return null;
}
