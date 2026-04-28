"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadForm() {
  return (
    <section className="py-20 bg-[#faf9f8]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col w-full"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-800 mb-8 text-center md:text-left">
            Dapatkan info lengkapnya dengan mengisi data di bawah ini
          </h3>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-600">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8dc63f]/50 transition-all text-zinc-800 placeholder:text-zinc-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-600">Mobile phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Masukkan nomer hp Anda"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8dc63f]/50 transition-all text-zinc-800 placeholder:text-zinc-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 bg-[#8dc63f] hover:bg-[#7cb036] text-white font-semibold py-4 px-10 rounded-md transition-colors w-fit shadow-md shadow-[#8dc63f]/20"
            >
              Download Brochure
              <Download className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
