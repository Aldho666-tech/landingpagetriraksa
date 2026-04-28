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
  { time: "3", unit: "Min.", label: "Pasar Gudang", title: "TIGARAKSA", icon: <ShoppingBasket className="w-10 h-10 text-white" /> },
  { time: "3", unit: "Min.", label: "Universitas", title: "TANGERANG RAYA", icon: <GraduationCap className="w-10 h-10 text-white" /> },
  { time: "5", unit: "Min.", label: "RSUD KAB.", title: "TANGERANG", icon: <Hospital className="w-10 h-10 text-white" /> },
  { time: "5", unit: "Min.", label: "Ke Rencana Tol", title: "SERBARAJA", icon: <Car className="w-10 h-10 text-white" /> },
  { time: "8", unit: "Min.", label: "MASJID AGUNG", title: "AL-AMJAD", icon: <Tent className="w-10 h-10 text-white" /> },
  { time: "7", unit: "Min.", label: "Pusat Pemerintahan Daerah", title: "KAB. TANGERANG", icon: <Building2 className="w-10 h-10 text-white" /> },
  { time: "16", unit: "Min.", label: "", title: "XXI CIKUPA", icon: <Film className="w-10 h-10 text-white" /> },
  { time: "15", unit: "Min.", label: "Future Development", title: "MRT JAKARTA", icon: <Train className="w-10 h-10 text-white" /> },
  { time: "20", unit: "Min.", label: "KRL Commuter Line", title: "St. DARU", icon: <TrainFront className="w-10 h-10 text-white" /> },
  { time: "20", unit: "Min.", label: "KRL Commuter Line", title: "St. TIGARAKSA", icon: <TrainFront className="w-10 h-10 text-white" /> },
];

const facilities = [
  { name: "Cafe Taman Ide", img: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Klinik Mitra Harapan Sehat", img: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Studio Kebugaran Body Fit", img: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Sentra Billiard Tigaraksa", img: "https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Food Court & Happy Corner", img: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Fasilitas Pendidikan", img: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Happy Garden Tigaraksa", img: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Minimarket", img: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-cover bg-center" style={{ backgroundImage: "url('/bg-red.jpg')" }}>
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl py-16">
        
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-xl mb-16 max-w-4xl mx-auto"
        >
          <p className="text-zinc-800 text-sm md:text-base font-medium leading-relaxed text-center">
            Triraksa Village 2 dilengkapi dengan berbagai fasilitas penunjang dan area komunitas yang mendukung gaya hidup aktif serta harmonis. Ditambah dengan lokasi strategis, memudahkan akses ke sekolah, pusat perbelanjaan, fasilitas kesehatan, hingga transportasi publik.
          </p>
        </motion.div>

        {/* Distances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-24 px-4 max-w-6xl mx-auto">
          {distances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 bg-black/20 p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/60 transition-colors"
            >
              <div className="flex-shrink-0 text-amber-400">
                {item.icon}
              </div>
              <div className="flex flex-col text-white">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black bg-amber-400 text-amber-950 px-3 py-1 rounded-lg leading-none shadow-md">{item.time}</span>
                  <span className="text-sm font-bold text-amber-300">{item.unit}</span>
                </div>
                {item.label && <span className="text-xs text-red-200 uppercase tracking-widest">{item.label}</span>}
                <span className="text-lg md:text-xl font-bold leading-tight uppercase drop-shadow-md">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facilities Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img src="/Fasilitas.png" alt="Fasilitas Triraksa Village 2" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

      </div>
    </section>
  );
}
