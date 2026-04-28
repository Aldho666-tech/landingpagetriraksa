"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function LifeExperience() {
  const videos = [
    { 
      shortcode: "DPD7iZZj72M",
      url: "https://www.instagram.com/reel/DPD7iZZj72M/?igsh=Nm5sODhpb3F5MHZi",
      img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400" 
    },
    { 
      shortcode: "DOxtxi_k714",
      url: "https://www.instagram.com/reel/DOxtxi_k714/?igsh=c3BkdTV1c29kdHVp",
      img: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400" 
    },
    { 
      shortcode: "DLEF1GOBTD6",
      url: "https://www.instagram.com/reel/DLEF1GOBTD6/?igsh=MWNoN2ZjMGx4ZnR1NQ==",
      img: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=400" 
    },
    { 
      shortcode: "DN2cDg-5pA-",
      url: "https://www.instagram.com/reel/DN2cDg-5pA-/?igsh=MXh6bGFxbWl1bHQ2ag==",
      img: "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&w=400" 
    },
  ];

  return (
    <section id="life-experience" className="py-20 lg:py-28 relative bg-gradient-to-b from-[#5c0f0f] via-zinc-950 to-[#5c0f0f]">
      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <span className="text-amber-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
              / LIFE AT TRIRAKSA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
              Pengalaman Hidup di<br />Triraksa Village 2
            </h2>
          </div>
          <div className="max-w-lg lg:pb-2">
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
              Bayangkan kehidupan yang lebih nyaman di lingkungan yang tertata dengan baik serta lingkungan yang mendukung kualitas hidup yang lebih baik bagi Anda dan keluarga. Lihat lebih dekat suasana di Triraksa Village 2.
            </p>
          </div>
        </div>

        {/* Minimalist Video Slider/Grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {videos.map((vid, idx) => (
            <VideoCard key={idx} vid={vid} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function VideoCard({ vid, idx }: { vid: any, idx: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="bg-black/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col snap-center flex-shrink-0 min-w-[300px] w-[85vw] lg:w-full max-w-[350px] lg:max-w-none mx-auto border border-amber-400/20 hover:border-amber-400/60 transition-all duration-300 relative group"
    >
      {!isPlaying ? (
        // Facade: Minimalist UI
        <div className="relative w-full h-[520px] md:h-[580px] overflow-hidden cursor-pointer" onClick={() => setIsPlaying(true)}>
          {/* Clean IG Profile Tag */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md py-1.5 px-3 rounded-full border border-white/10">
            <div className="w-5 h-5 rounded-full bg-white p-0.5 flex items-center justify-center">
               <img src="/logo-triraksa.png" alt="logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-white text-[10px] font-bold tracking-wide">@triraksa_village</span>
          </div>

          <img 
            src={vid.img} 
            alt="Triraksa Reel" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.6)]">
              <Play className="w-8 h-8 text-white ml-1 drop-shadow-md" fill="currentColor" />
            </div>
          </div>
        </div>
      ) : (
        // Active: Native Instagram Embed
        <div className="w-full h-[520px] md:h-[580px] bg-white flex items-center justify-center">
          <iframe
            src={`https://www.instagram.com/p/${vid.shortcode}/embed`}
            className="w-full h-full border-none bg-white"
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
          ></iframe>
        </div>
      )}
    </motion.div>
  );
}
