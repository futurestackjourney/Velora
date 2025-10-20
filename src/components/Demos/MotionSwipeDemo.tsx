import React from "react";
import { motion } from "framer-motion";

const MotionSwipeDemo: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-indigo-400 to-pink-400 rounded-2xl h-40">
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileTap={{ scale: 1.1 }}
        className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl shadow-md cursor-grab active:cursor-grabbing"
      >
        Swipe Me →
      </motion.div>
    </div>
  );
};

export default MotionSwipeDemo;
