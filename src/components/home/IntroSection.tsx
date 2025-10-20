// components/home/IntroSection.tsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import HeadTextSec from "../HeadTextSec";

const IntroSection: React.FC = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = shapesRef.current?.querySelectorAll(".shape");
    if (shapes) {
      gsap.fromTo(
        shapes,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: shapesRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-dark-bg text-white overflow-hidden">
      <div className="mx-auto section-padding flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="max-w-lg space-y-5">
            <HeadTextSec headTextSec="Animate Smarter. Build Faster."/>
          <p className="text-lg text-gray-300 leading-relaxed">
            Velora lets you explore, test, and master modern web animations using{" "}
            <span className="text-pink-400 font-medium">GSAP</span> and{" "}
            <span className="text-blue-400 font-medium">Framer Motion</span>.  
            Write, edit, and preview live — all in one sleek playground.
          </p>
          <button className="px-6 py-3 bg-blue hover:bg-blue-500 rounded-xl font-medium transition duration-200 shadow-md shadow-blue-500/20">
            Try Playground
          </button>
        </div>

        {/* Animated Shapes */}
        <div ref={shapesRef} className="relative w-full md:w-1/2 h-80">
          <div className="shape absolute top-8 left-12 w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-2xl blur-sm"></div>
          <div className="shape absolute bottom-12 right-10 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"></div>
          <div className="shape absolute top-32 right-1/3 w-14 h-14 bg-gradient-to-r from-blue-500 to-pink-500 rotate-45 rounded-xl blur-sm"></div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_70%)]"></div>
    </section>
  );
};

export default IntroSection;
