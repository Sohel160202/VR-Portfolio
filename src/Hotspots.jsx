import { Html, useThree } from '@react-three/drei';
import { hotspotData } from './data/hotspots';

export default function Hotspots() {
  const { camera } = useThree();

  const handleClick = (target) => {
    camera.position.set(...target.position);
    camera.lookAt(...target.lookAt);
  };

  return hotspotData.map((hotspot, idx) => (
    <Html key={idx} position={hotspot.position} style={{ pointerEvents: 'auto' }}>
      <button
        onClick={() => handleClick(hotspot)}
        style={{ background: '#ffd000', border: 'none', padding: '5px 10px', borderRadius: '6px' }}
      >
        {hotspot.label}
      </button>
    </Html>
  ));
}
