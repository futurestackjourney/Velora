import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Fade-in + upward reveal for each section
    textRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Image pinning & scaling
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0.7 },
        {
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50 dark:from-dark-bg dark:to-dark-surface text-center overflow-hidden"
    >
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
          ScrollTrigger Demo
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-dark-text-secondary">
          A full-page scroll animation built with GSAP
        </p>
      </section>

      {/* Scroll Sections */}
      <section
        ref={(el) => el && textRefs.current.push(el)}
        className="h-screen flex flex-col items-center justify-center px-8"
      >
        <h2 className="text-4xl font-semibold text-indigo-600 dark:text-pink-400">
          Smooth Text Reveal
        </h2>
        <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
          As you scroll, text elements fade and rise beautifully using GSAP’s ScrollTrigger.
        </p>
      </section>

      <section
        ref={(el) => el && textRefs.current.push(el)}
        className="h-screen flex flex-col items-center justify-center bg-white dark:bg-dark-surface"
      >
        <h2 className="text-4xl font-semibold text-pink-500 dark:text-indigo-400">
          Interactive Pinning
        </h2>
        <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
          This section showcases a pinned element that scales as you scroll.
        </p>
      </section>

      {/* Pinned image section */}
      <section className="h-screen flex items-center justify-center">
        <div
          ref={imageRef}
          className="w-64 h-64 bg-gradient-to-tr from-pink-400 to-indigo-500 rounded-full shadow-2xl"
        ></div>
      </section>

      {/* Outro */}
      <section
        ref={(el) => el && textRefs.current.push(el)}
        className="h-screen flex flex-col items-center justify-center"
      >
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Endless Possibilities
        </h2>
        <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
          Combine ScrollTrigger with GSAP timelines for stunning interactive effects.
        </p>
      </section>
    </div>
  );
};

export default ScrollTriggerDemo;
