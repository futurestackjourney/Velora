import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FramerScrollDemo: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Transform values based on scroll progress
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#fdf2f8", "#ec4899", "#111827"]
  );
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.55], [80, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const text3Y = useTransform(scrollYProgress, [0.6, 1], [80, 0]);
  const circleScale = useTransform(scrollYProgress, [0, 1], [0.3, 1.2]);
  const circleGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to right, #6366f1, #ec4899)",
      "linear-gradient(to right, #ec4899, #f472b6)",
      "linear-gradient(to right, #111827, #ec4899)",
    ]
  );

  return (
    <motion.section
      ref={ref}
      style={{ background: bgColor }}
      className="relative h-[300vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden text-center">
        {/* Animated circle */}
        <motion.div
          style={{
            scale: circleScale,
            background: circleGradient,
          }}
          className="absolute w-72 h-72 rounded-full blur-xl mix-blend-screen"
        />

        {/* Text 1 */}
        <motion.h1
          style={{ opacity: text1Opacity }}
          className="absolute text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500"
        >
          Animate With Scroll
        </motion.h1>

        {/* Text 2 */}
        <motion.h1
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500"
        >
          Framer Motion Magic
        </motion.h1>

        {/* Text 3 */}
        <motion.h1
          style={{ opacity: text3Opacity, y: text3Y }}
          className="absolute text-5xl font-extrabold text-white"
        >
          The Velora Experience
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default FramerScrollDemo;
