"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Elegant delayed entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100]"
        >
          {/* Subtle pulsing animation ring behind the button */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>

          <a
            href="https://wa.me/6282130070003" // Replace with actual number if needed
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-300 group"
          >
            <FaWhatsapp className="w-8 h-8 lg:w-9 lg:h-9" />

            {/* Minimalist Gen Z Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl tracking-widest hidden lg:block">
              TANYA UNIT
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
