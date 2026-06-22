import { SHADA_FACILITIES } from "../data";
import { Wifi, CookingPot, Shield, WashingMachine, Bike, Sparkles, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

const iconMap: { [key: string]: any } = {
  Wifi: Wifi,
  CookingPot: CookingPot,
  Shield: Shield,
  WashingMachine: WashingMachine,
  Bike: Bike,
  Sparkles: Sparkles,
};

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-amber-805 uppercase">FASILITAS KOMUNAL</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Fasilitas Bersama di Kos Saraluyu
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Menyediakan kenyamanan kolaboratif tanpa mengorbankan privasi. Semua area dibersihkan secara rutin oleh tim kebersihan profesional demi kenyamanan harianmu.
          </p>
        </div>

        {/* Minimalist Grid of Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHADA_FACILITIES.map((facility, index) => {
            const IconComponent = iconMap[facility.icon] || HelpCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col items-start space-y-4 hover:border-amber-800/30 transition-all group"
              >
                {/* Icon round frame */}
                <div className="w-12 h-12 rounded-xl bg-amber-800/10 text-amber-850 flex items-center justify-center group-hover:bg-amber-850 group-hover:text-stone-50 transition-colors duration-300">
                  <IconComponent size={22} />
                </div>

                {/* Info Text */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-stone-950 font-semibold text-sm sm:text-base tracking-tight">
                    {facility.name}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Co-living environment note with quick hover animations */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-6 border border-amber-800/10 text-center max-w-sm sm:max-w-xl mx-auto flex items-center justify-center gap-3">
          <Sparkles className="text-amber-801 flex-shrink-0" size={18} />
          <p className="text-amber-951 text-xs font-semibold leading-relaxed text-left">
            Disinfeksi harian, pembuangan sampah komunal pagi-sore, serta perawatan filter AC berkala tanpa biaya tambahan. Hal ini demi menjaga ekosistem kos yang sehat.
          </p>
        </div>

      </div>
    </section>
  );
}
