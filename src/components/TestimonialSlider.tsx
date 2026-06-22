import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialSlider() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTesti = () => {
    setActiveIdx((activeIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTesti = () => {
    setActiveIdx((activeIdx + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-mono font-bold tracking-widest text-amber-850 uppercase font-serif">KATA MEREKA</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Ulasan Anak Kos Saraluyu
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Temukan kisah nyata dedikasi studi dan kenyamanan istirahat dari para penghuni yang telah tinggal bersama kami.
          </p>
        </div>

        {/* Carousel Container Slider (Testimoni Slider) */}
        <div className="max-w-3xl mx-auto relative px-4" id="testimonials-carousel-box">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-stone-50 border border-stone-300 rounded-3xl p-8 sm:p-12 text-left shadow-xl relative"
            >
              {/* Quote visual embellishments */}
              <Quote className="absolute right-8 top-8 text-amber-800/10" size={80} strokeWidth={1} />
              
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-500 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Feed Content */}
              <blockquote className="text-stone-850 font-serif text-sm sm:text-base lg:text-lg italic leading-relaxed mb-8 relative z-10">
                "{current.content}"
              </blockquote>

              {/* Author and User Profile Row */}
              <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-300">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-sm sm:text-base text-stone-950 block leading-snug">{current.name}</span>
                    <span className="text-[11px] text-amber-850 font-mono font-medium bg-amber-50 px-2 py-0.5 rounded-md mt-0.5 inline-block uppercase">
                      {current.role}  •  {current.roomType.split("(")[0]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-stone-400 font-mono text-[10px] sm:text-xs">
                  <MessageSquare size={13} />
                  <span>Verified Tenant</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Left and Right Controls */}
          <div className="flex justify-center sm:justify-end gap-3 mt-6">
            <button
              onClick={prevTesti}
              className="w-10 h-10 rounded-full bg-stone-900 border border-stone-850 hover:bg-stone-800 text-stone-50 flex items-center justify-center transition shadow-md"
              id="carousel-prev"
              aria-label="Ulasan sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextTesti}
              className="w-10 h-10 rounded-full bg-stone-900 border border-stone-850 hover:bg-stone-800 text-stone-50 flex items-center justify-center transition shadow-md"
              id="carousel-next"
              aria-label="Ulasan berikutnya"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
