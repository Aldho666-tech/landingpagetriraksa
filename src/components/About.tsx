"use client";

import { motion } from "framer-motion";
import { BedDouble, ChefHat, Bath, Sofa, Car, ArrowUpSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/bg-red.jpg')" }}>
      {/* Optional dark overlay if text needs contrast, though user wants the red bg visible */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Column: Text & Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 italic drop-shadow-lg">
               Lokasi Strategis,<br/>Investasi Menarik!
             </h2>
             <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-md mb-8 max-w-xl text-justify md:text-left">
               Kawasan hunian eksklusif yang dirancang khusus untuk menghadirkan kenyamanan, kemudahan, dan kualitas hidup terbaik bagi Anda dan keluarga.
               <br/><br/>
               Mengusung konsep rumah minimalis modern yang sangat fungsional. Setiap ruang ditata secara cerdas untuk memberikan suasana lega dan efisien, menjadikannya pilihan sempurna bagi keluarga masa kini.
             </p>
             
             <img src="/AW2.png" alt="Cluster Aria Wangsakara 2" className="w-[70%] lg:w-[80%] max-w-[320px] object-contain drop-shadow-2xl mb-8" />
             
             <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-md max-w-xl">
               Nikmati kenyamanan hidup di Cluster Aria Wangsakara II, sebuah cluster hunian modern yang dirancang untuk keluarga urban yang mengutamakan kemudahan, keamanan, dan nilai investasi jangka panjang.
             </p>
          </motion.div>

          {/* Right Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-amber-400/80 bg-zinc-900 mt-6 lg:mt-0"
          >
            {/* Promo Floating Badge */}
            <img 
              src="/promo.png" 
              alt="Promo Spesial" 
              className="absolute -top-4 -left-4 z-30 w-28 md:w-40 drop-shadow-2xl animate-pulse-slow"
            />

            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-6 py-2 rounded-xl shadow-xl border border-amber-200">
              <span className="font-serif italic text-2xl text-amber-900">Brick</span> <span className="font-sans font-black text-xl text-amber-900">Plus <br/><span className="text-sm font-medium">Mezza</span></span>
            </div>

            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Aria Wangsakara House"
              className="w-full h-[400px] md:h-[550px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />

            {/* Features Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24">
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 justify-items-center">
                <div className="flex flex-col items-center text-amber-400 gap-2 hover:scale-110 transition-transform">
                  <BedDouble className="w-7 h-7" />
                  <span className="text-[10px] md:text-xs font-semibold text-white text-center">2 Kamar Tidur</span>
                </div>
                <div className="flex flex-col items-center text-amber-400 gap-2 hover:scale-110 transition-transform">
                  <ChefHat className="w-7 h-7" />
                  <span className="text-[10px] md:text-xs font-semibold text-white text-center">1 Dapur</span>
                </div>
                <div className="flex flex-col items-center text-amber-400 gap-2 hover:scale-110 transition-transform">
                  <Bath className="w-7 h-7" />
                  <span className="text-[10px] md:text-xs font-semibold text-white text-center">1 Kamar Mandi</span>
                </div>
                <div className="flex flex-col items-center text-amber-400 gap-2 hover:scale-110 transition-transform">
                  <Sofa className="w-7 h-7" />
                  <span className="text-[10px] md:text-xs font-semibold text-white text-center">1 Ruang Tamu</span>
                </div>
                <div className="flex flex-col items-center text-amber-400 gap-2 hover:scale-110 transition-transform">
                  <Car className="w-7 h-7" />
                  <span className="text-[10px] md:text-xs font-semibold text-white text-center">Carport Luas</span>
                </div>
                <div className="flex flex-col items-center text-amber-400 gap-2 hover:scale-110 transition-transform">
                  <ArrowUpSquare className="w-7 h-7" />
                  <span className="text-[10px] md:text-xs font-semibold text-white text-center">1 Mezzanine</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-4 mb-16">
          <div className="w-3 h-3 rounded-full bg-amber-400/40"></div>
          <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)]"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400/40"></div>
        </div>

        {/* Bank Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-amber-400/30 flex flex-col items-center"
        >
          <img src="/Bank.png" alt="Bekerjasama dengan Bank" className="w-full object-contain" />
        </motion.div>

      </div>
    </section>
  );
}
