import { useEffect, useState } from 'react';

export default function useSectionObserver(sectionCount) {
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const index = Math.min(
        sectionCount - 1,
        Math.round(scrollY / vh)
      );
      setSectionIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionCount]);

  return sectionIndex;
}
