import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useScroll, useGLTF } from '@react-three/drei';

export default function PartsController() {
  const { scene } = useGLTF('/Cybernetic_Listener_Splitted.glb');
  const scroll = useScroll();

  const parts = {
    1: scene.getObjectByName('Strap'),
    2: scene.getObjectByName('Pipes'),
    3: scene.getObjectByName('Eye_Left'),
    4: scene.getObjectByName('Eye_Right'),
    5: scene.getObjectByName('BACK')
  };

  const positions = {
    1: [0, 1, 0],
    2: [1, 1, 0],
    3: [-1, 1, 0],
    4: [0, 1, 1],
    5: [0, -1, 0]
  };

  useFrame(() => {
    const offset = scroll.offset;

    Object.entries(parts).forEach(([index, part]) => {
      const page = (index - 1) / 5;
      if (!part) return;

      if (offset > page && offset < page + 0.2) {
        part.position.y += 0.1;
        if (part.position.y > 5) {
          part.visible = false;
        }
      }
    });
  });

  return null;
}
