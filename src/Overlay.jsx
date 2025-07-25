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
  const pubLeftRef = useRef();
  const pubRightRef = useRef();
  const impressionsRef = useRef();

  const [page2Top, setPage2Top] = useState('100vh');
  const [page3Top, setPage3Top] = useState('200vh');
  const [page4Top, setPage4Top] = useState('300vh');

  useEffect(() => {
    setPage2Top(`${window.innerHeight * 1 + 500}px`);
    setPage3Top(`${window.innerHeight * 2 + 500}px`);
    setPage4Top(`${window.innerHeight * 3 + 500}px`);
  }, []);

  useFrame(() => {
    const introVisible = scroll.range(0, 1 / 5); // page 0 to 1
    const expVisible = scroll.range(1 / 5, 1 / 5); // page 1 to 2
    const pubVisible = scroll.range(2 / 5, 1 / 5); // page 2 to 3
    const impressionsVisible = scroll.range(3 / 5, 1 / 5); // page 3 to 4

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

    if (pubLeftRef.current) {
      pubLeftRef.current.style.opacity = pubVisible ? 1 : 0;
      pubLeftRef.current.style.transform = pubVisible ? 'translateY(0px)' : 'translateY(-50px)';
    }
    if (pubRightRef.current) {
      pubRightRef.current.style.opacity = pubVisible ? 1 : 0;
      pubRightRef.current.style.transform = pubVisible ? 'translateY(0px)' : 'translateY(50px)';
    }

    if (impressionsRef.current) {
      impressionsRef.current.style.opacity = impressionsVisible ? 1 : 0;
      impressionsRef.current.style.transform = impressionsVisible ? 'translateY(0px)' : 'translateY(50px)';
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

      {/* Page 3: PUBLICATIONS */}
      <div
        ref={pubLeftRef}
        style={{
          position: 'absolute',
          top: page3Top,
          left: '5%',
          width: '40%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          color: '#e71334',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
        }}
      >
        <p><a href="https://sohelmoon.medium.com/unreal-engine-4-aimoffset-replication-in-fps-multiplayer-6fe8594b7311" target="_blank">Unreal Engine 4: AimOffSet Replication in FPS Multiplayer</a></p>
        <p><a href="https://sohelmoon.medium.com/unreal-engine-4-criteria-of-using-linetracebychannel-projectile-movement-component-and-move-dbb5cecbc073" target="_blank">Unreal Engine 4: Criteria of Using LineTraceByChannel...</a></p>
        <p><a href="https://sohelmoon.medium.com/cross-disciplinary-collaboration-a-game-developers-perspective-7a504fa00805" target="_blank">Cross-Disciplinary Collaboration: A Game Developer’s Perspective</a></p>
      </div>

      <div
        ref={pubRightRef}
        style={{
          position: 'absolute',
          top: page3Top,
          right: '5%',
          width: '40%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          color: 'white',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
        }}
      >
        <h3><a href="https://link.springer.com/book/10.1007/979-8-8688-1399-3" target="_blank" style={{ color: '#e71334' }}>
          Game Development Concepts in C++
        </a></h3>
        <p><i>Elevate Your Skills with Unreal Engine</i></p>
        <p>Publisher: Apress</i></p>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '1rem' }}>
          This guide focuses on programming game mechanics in C++ with Unreal Engine, featuring over 100 templates and code snippets.
          It covers collision detection, AI behaviors, advanced physics, networking, and performance optimization, aimed at intermediate developers.
          Author Sheikh Sohel Moon shares insights from notable projects to help readers master advanced game development techniques.
        </p>
      </div>
 <div
        ref={impressionsRef}
        style={{
          position: 'absolute',
          top: page4Top,
          left: '5%',
          width: '90%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          color: 'white',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
          pointerEvents: 'none',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'white' }}>
          IMPRESSIONS<span style={{ color: '#E63946' }}>.</span>
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            justifyItems: 'center',
          }}
        >
          <img src="/images/impression1.jpg" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          <img src="/images/impression2.jpg" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          <img src="/images/impression3.jpg" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          <img src="/images/impression4.jpg" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          <img src="/images/impression5.jpg" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          <img src="/images/impression6.jpg" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
        </div>
      </div>
            <div
        ref={contactRef}
        style={{
          position: 'absolute',
          top: page5Top,
          left: '10%',
          right: '10%',
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          fontFamily: 'Orbitron, sans-serif',
          opacity: 0,
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div>
          <h1>NEED MORE INFORMATION<span style={{ color: '#e71334' }}>?</span></h1>
          <p style={{ marginTop: '1rem' }}>
            <a href="mailto:shlsbbr@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>shlsbbr@gmail.com</a>
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a href="/Resume_SheikhSohelMoon.pdf" download style={{ color: 'white', textDecoration: 'underline' }}>Download My Resume</a>
          </p>
        </div>
        <div>
          <img src="/images/resume-icon.png" alt="Resume Icon" style={{ width: '100px' }} />
        </div>
      </div>
    </Html>
  );
}

