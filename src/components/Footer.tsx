"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaTiktok, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Fasilitas", href: "#features" },
  { name: "Keunggulan", href: "#details" },
];

const socialLinks = [
  { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/6281234567890", label: "WhatsApp" },
  { icon: <FaInstagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <FaTiktok className="w-5 h-5" />, href: "#", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0d0604] text-white overflow-hidden">
      {/* Top accent line (Gold Gradient) */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-900/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/8">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <img
              src="/logo-triraksa.png"
              alt="Triraksa Village 2"
              className="w-36 object-contain drop-shadow-lg"
            />
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-red-500 hover:bg-red-500/15 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
              Navigasi
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 w-fit group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-amber-400 transition-all duration-300 rounded-full" />
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
              Hubungi Kami
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-white/50 group-hover:text-amber-400 transition-colors" />
                </div>
                <div>
                  <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">0821-3007-0003</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <p className="text-white/70 text-sm font-medium leading-snug">
                    Jl. Raya Triraksa Village 2, Tigaraksa, Kec. Tigaraksa, Kabupaten Tangerang, Banten 15720
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
              Marketing Gallery
            </h3>
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.5508003675973!2d106.46184012357536!3d-6.262512605101725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42070f1f8d8715%3A0xd3a9fd5dd2411273!2sTriraksa%20Village%202!5e0!3m2!1sid!2sid!4v1777361303700!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-8 text-xs text-white/25">
          <p>&copy; {new Date().getFullYear()} Triraksa Village 2. All rights reserved.</p>
          <p>Powered by Marcom BPG</p>
        </div>
      </div>
    </footer>
  );
}
