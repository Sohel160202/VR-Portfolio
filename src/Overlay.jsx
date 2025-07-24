// File: src/Overlay.jsx
import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Overlay() {
  const scroll = useScroll();
  const leftRef = useRef();
  const rightRef = useRef();

  useFrame(() => {
    const isVisible = scroll.offset < 0.2;

    if (leftRef.current) {
      leftRef.current.style.opacity = isVisible ? 1 : 0;
      leftRef.current.style.transform = isVisible
        ? 'translateY(0px)'
        : 'translateY(-50px)';
    }

    if (rightRef.current) {
      rightRef.current.style.opacity = isVisible ? 1 : 0;
      rightRef.current.style.transform = isVisible
        ? 'translateY(0px)'
        : 'translateY(-50px)';
    }
  });

  return (
    <Html fullscreen>
      {/* LEFT block */}
      <div
        ref={leftRef}
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '30%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          color: 'white',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>I AM SOHEL</h1>
        <p style={{ lineHeight: '1.7', fontSize: '1rem', fontWeight: 300 }}>
          I’m Sheikh Sohel Moon, a Game and VR Developer specializing in immersive experiences that push the boundaries of storytelling and technology. With expertise in Unreal Engine, C++, Python, VR development and Machine Learning.
        <br /><br />
          I’ve led development on internationally recognized projects, including Netflix’s <i>The Future Of</i> and showcases at Sundance Film Festival.
        </p>
      </div>

      {/* RIGHT block (lowered, margin-tuned) */}
      <div
        ref={rightRef}
        style={{
          position: 'absolute',
          top: '70%',
          right: '5%',
          width: '30%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          color: 'white',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
        }}
      >
        <p style={{ lineHeight: '1.7', fontSize: '1rem', fontWeight: 300 }}>
          Author of <b>Game Development Concepts in C++</b> (Apress/Springer, 2025) and mentor for aspiring creators. Passionate about AI, physics mechanics, and multiplayer VR.
          <br /><br />
          Passionate about AI, physics-based mechanics, multiplayer systems, and VR interactions, I am always exploring new frontiers in game development.
        </p>
      </div>
    </Html>
  );
}
