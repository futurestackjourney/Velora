import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Eye, Users } from "lucide-react";
import HeadTextSec from "../HeadTextSec";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <Code2 className="w-10 h-10 text-pink-400" />,
    title: "1. Write Your Code",
    description:
      "Use our live Monaco editor to experiment with GSAP and Framer Motion in real time.",
  },
  {
    icon: <Eye className="w-10 h-10 text-cyan-400" />,
    title: "2. Preview Instantly",
    description:
      "See your animations come to life the moment you type — no refresh, no waiting.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-400" />,
    title: "3. Learn & Share",
    description:
      "Discover, remix, and share animations from other creators in the Velora community.",
  },
];

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".how-step");
    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sm:py-24 py-16 border-t border-dark-border text-white relative overflow-hidden"
    >
      <div className="mx-auto section-padding">
            <HeadTextSec headTextSec="How Velora Works." className="text-center" />
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Velora combines a powerful editor, instant previews, and interactive
          learning tools to make animation creation effortless.
        </p>

        <div className="relative flex flex-col items-center space-y-16 md:space-y-24">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-400 via-cyan-400 to-blue-400 h-full opacity-20"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`how-step relative flex flex-col md:flex-row items-center md:items-start gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="bg-dark-bg p-6 rounded-2xl border border-dark-border shadow-lg w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05),_transparent_70%)] -z-10"></div>
    </section>
  );
};

export default HowItWorksSection;
