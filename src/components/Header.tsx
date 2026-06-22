import { useState } from "react";
import { Layout, Compass, Info, Phone, BedDouble, HelpCircle, Activity } from "lucide-react";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navMenuItems = [
    { label: "Beranda", id: "hero", icon: "Home" },
    { label: "Tipe Kamar", id: "tipe-kamar", icon: "BedDouble" },
    { label: "Fasilitas", id: "fasilitas", icon: "Sparkles" },
    { label: "Lokasi", id: "lokasi", icon: "MapPin" },
    { label: "Student Guide", id: "student-guide", icon: "Compass" },
    { label: "Hubungi Kami", id: "hubungi", icon: "Phone" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      {/* Official Top Bar Banner */}
      <div className="bg-amber-850 text-[#f9f7f2] text-[10px] sm:text-[11px] font-mono py-2 px-4 flex justify-between items-center tracking-wider">
        <div className="flex items-center gap-2">
          <span className="inline-block relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-stone-100">KOS SARALUYU BANDUNG</span>
          <span className="text-amber-300 hidden sm:inline">•</span>
          <span className="text-[10px] text-[#cbcaa9] hidden sm:inline">EXCLUSIVE MEZZANINE & LOFT STUDIO</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-stone-300">
          <span>STATUS: TERSEDIA</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection("hero")} 
          className="flex items-center gap-2 cursor-pointer group"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-800 text-stone-50 flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-sm group-hover:bg-amber-700 transition">
            KS
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-stone-900 tracking-tight leading-none">
              Kos SARALUYU
            </h1>
            <p className="text-[10px] text-stone-500 font-mono tracking-wider mt-0.5 uppercase">
              Exclusive Boarding Area
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav">
          {navMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
              }}
              className="text-[13px] font-medium text-stone-600 hover:text-amber-800 hover:bg-stone-100/80 px-3 py-2 rounded-lg transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Toggles */}
        <div className="flex items-center gap-3">
          {/* Quick WA Button in Navbar */}
          <a
            href="https://api.whatsapp.com/send?phone=6287874817307&text=Halo%20Pengelola%20Kos%20Saraluyu,%20saya%20ingin%20tanya%20mengenai%20ketersediaan%20kamar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4.5 py-2.5 text-xs font-semibold tracking-wide text-stone-50 bg-[#5a5a40] hover:bg-[#4a4a35] rounded-xl transition shadow-sm"
            id="nav-cta-wa"
          >
            Tanya Pengelola
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-stone-100 text-stone-700"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 py-4 px-6 space-y-2 animate-fade-in" id="mobile-nav-panel">
          <p className="text-[10px] font-mono text-stone-400 tracking-wider uppercase mb-1">Navigasi Halaman</p>
          {navMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection(item.id), 100);
              }}
              className="block w-full text-left text-sm font-medium py-2 px-3 hover:bg-stone-100 rounded-lg text-stone-700 transition"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="https://api.whatsapp.com/send?phone=6287874817307&text=Halo%20Kos%20Saraluyu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2.5 rounded-lg text-xs font-semibold text-stone-50 bg-[#5a5a40] hover:bg-[#4a4a35] transition"
            >
              WhatsApp Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
