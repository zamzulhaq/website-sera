import { Instagram, MapPin, Layers, ShieldCheck, Heart } from "lucide-react";

export default function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Col 1: Branding block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <div className="w-9 h-9 rounded-xl bg-amber-800 text-stone-50 flex items-center justify-center font-serif text-lg font-bold">
                KS
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-stone-50 leading-none">Kos SARALUYU</h3>
                <span className="text-[9px] font-mono tracking-wider text-amber-500 uppercase">Aesthetic Co-Living Area</span>
              </div>
            </div>
            
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Hunian eksklusif bertipe mezzanine & loft dilengkapi 'Aesthetic Kit' siap pakai. Menyandingkan kehangatan rumah komunal dengan fungsionalitas penunjang kualitas belajar anak mahasiswa.
            </p>

            {/* Social handles links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com/kos_saraluyu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800/80 hover:bg-stone-800 text-stone-200 flex items-center justify-center transition"
                aria-label="Instagram Kos Saraluyu"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="https://shopee.co.id/kos_saraluyu_aesthetic_kit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800/80 hover:bg-stone-800 text-stone-200 flex items-center justify-center transition"
                aria-label="Aesthetic Shop Outlet"
              >
                <Layers size={13} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] text-stone-500 font-mono tracking-wider block uppercase font-bold">Menu Navigasi</span>
            <ul className="space-y-2 text-xs">
              {["Beranda", "Tipe Kamar", "Fasilitas", "Lokasi", "Kalkulator Sewa", "Booking Digital"].map((item, idx) => {
                const targetIds = ["hero", "tipe-kamar", "fasilitas", "lokasi", "kalkulator-biaya", "hubungi"];
                return (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(targetIds[idx])}
                      className="text-stone-400 hover:text-stone-50 transition focus:outline-none"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Address & Contact */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] text-stone-500 font-mono tracking-wider block uppercase font-bold">Alamat & Kontak Kos</span>
            <div className="space-y-3.5 text-xs text-stone-400">
              <div className="flex items-start gap-2 max-w-sm">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Jl. Saraluyu No. 12B, Coblong, Kota Bandung, Jawa Barat (Dekat Universitas / Kampus Terbaik di Bandung)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <p>Pengelola: Bpk. Heru Saraluyu (+62 812-3456-7890)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub-bottom row */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
          <div>
            <span>© 2026 Kos SARALUYU Bandung. Hak Cipta Dilindungi.</span>
          </div>
          <div className="flex flex-col sm:items-end items-center gap-1">
            <div className="flex items-center gap-1.5 text-stone-400">
              <span>Dikembangkan oleh <a href="https://zamifyofficial.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-amber-500 font-bold hover:underline font-mono">zamify</a></span>
              <Heart size={10} className="text-amber-500 fill-amber-500 animate-pulse" />
            </div>
            <span className="text-[9px] text-stone-600 block">Personalized Co-Living Experience</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
