// components/home/FeaturesSection.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Code2, Cpu, Zap, Layers, Monitor, Rocket } from "lucide-react";
import HeadTextSec from "../HeadTextSec";

const features = [
  {
    icon: <Code2 className="w-8 h-8 text-pink-400" />,
    title: "Live Code Editor",
    description:
      "Experiment with GSAP and Framer Motion instantly using our Monaco-powered editor.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: "Real-time Preview",
    description:
      "See your animations update in real time — no refresh, no rebuild, just results.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    title: "Performance Optimized",
    description:
      "Built with efficiency in mind to handle smooth, lag-free animation testing.",
  },
  {
    icon: <Layers className="w-8 h-8 text-pink-400" />,
    title: "Multiple Frameworks",
    description:
      "Switch between GSAP and Framer Motion to learn, compare, and build with both.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    title: "Responsive Playground",
    description:
      "A fully responsive experience, whether you're on desktop or mobile.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    title: "Built for Creators",
    description:
      "Designed for developers, designers, and learners passionate about motion design.",
  },
];

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sm:py-24 py-16 relative overflow-hidden section-padding"
    >
      <div className="mx-auto text-center">
        <HeadTextSec headTextSec="Why Developers Love Velora"/>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Powerful tools and seamless workflows built to help you explore web
          animation like never before.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card bg-dark-surface p-6 rounded-2xl border border-dark-border hover:border-blue-500/40 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background gradient glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.05),_transparent_70%)]"></div>
    </section>
  );
};

export default FeaturesSection;
