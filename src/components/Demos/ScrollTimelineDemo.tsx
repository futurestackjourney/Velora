import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTimelineDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
    });

    // Scene 1: Fade in text 1
    tl.fromTo(
      text1Ref.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    ).to(text1Ref.current, { opacity: 0, y: -100, duration: 1 }, "+=1");

    // Scene 2: Circle grows + color shift
    tl.fromTo(
      circleRef.current,
      { scale: 0.3, background: "linear-gradient(to right, #6366f1, #ec4899)" },
      {
        scale: 1,
        background: "linear-gradient(to right, #ec4899, #f472b6)",
        duration: 1.5,
      }
    );

    // Scene 3: Fade in second text
    tl.fromTo(
      text2Ref.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    ).to(text2Ref.current, { opacity: 0, y: -100, duration: 1 }, "+=1");

    // Scene 4: Background color shift
    tl.to(containerRef.current, {
      backgroundColor: "#111827",
      duration: 1,
      ease: "power2.inOut",
    });

    // Scene 5: Final text reveal
    tl.fromTo(
      text3Ref.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1 }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 to-indigo-100 text-center"
    >
      <h1
        ref={text1Ref}
        className="absolute text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500"
      >
        Animate As You Scroll
      </h1>

      <div
        ref={circleRef}
        className="absolute w-72 h-72 rounded-full shadow-2xl"
      ></div>

      <h1
        ref={text2Ref}
        className="absolute text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500"
      >
        ScrollTrigger + Timeline
      </h1>

      <h1
        ref={text3Ref}
        className="absolute text-5xl font-bold text-white"
      >
        The Velora Experience
      </h1>
    </div>
  );
};

export default ScrollTimelineDemo;
