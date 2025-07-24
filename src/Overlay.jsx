// File: src/Overlay.jsx
import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Overlay() {
  const scroll = useScroll();
  const sectionRef = useRef();

  useFrame(() => {
    if (sectionRef.current) {
      const visible = scroll.offset < 0.2; // only on first 20% of scroll
      sectionRef.current.style.opacity = visible ? 1 : 0;
      sectionRef.current.style.transform = visible
        ? 'translateY(0px)'
        : 'translateY(-50px)';
    }
  });

  return (
    <Html fullscreen>
      <div
        ref={sectionRef}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '35%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          opacity: 0,
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>I AM SOHEL</h1>
        <p style={{ lineHeight: '1.7', fontSize: '1rem', fontWeight: 300 }}>
          I’m Sheikh Sohel Moon, a Game and VR Developer specializing in immersive experiences that push the boundaries of storytelling and technology.
          <br /><br />
          I’ve led development on internationally recognized projects, including Netflix’s <i>The Future Of</i> and showcases at Sundance Film Festival.
          <br /><br />
          Author of <b>Game Development Concepts in C++</b> (Apress/Springer, 2025) and mentor for aspiring creators. Passionate about AI, physics mechanics, and multiplayer VR.
        </p>
      </div>
    </Html>
  );
}
