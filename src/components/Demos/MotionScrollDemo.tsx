import React from "react";
import { motion } from "framer-motion";

const MotionScrollDemo: React.FC = () => {
  return (
    <div className="h-[300px] flex flex-col justify-center items-center bg-gray-100 dark:bg-dark-surface rounded-2xl p-6 shadow-md">
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl font-bold text-indigo-600"
      >
        Scroll Trigger Animation
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mt-2 text-center"
      >
        This content fades and slides in when it enters the viewport.
      </motion.p>
    </div>
  );
};

export default MotionScrollDemo;
