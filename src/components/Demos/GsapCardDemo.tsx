import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GsapCardDemo: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 bg-gradient-to-br from-pink-400 to-indigo-500 rounded-2xl text-white shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
    >
      <h3 className="text-2xl font-bold mb-2">GSAP Card</h3>
      <p className="opacity-90">Subtle floating animation with GSAP.</p>
    </div>
  );
};

export default GsapCardDemo;
