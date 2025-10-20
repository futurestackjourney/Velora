import React from "react";
import { motion } from "framer-motion";

const MotionButtonDemo: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-40 bg-gray-100 dark:bg-dark-surface rounded-2xl shadow-lg">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#ff80bf" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-pink-500 to-indigo-500 font-semibold"
      >
        Hover Me
      </motion.button>
    </div>
  );
};

export default MotionButtonDemo;
