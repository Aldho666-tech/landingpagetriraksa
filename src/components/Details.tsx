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
    <section id="details" className="py-20 relative bg-[url('/bg-red.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Decorative leaf shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/30 rounded-bl-[100px] blur-xl"></div>
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-green-500/30 rounded-tr-[100px] blur-xl"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        
        {/* Advantages List */}
        <div className="flex flex-col gap-8 mb-16">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="p-2 border-2 border-white rounded-lg flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-red-100 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
                {index < advantages.length - 1 && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mt-8"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 text-center mb-8 backdrop-blur-sm"
        >
          <h4 className="text-white text-xl font-bold mb-2">Ikuti Media Sosial Kami</h4>
          <p className="text-red-200 text-xs md:text-sm mb-6">Untuk Mendapatkan Informasi yang Up-To-Date</p>
          <div className="flex justify-center gap-6 md:gap-10">
            <a href="#" className="flex items-center gap-2 text-white hover:text-red-200 transition-colors">
              <FaFacebook className="w-5 h-5" />
              <span className="text-sm">Triraksa Village 2</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-red-200 transition-colors">
              <FaInstagram className="w-5 h-5" />
              <span className="text-sm">@TriraksaVillage2</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-red-200 transition-colors">
              <FaTiktok className="w-5 h-5" />
              <span className="text-sm">@TriraksaVillage2</span>
            </a>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
