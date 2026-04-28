"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "FASILITAS", href: "#features" },
  { name: "KEUNGGULAN", href: "#details" },
  { name: "KONTAK", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/50 backdrop-blur-xl shadow-lg border-b border-amber-400/30 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto w-full max-w-none px-8 lg:px-[8%] 2xl:px-[10%] flex items-center justify-between">
          
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 lg:w-[200px]">
            <a href="#home" className="block">
              <img 
                src="/logo-triraksa.png" 
                alt="Triraksa Logo" 
                className="h-14 lg:h-24 w-auto object-contain drop-shadow-md transition-all duration-300" 
              />
            </a>
          </div>

          {/* CENTER: Desktop nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-white/90 hover:text-white transition-colors tracking-[0.1em]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: Social Media (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-3 flex-shrink-0 lg:w-[200px]">
            <a href="#" className="w-10 h-10 bg-black/40 hover:bg-black/60 rounded-xl flex items-center justify-center text-white/90 hover:text-white border border-white/10 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black/40 hover:bg-black/60 rounded-xl flex items-center justify-center text-white/90 hover:text-white border border-white/10 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black/40 hover:bg-black/60 rounded-xl flex items-center justify-center text-white/90 hover:text-white border border-white/10 transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile toggle (Minimalist Gen Z Asymmetrical Burger) */}
          <button
            className="lg:hidden text-white flex flex-col items-end justify-center gap-[6px] p-2 w-12 h-12"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-7 h-[2px] bg-white rounded-full transition-all"></span>
            <span className="w-5 h-[2px] bg-white rounded-full transition-all"></span>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] px-8 py-10 flex flex-col z-[60] lg:hidden overflow-hidden"
          >
            {/* Header inside overlay */}
            <div className="flex items-center justify-between mb-16">
              <img src="/logo-triraksa.png" alt="Triraksa Logo" className="h-10 w-auto object-contain drop-shadow-md" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white text-xs font-bold tracking-[0.2em] transition-colors"
              >
                CLOSE
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 items-start justify-center flex-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl font-black text-white tracking-tighter hover:text-amber-400 transition-colors uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-auto pt-8 border-t border-amber-400/30"
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full py-4 text-white hover:text-amber-400 transition-colors group"
              >
                <span className="text-sm font-bold tracking-[0.2em]">HUBUNGI KAMI</span>
                <span className="text-xl font-light transform group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
