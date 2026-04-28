"use client";

import { motion } from "framer-motion";
import {
  ShoppingBasket,
  GraduationCap,
  Hospital,
  Car,
  Tent,
  Building2,
  Film,
  Train,
  TrainFront,
} from "lucide-react";

const distances = [
  { time: "3", unit: "Min.", label: "Pasar Gudang", title: "TIGARAKSA", icon: <ShoppingBasket className="w-6 h-6" /> },
  { time: "3", unit: "Min.", label: "Universitas", title: "TANGERANG RAYA", icon: <GraduationCap className="w-6 h-6" /> },
  { time: "5", unit: "Min.", label: "RSUD KAB.", title: "TANGERANG", icon: <Hospital className="w-6 h-6" /> },
  { time: "5", unit: "Min.", label: "Ke Rencana Tol", title: "SERBARAJA", icon: <Car className="w-6 h-6" /> },
  { time: "8", unit: "Min.", label: "MASJID AGUNG", title: "AL-AMJAD", icon: <Tent className="w-6 h-6" /> },
  { time: "7", unit: "Min.", label: "Pusat Pemerintahan Daerah", title: "KAB. TANGERANG", icon: <Building2 className="w-6 h-6" /> },
  { time: "16", unit: "Min.", label: "", title: "XXI CIKUPA", icon: <Film className="w-6 h-6" /> },
  { time: "15", unit: "Min.", label: "Future Development", title: "MRT JAKARTA", icon: <Train className="w-6 h-6" /> },
  { time: "20", unit: "Min.", label: "KRL Commuter Line", title: "St. DARU", icon: <TrainFront className="w-6 h-6" /> },
  { time: "20", unit: "Min.", label: "KRL Commuter Line", title: "St. TIGARAKSA", icon: <TrainFront className="w-6 h-6" /> },
];

export default function Features() {
  const firstRow = distances.slice(0, 5);
  const secondRow = distances.slice(5, 10);

  return (
    <section id="features" className="relative py-24 overflow-hidden border-t border-amber-400/30 bg-cover bg-center" style={{ backgroundImage: "url('/bg-red.jpg')" }}>
      {/* Semi-transparent dark overlay for readability while keeping the red bg */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
          >
            / AKSESIBILITAS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg"
          >
            Lokasi Strategis & Terhubung
          </motion.h2>
        </div>
      </div>

      {/* Marquee Container - MOVED OUTSIDE CONTAINER FOR FULL WIDTH */}
      <div className="flex flex-col gap-6 mb-24 relative w-full overflow-hidden">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap px-6"
          >
            {[...firstRow, ...firstRow, ...firstRow].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all group"
              >
                <div className="bg-amber-400 text-amber-950 w-12 h-12 rounded-xl flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-xl font-black leading-none">{item.time}</span>
                  <span className="text-[8px] font-bold uppercase">{item.unit}</span>
                </div>
                <div className="flex flex-col">
                  {item.label && <span className="text-[9px] text-zinc-300 font-bold uppercase tracking-widest leading-tight">{item.label}</span>}
                  <span className="text-sm md:text-base font-bold text-white tracking-wide uppercase">{item.title}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap px-6"
          >
            {[...secondRow, ...secondRow, ...secondRow].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all group"
              >
                <div className="bg-amber-400 text-amber-950 w-12 h-12 rounded-xl flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-xl font-black leading-none">{item.time}</span>
                  <span className="text-[8px] font-bold uppercase">{item.unit}</span>
                </div>
                <div className="flex flex-col">
                  {item.label && <span className="text-[9px] text-zinc-300 font-bold uppercase tracking-widest leading-tight">{item.label}</span>}
                  <span className="text-sm md:text-base font-bold text-white tracking-wide uppercase">{item.title}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fading Edges with Red-ish Gradient */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 group bg-black/20 backdrop-blur-sm">
            <img src="/Fasilitas.png" alt="Fasilitas Triraksa Village 2" className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
