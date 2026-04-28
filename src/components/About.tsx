"use client";

import { motion } from "framer-motion";
import { BedDouble, ChefHat, Bath, Sofa, Car, ArrowUpSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const houseTypes = [
  {
    name: "Brick",
    subName: "Plus",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["2 Kamar Tidur", "1 Dapur", "1 Kamar Mandi", "1 Ruang Tamu", "Carport Luas", "Taman Asri"]
  },
  {
    name: "Brick",
    subName: "Mezza",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["2 Kamar Tidur", "1 Dapur", "1 Kamar Mandi", "1 Ruang Tamu", "Carport Luas", "1 Mezzanine"]
  },
  {
    name: "Brick",
    subName: "Neo",
    image: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["2 Kamar Tidur", "1 Dapur", "1 Kamar Mandi", "1 Ruang Tamu", "Carport Luas", "Design Modern"]
  }
];

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: index * clientWidth, behavior: 'smooth' });
    }
  };

  const stepScroll = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left' ? Math.max(0, activeIndex - 1) : Math.min(houseTypes.length - 1, activeIndex + 1);
    scrollTo(nextIndex);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-cover bg-center border-t border-amber-400/30" style={{ backgroundImage: "url('/bg-red.jpg')" }}>
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="hidden lg:block">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                 Lokasi Strategis,<br/>Investasi Menarik!
               </h2>
               <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-md mb-8 max-w-xl text-justify md:text-left">
                 Kawasan hunian eksklusif yang dirancang khusus untuk menghadirkan kenyamanan, kemudahan, dan kualitas hidup terbaik bagi Anda dan keluarga.
                 <br/><br/>
                 Mengusung konsep rumah minimalis modern yang sangat fungsional. Setiap ruang ditata secara cerdas untuk memberikan suasana lega dan efisien, menjadikannya pilihan sempurna bagi keluarga masa kini.
               </p>
             </div>
             <div className="flex items-center justify-center lg:justify-start mb-8">
               <img src="/AW2.png" alt="Cluster Aria Wangsakara 2" className="w-[85%] lg:w-[65%] max-w-[400px] lg:max-w-[280px] object-contain drop-shadow-2xl" />
             </div>
             <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-md max-w-xl">
               Nikmati kenyamanan hidup di Cluster Aria Wangsakara II, sebuah cluster hunian modern yang dirancang untuk keluarga urban yang mengutamakan kemudahan, keamanan, dan nilai investasi jangka panjang.
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-amber-400 bg-zinc-900 mt-6 lg:mt-0 group"
          >
            {/* Navigation Arrows */}
            <button 
              onClick={() => stepScroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/40 hover:bg-amber-500 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => stepScroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/40 hover:bg-amber-500 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
              disabled={activeIndex === houseTypes.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] h-[450px] md:h-[600px] w-full touch-pan-x cursor-grab active:cursor-grabbing"
            >
              {houseTypes.map((type, i) => (
                <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                  <img
                    src={type.image}
                    alt={`${type.name} ${type.subName}`}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-6 py-2 rounded-xl shadow-xl border border-amber-200">
                    <span className="font-bold text-2xl text-amber-900 tracking-tight">{type.name}</span> <span className="font-sans font-bold text-xl text-amber-900">{type.subName}</span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24 pointer-events-none">
                    <div className="grid grid-cols-3 gap-y-6 gap-x-4 justify-items-center">
                      <div className="flex flex-col items-center text-amber-400 gap-2">
                        <BedDouble className="w-7 h-7" />
                        <span className="text-[10px] md:text-xs font-semibold text-white text-center">{type.features[0]}</span>
                      </div>
                      <div className="flex flex-col items-center text-amber-400 gap-2">
                        <ChefHat className="w-7 h-7" />
                        <span className="text-[10px] md:text-xs font-semibold text-white text-center">{type.features[1]}</span>
                      </div>
                      <div className="flex flex-col items-center text-amber-400 gap-2">
                        <Bath className="w-7 h-7" />
                        <span className="text-[10px] md:text-xs font-semibold text-white text-center">{type.features[2]}</span>
                      </div>
                      <div className="flex flex-col items-center text-amber-400 gap-2">
                        <Sofa className="w-7 h-7" />
                        <span className="text-[10px] md:text-xs font-semibold text-white text-center">{type.features[3]}</span>
                      </div>
                      <div className="flex flex-col items-center text-amber-400 gap-2">
                        <Car className="w-7 h-7" />
                        <span className="text-[10px] md:text-xs font-semibold text-white text-center">{type.features[4]}</span>
                      </div>
                      <div className="flex flex-col items-center text-amber-400 gap-2">
                        <ArrowUpSquare className="w-7 h-7" />
                        <span className="text-[10px] md:text-xs font-semibold text-white text-center">{type.features[5]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-4 mb-16">
          {houseTypes.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-500 rounded-full ${
                activeIndex === i 
                ? "w-8 h-3 bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)]" 
                : "w-3 h-3 bg-amber-400/40 hover:bg-amber-400/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Bank Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30 flex flex-col items-center"
        >
          <img src="/Bank.png" alt="Bekerjasama dengan Bank" className="w-full h-auto object-cover scale-110" />
        </motion.div>

      </div>
    </section>
  );
}
