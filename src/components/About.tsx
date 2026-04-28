"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const houseTypes = [
  {
    name: "Brick Mezza",
    image: "/Brick Mezza.png"
  },
  {
    name: "Brick Plus",
    image: "/Brick Plus.png"
  },
  {
    name: "Brick Neo",
    image: "/Brick Neo.png"
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
            {/* Logo above title */}
            <div className="mb-6">
              <img src="/AW2.png" alt="Aria Wangsakara 2" className="h-14 md:h-20 w-auto object-contain drop-shadow-2xl" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight text-shadow">
              Lokasi Strategis,<br/>Investasi Menarik!
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-md mb-8 max-w-xl text-justify md:text-left">
              Kawasan hunian eksklusif yang dirancang khusus untuk menghadirkan kenyamanan, kemudahan, dan kualitas hidup terbaik bagi Anda dan keluarga.
              <br/><br/>
              Mengusung konsep rumah minimalis modern yang sangat fungsional. Setiap ruang ditata secara cerdas untuk memberikan suasana lega dan efisien, menjadikannya pilihan sempurna bagi keluarga masa kini.
            </p>
          </motion.div>

          <div className="w-full relative mt-6 lg:mt-0 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] bg-black/20 backdrop-blur-sm"
            >
              {/* Navigation Arrows */}
              <button 
                onClick={() => stepScroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-black/40 hover:bg-amber-500 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 backdrop-blur-md border border-white/10"
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={() => stepScroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-black/40 hover:bg-amber-500 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 backdrop-blur-md border border-white/10"
                disabled={activeIndex === houseTypes.length - 1}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] touch-pan-x cursor-grab active:cursor-grabbing"
              >
                {houseTypes.map((type, i) => (
                  <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-4 mb-16">
          {houseTypes.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-500 rounded-full ${
                activeIndex === i 
                ? "w-10 h-2 bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]" 
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
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
          className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col items-center"
        >
          <img src="/Bank.png" alt="Bekerjasama dengan Bank" className="w-full h-auto object-cover scale-105" />
        </motion.div>

      </div>
    </section>
  );
}
