import { useLayoutEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import HeroButton from "../components/ui/HeroButton";

type Props = { className?: string };

const WORD1 = "Craft.Code. ";
const WORD2 = "Animated";

const AccentBlob = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className = "" }, ref) => (
    <svg
      ref={ref}
      className={className}
      height="24"
      width="24"
      viewBox="0 0 503.6 503.6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g id="SVGRepo_iconCarrier">
        <polygon
          style={{ fill: "#FB9FB8" }}
          points="459.4,373.2 251.4,495.6 43.4,373.2 43.4,130 251.4,7.6 459.4,130"
        />
        <polyline
          style={{ fill: "#FB9FB8" }}
          points="464.2,374 253.8,495.6 43.4,373.2 43.4,131.6"
        />
        <polyline
          style={{ fill: "#FB9FB8" }}
          points="43.4,371.6 43.4,130 254.6,6.8"
        />
        <path
          style={{ fill: "#EFEFEF" }} //outside line
          d="M251.4,503.6c-1.6,0-2.4,0-4-0.8L37.8,380.4c-2.4-1.6-2.4-4-2.4-7.2V130
        c0-3.2,0-5.6,2.4-7.2L248.2,1.2c2.4-1.6,4.8-1.6,8,0l209.6,121.6c2.4,1.6,2.4,4,2.4,7.2v244
        c0,3.2,0,5.6-2.4,7.2L254.6,502C253.8,502.8,253,503.6,251.4,503.6z M51.4,369.2l200,117.6l200-117.6V134
        l-200-116.8L51.4,134V369.2z"
        />
        <polygon
          style={{ fill: "#FA4FB8" }} //outside triangle
          points="251.4,251.6 41.8,372.4 251.4,15.6 251.4,249.2"
        />
        <path
          style={{ fill: "#FA9FB8" }} // inside triangle
          d="M127.4,227.6c-1.6,8-2.4,16.8-2.4,25.6c0,22.4,5.6,44,16,62.4l110.4-64v-2.4V126
        c-32,0-60.8,12-83.2,31.2L127.4,227.6z"
        />
        <path
          style={{ fill: "#FA4FB8" }} // inside circle half
          d="M251.4,126c-32,0-60.8,12-83.2,31.2l-40.8,70.4c-1.6,8-2.4,16.8-2.4,25.6
        c0,22.4,5.6,44,16,62.4"
        />
        <polygon
          style={{ fill: "#FA4FB8" }} //outside triangle
          points="251.4,251.6 461,372.4 251.4,15.6 251.4,249.2"
        />
        <path
          style={{ fill: "#FA4FB8" }} // inside circle
          d="M251.4,251.6l110.4,64c10.4-18.4,16-39.2,16-62.4c0-8.8-0.8-17.6-2.4-25.6L334.6,158
        c-22.4-19.2-51.2-31.2-83.2-31.2v122.4V251.6z"
        />
        <path
          style={{ fill: "#FA4FB8" }} //outside triangle
          d="M41.8,371.6 251.4,250.8 461,371.6"
        />
        <path
          style={{ fill: "#FA9FB8" }} //inside triangle
          d="M361.8,314.8l-110.4-64l-110.4,64c14.4,26.4,40.8,48.8,69.6,56.8h81.6
        C320.2,363.6,347.4,341.2,361.8,314.8z"
        />
        <path
          style={{ fill: "#FA4FB8" }} //inside half circle
          d="M141,314.8c14.4,26.4,44,48.8,72.8,56.8h78.4c28.8-8,55.2-30.4,70.4-56.8"
        />
        <path
          style={{ fill: "white" }} //inside triangle line
          d="M461,379.6H41.8c-4,0-4-1.6-4.8-4.8c-0.8-3.2-2.4-7.2,0.8-9.6l209.6-120.8
        c2.4-1.6,5.6-1.6,8,0l208.8,120.8c3.2,0.8,0.8,4,0.8,7.2C465,376.4,465.8,379.6,461,379.6z M71.4,363.6h359.2l-179.2-104L71.4,363.6z"
        />
        <path
          style={{ fill: "white" }} //inside circle line
          d="M251.4,380.4c-70.4,0-127.2-56.8-127.2-127.2S181,126,251.4,126s127.2,56.8,127.2,127.2
        S321.8,380.4,251.4,380.4z M251.4,142c-61.6,0-111.2,49.6-111.2,111.2s49.6,111.2,111.2,111.2s111.2-49.6,111.2-111.2
        S313,142,251.4,142z"
        />
      </g>
    </svg>
  )
);

const AccentSpark = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className = "" }, ref) => (
    <svg
      ref={ref}
      className={className}
      width="16"
      height="16"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      transform="rotate(120)matrix(-1, 0, 0, 1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M96 8a6.001 6.001 0 0 1 5.305 3.196l74 140a6 6 0 0 1-7.323 8.454l-51.512-18.397-15.423 23.992a6 6 0 0 1-10.094 0L75.53 141.253 24.018 159.65a5.998 5.998 0 0 1-7.323-8.454l74-140A6 6 0 0 1 96 8ZM34.517 143.158l41.465-14.808a6 6 0 0 1 7.065 2.405L90 141.571V38.191L34.517 143.158ZM102 38.191v103.38l6.953-10.816a6 6 0 0 1 7.065-2.405l41.465 14.808L102 38.191Z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  )
);

const AccentSwirl = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className = "" }, ref) => (
    <svg
      ref={ref}
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          opacity="0.4"
          d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
          fill="currentColor"
        ></path>{" "}
        <path
          d="M15.2505 11.2999H13.5505V7.33993C13.5505 6.41993 13.0505 6.22993 12.4405 6.91993L12.0005 7.41993L8.28045 11.6499C7.77045 12.2299 7.98045 12.6999 8.75045 12.6999H10.4505V16.6599C10.4505 17.5799 10.9505 17.7699 11.5605 17.0799L12.0005 16.5799L15.7205 12.3499C16.2305 11.7699 16.0205 11.2999 15.2505 11.2999Z"
          fill="#fbbf24"
        ></path>{" "}
      </g>
    </svg>
  )
);

export default function GsapHero({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const svgRef1 = useRef<SVGSVGElement | null>(null);
  const svgRef2 = useRef<SVGSVGElement | null>(null);
  const svgRef3 = useRef<SVGSVGElement | null>(null);
  const rotTweens = useRef<gsap.core.Tween[]>([]);
  const floatTweens = useRef<gsap.core.Tween[]>([]);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const container = containerRef.current;
    if (!container) return;

    rotTweens.current.forEach((t) => t.kill());
    floatTweens.current.forEach((t) => t.kill());
    rotTweens.current = [];
    floatTweens.current = [];

    gsap.set(lettersRef.current, {
      autoAlpha: 0,
      yPercent: 30,
      filter: "blur(6px)",
    });
    gsap.set([svgRef1.current, svgRef2.current, svgRef3.current], {
      autoAlpha: 0,
      scale: 0,
    });

    if (prefersReduced) {
      gsap.set(lettersRef.current, {
        autoAlpha: 1,
        yPercent: 0,
        filter: "none",
      });
      gsap.set([svgRef1.current, svgRef2.current, svgRef3.current], {
        autoAlpha: 1,
        scale: 1,
      });
      return;
    }

    const tl = gsap.timeline();
    const firstLetters = lettersRef.current.slice(
      0,
      WORD1.length
    ) as HTMLElement[];
    const secondLetters = lettersRef.current.slice(
      WORD1.length
    ) as HTMLElement[];

    tl.to(
      firstLetters,
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.68,
        stagger: 0.045,
        ease: "power3.out",
      },
      0.05
    )
      .to(
        svgRef1.current,
        { scale: 1, autoAlpha: 1, duration: 0.55, ease: "back.out(1.6)" },
        ">-0.12"
      )
      .to({}, { duration: 0.7 })
      .to(
        secondLetters,
        {
          yPercent: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.68,
          stagger: 0.045,
          ease: "power3.out",
        },
        ">0"
      )
      .to(
        svgRef2.current,
        { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(1.6)" },
        ">-0.2"
      )
      .to(
        svgRef3.current,
        { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(1.6)" },
        ">-0.18"
      )
      .add(() => {
        // animation for first svg
        if (svgRef1.current) {
          const blobTl = gsap.timeline({ repeat: -1 });

          blobTl
            // 1st rotation: 90°, then 1.5s pause
            .to(svgRef1.current, {
              rotation: "+=90",
              duration: 0.6,
              ease: "power2.inOut",
              transformOrigin: "50% 50%",
            })
            .to({}, { duration: 1.5 })
            // 2nd rotation: 180°, then 0.5s pause
            .to(svgRef1.current, {
              rotation: "+=90",
              duration: 0.6,
              ease: "power2.inOut",
              transformOrigin: "50% 50%",
            })
            .to({}, { duration: 0.5 })
            // 3rd rotation: 270°, then 0.5s pause
            .to(svgRef1.current, {
              rotation: "+=90",
              duration: 0.6,
              ease: "power2.inOut",
              transformOrigin: "50% 50%",
            })
            .to({}, { duration: 0.5 })
            // 4th rotation: 360°, then 0.5s pause
            .to(svgRef1.current, {
              rotation: "+=90",
              duration: 0.6,
              ease: "power2.inOut",
              transformOrigin: "50% 50%",
            })
            .to({}, { duration: 0.5 });

          floatTweens.current.push();
        }

        // animation for second svg
        if (svgRef2.current) {
          const sparkTl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

          sparkTl
            // move top-left and fade out
            .to(svgRef2.current, {
              xPercent: -80,
              yPercent: -80,
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut",
            })
            // small pause while invisible
            .to({}, { duration: 0.5 })
            // reset instantly to original position
            .set(svgRef2.current, { xPercent: 0, yPercent: 0 })
            // fade back in
            .to(svgRef2.current, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.inOut",
            });

          floatTweens.current.push();
        }

        // animation for third svg
        if (svgRef3.current)
          floatTweens.current.push(
            gsap.to(svgRef3.current, {
              y: "+=24",
              duration: 2.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 0.1,
            })
          );

        const tIndexGlobal = 6;
        const iIndexGlobal = WORD1.length + 5;
        const tEl = lettersRef.current[tIndexGlobal];
        const iEl = lettersRef.current[iIndexGlobal];

        if (tEl)
          rotTweens.current.push(
            gsap.to(tEl, {
              rotationY: 360,
              duration: 2.6,
              repeat: -1,
              ease: "linear",
              transformOrigin: "50% 50%",
            })
          );
        if (iEl)
          rotTweens.current.push(
            gsap.to(iEl, {
              rotationX: 360,
              duration: 2.9,
              repeat: -1,
              ease: "linear",
              transformOrigin: "50% 50%",
            })
          );
      }, ">+0.12");

    return () => {
      tl.kill();
      rotTweens.current.forEach((t) => t.kill());
      floatTweens.current.forEach((t) => t.kill());
    };
  }, []);

  const renderWord = (word: string, offset: number) =>
    word.split("").map((ch, i) => (
      <span
        key={offset + i}
        ref={(el) => (lettersRef.current[offset + i] = el)}
        className="inline-block px-0 leading-none origin-center"
        style={{ willChange: "transform, opacity, filter" }}
      >
        <span className="inline-block transform-gpu text-gradient pb-5 text-center">
          {ch}
        </span>
      </span>
    ));

  return (
    <section
      className={`w-full min-h-screen pt-32 md:py-24 bg-dark-bg ${className}`}
    >
      <div ref={containerRef} className="px-6 md:py-18">
        <h1 className="relative text-5xl sm:text-6xl md:text-9xl font-extrabold leading-tight">
          <div className="block mb-2" />
          <div className="block leading-none px-12 ">
            <div className="block ">{renderWord(WORD1, 0)}</div>
            <div className="flex sm:justify-end justify-center mt-4">
              {renderWord(WORD2, WORD1.length)}
            </div>
          </div>
        </h1>
      </div>
      <div aria-hidden className="pointer-events-none">
        <span className="absolute left-[15%] top-[25%] text-sky-300 ">
          <AccentBlob ref={svgRef1} className="w-16 h-16" />
        </span>
        <span className="absolute right-[26%] top-[44%] text-amber-300">
          <AccentSpark ref={svgRef2} className="h-18 w-18" />
        </span>
        <span className="absolute left-[36%] bottom-[12%] text-violet-300">
          <AccentSwirl ref={svgRef3} className="h-20 w-20" />
        </span>
      </div>
      {/* This button on left side */}
      <HeroButton />
      <style>
        {`
      .transform-gpu { 
      transform: translateZ(0); 
       }

      .text-gradient {
          background: linear-gradient(to left, #faf8f0, #fdefcb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      
      `}
      </style>
    </section>
  );
}
