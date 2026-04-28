"use client";

import { motion } from "framer-motion";
import { Building, TreePine, ShieldCheck } from "lucide-react";
import { FaTiktok, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const advantages = [
  {
    icon: <Building className="w-8 h-8 text-white" />,
    title: "Lokasi Strategis di Pusat kab. Tangerang",
    description: "Terletak di Tigaraksa, yang berjarak 5 menit dari pusat pemerintahan Kab. Tangerang.",
  },
  {
    icon: <TreePine className="w-8 h-8 text-white" />,
    title: "Lingkungan & Fasilitas yang hidup",
    description: "Memaksimalkan ruang terbuka hijau dan fasilitas publik yang terintegrasi.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Hunian Aman & Nyaman",
    description: "Dengan One Gate System, Security & CCTV 24 Jam, Memberikan rasa aman dan nyaman bagi penghuni dan keluarga.",
  },
];

export default function Details() {
  return (
    <section id="details" className="py-20 relative bg-[url('/bg-red.jpg')] bg-cover bg-center bg-no-repeat border-t border-amber-400/30">
      {/* Decorative leaf shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/30 rounded-bl-[100px] blur-xl"></div>
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-green-500/30 rounded-tr-[100px] blur-xl"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        
        {/* Advantages List */}
        <div className="flex flex-col gap-12 mb-20">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-6 group"
            >
              <div className="p-3 border-2 border-white/20 rounded-2xl flex-shrink-0 bg-white/5 backdrop-blur-sm group-hover:border-amber-400 transition-colors">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-red-100 text-sm md:text-base leading-relaxed opacity-90">
                  {item.description}
                </p>
                {index < advantages.length - 1 && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-10"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Box - Refined & Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 border border-amber-400/30 rounded-[2.5rem] p-8 md:p-12 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-400/10 rounded-full blur-[80px]"></div>

          <h4 className="text-white text-2xl md:text-3xl font-bold mb-3 tracking-tight">Ikuti Media Sosial Kami</h4>
          <p className="text-amber-200/80 text-xs md:text-sm mb-10 font-bold tracking-[0.2em] uppercase">Untuk Informasi Terkini</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <a href="#" className="flex items-center gap-3 text-white hover:text-amber-400 transition-all hover:scale-110 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-amber-950 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </div>
              <span className="text-sm md:text-base font-bold">@TriraksaVillage2</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-amber-400 transition-all hover:scale-110 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-amber-950 transition-colors">
                <FaTiktok className="w-5 h-5" />
              </div>
              <span className="text-sm md:text-base font-bold">@TriraksaVillage2</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
