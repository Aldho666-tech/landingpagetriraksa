"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
        <div className="relative z-20 px-8 lg:px-[8%] 2xl:px-[10%] w-full max-none mx-auto flex flex-col justify-center h-full pt-10 pb-28">

          <div className="w-full max-w-3xl flex flex-col items-start text-left mt-32">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg"
            >
              Hunian Impian <br />
              Keluarga Modern
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-gray-200 text-base lg:text-lg max-w-2xl mb-12 leading-relaxed"
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
                <a href="https://wa.me/6282130070003" className="bg-amber-400 text-amber-950 font-bold px-10 py-5 rounded-full text-xl hover:bg-amber-300 transition-colors shadow-2xl flex items-center gap-3">
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
          className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur-md border-t border-amber-400/30 py-5 z-30"
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
      <section
        id="home-mobile"
        className="flex lg:hidden w-full font-sans bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-red.jpg')" }}
      >

        {/* Single relative container — fasad + all overlays */}
        <div className="relative w-full">

          {/* Base: Fasad image */}
          <img
            src="/fasad.png"
            alt="Fasad Triraksa Village 2"
            className="w-full h-auto block"
          />

          {/* Promo: Brick Series + FREE items (Animasikan) */}
          <div className="absolute top-[7%] inset-x-0 flex justify-center px-4 z-20">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8 }
              }}
              src="/promo.png"
              alt="Promo Brick Series"
              className="w-[80%] max-w-[320px] drop-shadow-2xl"
            />
          </div>

          {/* Gold line — sits just above Harga.png */}
          <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700 z-20" />

          {/* Harga.png — TIBAN di atas bagian bawah fasad (Animasikan) */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/Harga.png"
            alt="Harga Triraksa"
            className="absolute bottom-35 left-5 right-5 w-90 z-10"
          />

          {/* Button CTA (Minta Brochure) Animasikan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-15 inset-x-0 flex justify-center z-20 px-6"
          >
            <motion.a
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              href="https://wa.me/6282130070003"
              className="w-70 max-w-[340px] flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold py-4 rounded-xl transition-all shadow-xl active:scale-95 text-base"
            >
              Minta Brochure <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}