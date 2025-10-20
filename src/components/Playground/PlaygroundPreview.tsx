import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

interface PlaygroundPreviewProps {
  code: string;
}

const PlaygroundPreview: React.FC<PlaygroundPreviewProps> = ({ code }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Clear previous animations
      gsap.killTweensOf("*");

      // eslint-disable-next-line no-new-func
      const runCode = new Function("gsap", "motion", code);
      runCode(gsap, motion);
    } catch (error) {
      console.error("Error running code:", error);
    }
  }, [code]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[50vh] flex items-center justify-center bg-light-surface dark:bg-dark-surface rounded-xl shadow-inner overflow-hidden"
    >
      {/* Default element to animate */}
      <div id="demo-element" className="w-24 h-24 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl"></div>
    </div>
  );
};

export default PlaygroundPreview;
