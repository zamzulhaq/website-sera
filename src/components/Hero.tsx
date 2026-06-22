import { ArrowRight, BedDouble, Calculator, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onExploreRooms: () => void;
  onOpenCalculator: () => void;
}

export default function Hero({ onExploreRooms, onOpenCalculator }: HeroProps) {
  return (
    <section id="hero" className="relative bg-stone-100 overflow-hidden">
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Aesthetic Circle Accents */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-96 h-96 rounded-full bg-stone-200 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Left Section */}
          <div className="lg:col-span-7 space-y-6 z-10 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/10 text-amber-900 border border-amber-800/20 text-xs font-semibold tracking-wide uppercase mx-auto lg:mx-0"
            >
              <ShieldCheck size={14} className="text-amber-805" />
              <span>Satu-satunya Kos Mezzanine & Aesthetic Kit Premium</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1]"
            >
              Kehangatan Hunian Estetik, <br className="hidden sm:inline" />
              <span className="text-amber-800 font-serif italic">Kenyamanan Maksimal</span> Anak Kos.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-stone-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Kos SARALUYU menghadirkan kamar eksklusif dengan opsi <span className="font-semibold text-stone-800">Aesthetic Kit</span> siap pakai, mezzanine inovatif, internet super kencang, dan kedekatan akses menuju pusat kampus demi mendukung kualitas studi terbaikmu.
            </motion.p>

            {/* Interactive Call-To-Action (CTA) Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onExploreRooms}
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl text-sm font-semibold text-stone-50 bg-amber-850 hover:bg-amber-900 transition shadow-lg shadow-amber-900/10 pointer-events-auto"
                id="hero-cta-rooms"
              >
                <BedDouble size={16} />
                <span>Lihat Tipe Kamar</span>
                <ArrowRight size={14} className="ml-1" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl text-sm font-semibold text-stone-700 bg-stone-50 border border-stone-300 hover:bg-stone-100 min-w-[150px] transition"
                id="hero-cta-calc"
              >
                <Calculator size={16} />
                <span>Kalkulator Sewa</span>
              </button>
            </motion.div>

            {/* Micro Specs Under CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/85 text-left max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              <div>
                <p className="text-xl font-bold font-serif text-stone-900">12+</p>
                <p className="text-[11px] text-stone-500 font-mono uppercase tracking-wider">Fasilitas Bersama</p>
              </div>
              <div>
                <p className="text-xl font-bold font-serif text-stone-900">3 Tipe</p>
                <p className="text-[11px] text-stone-500 font-mono uppercase tracking-wider">Desain Mezzanine & Loft</p>
              </div>
              <div>
                <p className="text-xl font-bold font-serif text-stone-900">150 Mbps</p>
                <p className="text-[11px] text-stone-500 font-mono uppercase tracking-wider">Kecepatan Wi-Fi</p>
              </div>
            </motion.div>
          </div>

          {/* Right Banner Showcase (High-res Horizontal-Visual Slider) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border-4 border-stone-50 shadow-xl shadow-stone-800/10 group aspect-[4/3] sm:aspect-[16/10] lg:aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200"
                alt="Kos Saraluyu Premium Room"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Bottom gradient fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              
              {/* Live room badge info card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md p-4 rounded-xl text-stone-50 border border-stone-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-amber-400 font-mono uppercase tracking-widest block font-bold">Featured Space</span>
                  <span className="text-sm font-serif font-semibold">Tipe Nalendra Studio Loft</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 block">Sewa Bulanan</span>
                  <span className="text-xs font-mono font-bold text-amber-300">Mulai Rp 1.7 M/Bln</span>
                </div>
              </div>
            </motion.div>
            
            {/* Tiny accent badge */}
            <div className="absolute -top-3 -right-3 bg-amber-800 text-stone-50 text-[10px] font-mono tracking-widest font-semibold px-3 py-1 rounded-full shadow-lg border border-amber-600 block uppercase">
              100% Real Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
