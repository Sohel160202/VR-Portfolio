// File: src/Overlay.jsx
import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';

export default function Overlay() {
  const scroll = useScroll();
  const leftRef = useRef();
  const rightRef = useRef();
  const leftExpRef = useRef();
  const rightExpRef = useRef();

  const [page2Top, setPage2Top] = useState('100vh');

  useEffect(() => {
    setPage2Top(`${window.innerHeight * 1 + 500}px`);
  }, []);

  useFrame(() => {
    const introVisible = scroll.range(0, 1 / 5); // page 0 to 1
    const expVisible = scroll.range(1 / 5, 1 / 5); // page 1 to 2

    if (leftRef.current) {
      leftRef.current.style.opacity = introVisible ? 1 : 0;
      leftRef.current.style.transform = introVisible
        ? 'translateY(0px)'
        : 'translateY(-50px)';
    }

    if (rightRef.current) {
      rightRef.current.style.opacity = introVisible ? 1 : 0;
      rightRef.current.style.transform = introVisible
        ? 'translateY(0px)'
        : 'translateY(-50px)';
    }

    if (leftExpRef.current) {
      leftExpRef.current.style.opacity = expVisible ? 1 : 0;
      leftExpRef.current.style.transform = expVisible
        ? 'translateY(0px)'
        : 'translateY(50px)';
    }

    if (rightExpRef.current) {
      rightExpRef.current.style.opacity = expVisible ? 1 : 0;
      rightExpRef.current.style.transform = expVisible
        ? 'translateY(0px)'
        : 'translateY(50px)';
    }
  });

  return (
    <Html fullscreen>
      {/* Page 1: INTRO LEFT */}
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

      {/* Page 1: INTRO RIGHT */}
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

      {/* Page 2: EXPERIENCE LEFT */}
      <div
        ref={leftExpRef}
        style={{
          position: 'absolute',
          top: page2Top,
          left: '5%',
          width: '30%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          color: 'white',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
     <h2 style={{ fontSize: '1.2rem' }}>Lead Game & VR Developer</h2>
  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
    Studioteka Design LLC | New York, United States | 01/04/2022 – Present
  </p>
  <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
    <li>Led immersive VR experiences on climate narratives</li>
    <li>Directed future-themed VR prototype</li>
    <li>Managed task flow across 3D, animation, and design</li>
    <li><b>Key Project:</b> 2100: A Dystopian Utopia (Netflix, Sundance)</li>
  </ul>

  <h2 style={{ fontSize: '1.2rem', marginTop: '2rem' }}>Senior Game Developer</h2>
  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
    Appstick | Khulna | 01/12/2021 – 30/04/2022
  </p>
  <ul style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
    <li>Led dev team and ensured smooth execution</li>
    <li>Trained team on Unreal Engine</li>
    <li>Managed client requirements & integration</li>
  </ul>
</div>
      
      {/* Page 2: EXPERIENCE RIGHT */}
      <div
        ref={rightExpRef}
        style={{
          position: 'absolute',
          top: page2Top,
          right: '5%',
          width: '30%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          color: 'white',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
    <h2 style={{ fontSize: '1.2rem' }}>Game Developer</h2>
  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
    Opus Technology Ltd | Dhaka | 08/2021 – 10/2021
  </p>
  <ul style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
    <li>Designed strategies & mechanics for games</li>
    <li>Managed feature integration & documentation</li>
  </ul>

  <h2 style={{ fontSize: '1.2rem', marginTop: '2rem' }}>Founder & Head of Prototypes</h2>
  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
    Studio ThunderBolt | Dhaka | 02/2018 – 02/2020
  </p>
  <ul style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
    <li>Built game prototypes and asset services</li>
    <li>Led game design and dev pipeline</li>
  </ul>
</div>
    </Html>
  );
}
