import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedButton from '../components/AnimatedButton';
import AnimatedCard from '../components/AnimatedCard';

interface PreviewProps {
  selectedComponent: 'button' | 'card';
  animationProps: any;
}

const Preview: React.FC<PreviewProps> = ({ selectedComponent, animationProps }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, { ...animationProps });
    }
  }, [animationProps]);

  return (
    <div className="flex justify-center items-center h-[60vh] bg-dark-card rounded-xl shadow-md border border-border">
      <div ref={ref}>
        {selectedComponent === 'button' ? <AnimatedButton /> : <AnimatedCard />}
      </div>
    </div>
  );
};

export default Preview;
