import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GsapTextDemo: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-40 bg-gradient-to-r from-pink-300 to-indigo-400 rounded-2xl shadow-lg">
      <h1
        ref={textRef}
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-600"
      >
        GSAP Text Animation
      </h1>
    </div>
  );
};

export default GsapTextDemo;
