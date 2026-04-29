"use client";

import { motion } from "framer-motion";

export default function LifeExperience() {
  const shortcodes = [
    "DPD7iZZj72M",
    "DOxtxi_k714",
    "DLEF1GOBTD6",
    "DN2cDg-5pA-"
  ];

  return (
    <section id="life-experience" className="py-20 lg:py-28 relative bg-gradient-to-b from-[#5c0f0f] via-zinc-950 to-[#5c0f0f]">
      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <span className="text-amber-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
              / LIFE AT TRIRAKSA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Testimony<br />Triraksa Village 2
            </h2>
          </div>
          <div className="hidden lg:block max-w-lg lg:pb-2">
          </div>
        </div>

        {/* Native IG Embed Slider on Mobile/Laptop, Grid on Large PC */}
        <div className="flex xl:grid xl:grid-cols-4 overflow-x-auto xl:overflow-visible gap-6 md:gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] items-start">
          {shortcodes.map((code, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="snap-center flex-shrink-0 w-[85vw] md:w-[350px] xl:w-full mx-auto bg-transparent overflow-hidden"
            >
              <iframe
                src={`https://www.instagram.com/p/${code}/embed`}
                className="w-full h-[620px] border border-gray-200/20 bg-white rounded-md shadow-2xl"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
