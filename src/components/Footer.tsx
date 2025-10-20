// VeloraFooter.tsx
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <Github />, href: "https://github.com" },
  { icon: <Twitter />, href: "https://twitter.com" },
  { icon: <Linkedin />, href: "https://linkedin.com" },
];

const navLinks = [
  { name: "Docs", href: "#docs" },
  { name: "Tutorials", href: "#tutorials" },
  { name: "Playground", href: "#playground" },
  { name: "Pricing", href: "#pricing" },
];

const VeloraFooter: React.FC = () => {
  return (
    <footer className="py-8 section-padding">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Logo + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/logo.png" alt="logo" className="w-30 mb-4"/>
            {/* <h1 className="text-3xl font-bold text-white mb-4">Velora</h1> */}
            <p className="text-gray-400">
              Learn and practice web animations with interactive tutorials,
              live playgrounds, and real examples using React, GSAP & Framer Motion.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Explore</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Connect</h2>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  className="text-gray-400 text-2xl transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Subscribe</h2>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-md flex-1 border-1 border-white"
              />
              <button className="bg-blue hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 mb-4"></div>

        {/* Bottom text */}
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Velora. Built with for learning
          web animations.
        </p>
      </div>
    </footer>
  );
};

export default VeloraFooter;
