import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';

export default function PartsController({ modelRef }) {
  const scroll = useScroll();
  const partNames = ['BACK', 'Eye_Left', 'Eye_Right', 'Pipes', 'Strap'];
  const [removedParts, setRemovedParts] = useState(new Set());

  useEffect(() => {
    if (!modelRef.current) return;
    partNames.forEach((name) => {
      const part = modelRef.current.getObjectByName(name);
      if (part) {
        part.visible = true;
        part.position.set(0, 0, 0);
      }
    });
    setRemovedParts(new Set());
  }, [modelRef]);

  useFrame(() => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y = scroll.offset * Math.PI * 2;

    const step = 1 / partNames.length;
    const currentIndex = Math.floor(scroll.offset / step);

    partNames.forEach((name, index) => {
      const part = modelRef.current.getObjectByName(name);
      if (!part) return;

      if (index < currentIndex && !removedParts.has(name)) {
        part.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          -15
        );
        setTimeout(() => {
          part.visible = false;
        }, 600);
        setRemovedParts((prev) => new Set(prev).add(name));
      }
    });
  });

  return null;
}
