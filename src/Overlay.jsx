// File: src/Overlay.jsx
import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Overlay() {
  const scroll = useScroll();

  const leftRef = useRef();
  const rightRef = useRef();
  const leftExpRef = useRef();
  const rightExpRef = useRef();

  useFrame(() => {
    const currentPage = Math.round(scroll.offset * scroll.pages); // Clean page detection

    const showIntro = currentPage === 0;
    const showExp = currentPage === 1;

    if (leftRef.current) {
      leftRef.current.style.opacity = showIntro ? 1 : 0;
      leftRef.current.style.transform = showIntro ? 'translateY(0px)' : 'translateY(-50px)';
    }

    if (rightRef.current) {
      rightRef.current.style.opacity = showIntro ? 1 : 0;
      rightRef.current.style.transform = showIntro ? 'translateY(0px)' : 'translateY(-50px)';
    }

    if (leftExpRef.current) {
      leftExpRef.current.style.opacity = showExp ? 1 : 0;
      leftExpRef.current.style.transform = showExp ? 'translateY(0px)' : 'translateY(50px)';
    }

    if (rightExpRef.current) {
      rightExpRef.current.style.opacity = showExp ? 1 : 0;
      rightExpRef.current.style.transform = showExp ? 'translateY(0px)' : 'translateY(50px)';
    }
  });

  return (
    <Html fullscreen>
      {/* Page 1 LEFT */}
      <div ref={leftRef} style={sectionStyle('20%', 'left')}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>I AM SOHEL</h1>
        <p style={paraStyle}>
          I’m Sheikh Sohel Moon, a Game and VR Developer specializing in immersive experiences that push the boundaries of storytelling and technology. With expertise in Unreal Engine, C++, Python, VR development and Machine Learning.
          <br /><br />
          I’ve led development on internationally recognized projects, including Netflix’s <i>The Future Of</i> and showcases at Sundance Film Festival.
        </p>
      </div>

      {/* Page 1 RIGHT */}
      <div ref={rightRef} style={sectionStyle('70%', 'right')}>
        <p style={paraStyle}>
          Author of <b>Game Development Concepts in C++</b> (Apress/Springer, 2025) and mentor for aspiring creators. Passionate about AI, physics mechanics, and multiplayer VR.
          <br /><br />
          Passionate about AI, physics-based mechanics, multiplayer systems, and VR interactions, I am always exploring new frontiers in game development.
        </p>
      </div>

      {/* Page 2 LEFT */}
      <div ref={leftExpRef} style={sectionStyle('10%', 'left')}>
        <h2 style={titleStyle}>Lead Game & VR Developer</h2>
        <p style={metaStyle}>Studioteka | NY, USA | 04/2022 – Present</p>
        <ul style={listStyle}>
          <li>Led immersive VR on climate narratives</li>
          <li>Directed future-themed VR prototype</li>
          <li>Managed task flow across 3D, animation, and design</li>
          <li><b>Key Project:</b> 2100: A Dystopian Utopia (Netflix, Sundance)</li>
        </ul>

        <h2 style={{ ...titleStyle, marginTop: '2rem' }}>Trainer</h2>
        <p style={metaStyle}>Onunad | Dhaka | 03/2020 – 06/2021</p>
        <ul style={listStyle}>
          <li>Developed Unreal Engine 4 curriculum</li>
          <li>Mentored developers through hands-on projects</li>
        </ul>
      </div>

      {/* Page 2 RIGHT */}
      <div ref={rightExpRef} style={sectionStyle('10%', 'right')}>
        <h2 style={titleStyle}>Senior Game Developer</h2>
        <p style={metaStyle}>Appstick | Khulna | 12/2021 – 04/2022</p>
        <ul style={listStyle}>
          <li>Led dev team & ensured smooth execution</li>
          <li>Trained team on Unreal Engine</li>
          <li>Managed client requirements & integration</li>
        </ul>

        <h2 style={{ ...titleStyle, marginTop: '2rem' }}>Game Developer</h2>
        <p style={metaStyle}>Opus | Dhaka | 08/2021 – 10/2021</p>
        <ul style={listStyle}>
          <li>Designed game strategies & mechanics</li>
          <li>Managed feature integration & documentation</li>
        </ul>

        <h2 style={{ ...titleStyle, marginTop: '2rem' }}>Founder & Head of Prototypes</h2>
        <p style={metaStyle}>Studio ThunderBolt | Dhaka | 02/2018 – 02/2020</p>
        <ul style={listStyle}>
          <li>Built game prototypes and asset services</li>
          <li>Led game design and dev pipeline</li>
        </ul>
      </div>
    </Html>
  );
}

// ✨ Style helpers
function sectionStyle(top, side) {
  return {
    position: 'absolute',
    top,
    [side]: '5%',
    width: '30%',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    color: 'white',
    fontFamily: 'Orbitron, sans-serif',
    opacity: 0,
    zIndex: 10,
    pointerEvents: 'none',
  };
}

const paraStyle = {
  lineHeight: '1.7',
  fontSize: '1rem',
  fontWeight: 300,
};

const titleStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const metaStyle = {
  fontSize: '0.9rem',
  opacity: 0.8,
};

const listStyle = {
  fontSize: '0.9rem',
  lineHeight: '1.6',
  marginTop: '0.5rem',
};
