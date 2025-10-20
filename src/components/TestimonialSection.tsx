// TestimonialSection.tsx
import React from "react";
import { motion } from "framer-motion";
import HeadTextSec from "./HeadTextSec";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Alice Johnson", role: "Frontend Developer", message: "This platform changed the way I learn web animations This platform changed the way I learn web animations!", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob Smith", role: "UI/UX Designer", message: "Absolutely love the interactive playgrounds! ", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Carla Green", role: "Fullstack Developer", message: "GSAP + React examples here are a lifesaver!", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "David Lee", role: "Backend Engineer", message: "Amazing content and clean UI! Amazing content and clean UI!", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Eva White", role: "Designer", message: "The tutorials are concise and practical! ", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Frank Miller", role: "Frontend Developer", message: "Learning web animations has never been this fun.", avatar: "https://i.pravatar.cc/150?img=6" },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="sm:py-24 py-16 section-padding">
      <div className="mx-auto">
        <HeadTextSec headTextSec="What Our Users Say" className="text-center mb-12" />

        {/* Masonry Grid using columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              className="testimonial-card break-inside-avoid bg-dark-card p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="text-zinc-300">{t.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
