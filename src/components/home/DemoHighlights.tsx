import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  { title: "Bring Ideas to Life", subtitle: "Watch concepts morph.", gradient: "from-pink-500 to-cyan-500" },
  { title: "Scroll in Motion", subtitle: "Smooth horizontal reveal.", gradient: "from-cyan-500 to-blue-500" },
  { title: "Reactive Motion", subtitle: "Icons floating as you scroll.", gradient: "from-blue-500 to-purple-500" },
  { title: "Hybrid Power", subtitle: "GSAP + Framer Motion together.", gradient: "from-purple-500 to-pink-500" },
];

const CinematicHighlights: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scenesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const sections = scenesRef.current.filter(Boolean) as HTMLDivElement[];
    if (!sections.length || !containerRef.current) return;

    // Total width = number of sections
    const totalWidth = sections.length * 100; 

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1.5,
        end: () => `+=${window.innerHeight}`, // only 1 screen scroll
      },
    });

    // Optional floating animations
    sections.forEach((section) => {
      const floats = section.querySelectorAll<SVGSVGElement>(".floating");
      floats.forEach((el, i) => {
        gsap.to(el, { y: "+=15", rotation: 30, repeat: -1, yoyo: true, duration: 2 + i * 0.5, ease: "sine.inOut" });
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div className="flex w-[400%] h-full">
        {scenes.map((scene, i) => (
          <div
            key={i}
            ref={(el) => (scenesRef.current[i] = el)}
            className={`w-screen h-full flex flex-col items-center justify-center text-white bg-gradient-to-r ${scene.gradient} relative`}
          >
            <h2 className="text-4xl font-extrabold mb-4">{scene.title}</h2>
            <p className="text-xl">{scene.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CinematicHighlights;
