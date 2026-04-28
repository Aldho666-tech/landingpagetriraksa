"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* =========================================
          DESKTOP HERO (Hidden on Mobile/Tablets)
      ========================================= */}
      <section id="home-desktop" className="hidden lg:flex relative min-h-screen items-center overflow-hidden group">
        {/* Full-screen background image */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="/fasad.png"
            alt="Triraksa Village 2 Fasad"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay from Left to Right to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Carousel Navigation Arrows */}
        <button className="absolute left-6 lg:left-10 z-30 w-14 h-14 bg-black/40 hover:bg-amber-500 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-black border border-white/20 transition-all shadow-xl opacity-0 group-hover:opacity-100">
           <ChevronLeft className="w-8 h-8 -ml-1" />
        </button>
        <button className="absolute right-6 lg:right-10 z-30 w-14 h-14 bg-black/40 hover:bg-amber-500 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-black border border-white/20 transition-all shadow-xl opacity-0 group-hover:opacity-100">
           <ChevronRight className="w-8 h-8 -mr-1" />
        </button>

        {/* Main Content Container (Left Aligned) */}
        <div className="relative z-20 px-8 lg:px-[8%] 2xl:px-[10%] w-full max-w-none mx-auto flex flex-col justify-center h-full pt-10 pb-28">
          
          <div className="w-full max-w-3xl flex flex-col items-start text-left mt-20">
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg"
            >
              Hunian Impian <br/>
              Keluarga Modern
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-gray-200 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed"
            >
              Lebih dari 2.900 unit tersedia untuk kamu dan keluarga di Triraksa Village 2. Miliki segera hunian eksklusif dengan penawaran terbaik bulan ini.
            </motion.p>

            {/* Harga & CTA Section */}
            <div className="flex flex-col items-start gap-8 mt-2">
              {/* Harga Image (Enlarged) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <motion.img 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="/harga.png" 
                  alt="Harga Triraksa" 
                  className="w-[500px] lg:w-[650px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Tanya Unit Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="pl-2"
              >
                <a href="https://wa.me/6281234567890" className="bg-amber-400 text-amber-950 font-bold px-10 py-5 rounded-full text-xl hover:bg-amber-300 transition-colors shadow-2xl flex items-center gap-3">
                  Tanya Unit <ArrowUpRight className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
            
          </div>
        </div>

        {/* BOTTOM FEATURE BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur-md border-t border-white/10 py-5 z-30"
        >
          <div className="max-w-none mx-auto px-8 lg:px-[8%] 2xl:px-[10%] flex flex-wrap justify-between items-center text-white/90 text-sm lg:text-base font-medium">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">✓</span> Lokasi Strategis Pusat Kab. Tangerang
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">✓</span> Hunian Minimalis Modern & Asri
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">✓</span> Sistem Keamanan 24 Jam
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          MOBILE HERO POSTER (Visible on Mobile/Tablets)
      ========================================= */}
      <section id="home-mobile" className="flex lg:hidden flex-col w-full bg-[url('/bg-red.jpg')] bg-cover bg-center bg-no-repeat font-sans">
        
        {/* TOP SECTION: Fasad + Promo + Harga Overlap */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Fasad Image Background */}
          <div className="w-full h-[65vh] min-h-[450px] relative">
            <img 
              src="/fasad.png" 
              alt="Fasad Triraksa" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Optional slight dark gradient at bottom for contrast */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Promo Image (Absolute at top - Mobile Only) */}
          <motion.div 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-6 inset-x-0 flex justify-center px-4 z-10"
          >
            <motion.img 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              src="/promo.png" 
              alt="Promo Triraksa" 
              className="w-[90%] max-w-sm drop-shadow-2xl"
            />
          </motion.div>





          {/* Harga Image (Absolute at bottom, overlapping into the red section) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 translate-y-[30%] inset-x-0 flex justify-center px-4 z-20"
          >
            <motion.img 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src="/Harga.png" 
              alt="Harga Triraksa" 
              className="w-[95%] max-w-[400px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Red Text Content */}
        <div className="w-full px-6 pt-28 sm:pt-32 pb-20 relative text-center">
          {/* Greenish glow effect at bottom right */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#97d700] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 text-white flex flex-col items-center gap-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold italic tracking-wide drop-shadow-md leading-tight">
              Lokasi Strategis,<br/>Investasi Menarik!
            </h2>
            
            <p className="text-sm sm:text-base leading-relaxed text-white/95">
              Kawasan hunian modern yang dirancang khusus untuk menghadirkan kenyamanan, kemudahan, dan kualitas hidup terbaik bagi kamu dan keluarga.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-white/95">
              Mengusung konsep rumah minimalis modern yang fungsional, setiap ruang ditata secara optimal untuk memberikan suasana lega, nyaman, serta efisien dalam setiap aktivitas sehari-hari. Desain elegan dan tata ruang cerdas menjadikan hunian ini pilihan sempurna bagi keluarga masa kini.
            </p>

            <div className="my-6 bg-white/95 p-5 rounded-3xl shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
              <img 
                src="/logo-triraksa.png" 
                alt="Logo Triraksa" 
                className="w-48 sm:w-56 object-contain"
              />
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-white/95">
              Nikmati kenyamanan hidup di Cluster Aria Wangsakara II, sebuah cluster hunian modern yang dirancang untuk keluarga urban yang mengutamakan kemudahan, keamanan, dan nilai investasi jangka panjang.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
