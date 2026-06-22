import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RoomCatalog from "./components/RoomCatalog";
import Facilities from "./components/Facilities";
import GuideMap from "./components/GuideMap";
import CostCalculator from "./components/CostCalculator";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import { MessageSquare, Phone, Activity, Sparkles, X, Compass, Palette, Shield, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  
  // Welcome Loading Screen States
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Menghubungkan ke server Kos Saraluyu...");

  useEffect(() => {
    const loadingTexts = [
      "Menghubungkan ke server Kos Saraluyu...",
      "Memuat asset desain Mezzanine & Loft...",
      "Menyelaraskan opsi kustomisasi Aesthetic Kit...",
      "Mengalkulasi estimasi biaya sewa kamar...",
      "Sistem siap! Selamat menjelajah Kos Saraluyu."
    ];

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const increment = Math.floor(Math.random() * 14) + 10;
        const next = prev + increment;
        
        if (next >= 100) {
          clearInterval(interval);
          setLoadingText(loadingTexts[4]);
          return 100;
        }

        if (next < 25) {
          setLoadingText(loadingTexts[0]);
        } else if (next < 50) {
          setLoadingText(loadingTexts[1]);
        } else if (next < 75) {
          setLoadingText(loadingTexts[2]);
        } else {
          setLoadingText(loadingTexts[3]);
        }

        return next;
      });
    }, 45);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Auto transition to main site once loading reaches 100%
  useEffect(() => {
    if (loadingProgress === 100) {
      const exitTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [loadingProgress]);

  // States to pass from Cost Calculator to Booking Form
  const [prefilledRoomId, setPrefilledRoomId] = useState<string>("");
  const [prefilledKitType, setPrefilledKitType] = useState<"kosongan" | "aesthetic">("aesthetic");
  const [prefilledAddons, setPrefilledAddons] = useState<string[]>([]);
  
  // Notification bubble for WhatsApp action
  const [showWhatsAppBubble, setShowWhatsAppBubble] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Sync estimation output to Booking Form
  const handleSendEstimationToBooking = (roomId: string, kitType: "kosongan" | "aesthetic", addonIds: string[]) => {
    setPrefilledRoomId(roomId);
    setPrefilledKitType(kitType);
    setPrefilledAddons(addonIds);

    // Scroll to Booking Form smoothly
    setTimeout(() => {
      scrollToSection("hubungi");
    }, 100);
  };

  // Trigger from Room Card click direct booking
  const handleSelectRoomDirectly = (roomId: string, kitType: "kosongan" | "aesthetic") => {
    setPrefilledRoomId(roomId);
    setPrefilledKitType(kitType);
    
    // Scroll to Booking Form smoothly
    setTimeout(() => {
      scrollToSection("hubungi");
    }, 100);
  };

  return (
    <>
      {/* Welcome Loading & Onboarding screen designed by zamify */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="onboarding-welcome-screen"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              y: -80,
              transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } 
            }}
            className="fixed inset-0 z-50 bg-[#f9f7f2] flex flex-col items-center justify-between p-6 sm:p-12 text-center select-none overflow-y-auto"
            id="loading-welcome-screen"
          >
            {/* Top Row Decor */}
            <div className="w-full flex justify-between items-center max-w-5xl opacity-80 text-stone-500 text-[10px] sm:text-xs font-mono tracking-widest border-b border-stone-200/50 pb-4">
              <span>ESTABLISHED 2026 • BANDUNG</span>
              <div className="flex items-center gap-1.5 text-amber-701 font-semibold">
                <Shield size={12} className="text-[#5a5a40]" />
                <span>SECURED CO-LIVING APP</span>
              </div>
            </div>

            {/* Middle Welcome Column */}
            <div className="max-w-xl my-auto py-8 sm:py-16 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
              {/* Premium Golden Brand Glyph with scale animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#5a5a40] text-[#f9f7f2] flex items-center justify-center font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight shadow-2xl relative"
              >
                KS
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-[#f9f7f2] animate-pulse" />
              </motion.div>

              {/* Dynamic Welcome Heading */}
              <div className="space-y-3 sm:space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#d17a5a]/10 text-[#d17a5a] text-[10px] sm:text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#d17a5a]/20 inline-block font-bold"
                >
                  ✨ JAPANESE-SCANDINAVIAN DESIGN
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#5a5a40] tracking-tight leading-tight"
                >
                  Selamat Datang di <br />
                  <span className="text-[#3a3a30] text-4xl sm:text-5xl md:text-6xl font-serif mt-1 block">Kos Saraluyu</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed"
                >
                  Hunian eksklusif bertipe Mezzanine & Loft dengan "Aesthetic Kit" premium siap pakai demi mengoptimalkan kenyamanan belajar dan istirahat Anda di kota Bandung.
                </motion.p>
              </div>

              {/* Progress Slider Widget */}
              <div className="w-full max-w-sm space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs text-stone-500 font-mono">
                  <span className="animate-pulse flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                    {loadingText}
                  </span>
                  <span className="font-bold text-[#5a5a40]">{loadingProgress}%</span>
                </div>
                {/* Visual Bar Indicator */}
                <div className="h-2 w-full bg-stone-200/80 rounded-full overflow-hidden border border-stone-300/30 p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#5a5a40] via-[#c16a4b] to-[#d17a5a] rounded-full transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>

              {/* Status completion indicator */}
              <div className="pt-4 h-16 flex items-center justify-center">
                {loadingProgress === 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs font-mono text-[#5a5a40] uppercase tracking-widest font-bold flex items-center gap-2"
                  >
                    <Sparkles size={12} className="text-amber-500 animate-spin" />
                    <span>Mempersiapkan Ruang...</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Bottom Credit and Developer Watermark */}
            <div className="w-full max-w-5xl border-t border-stone-300/40 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500 font-mono z-10">
              <div className="flex items-center gap-2">
                <Palette size={13} className="text-[#d17a5a]" />
                <span className="text-left leading-relaxed">
                  Natural Tones Design Theme • Inter & Cormorant Garamond Typography
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#5a5a40]/5 border border-[#5a5a40]/10 px-4 py-1.5 rounded-2xl text-stone-700">
                <span>Dibuat Oleh Developer:</span>
                <a 
                  href="https://github.com/zamify" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-amber-801 hover:underline flex items-center gap-1"
                >
                  zamify <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-stone-100 flex flex-col justify-between selection:bg-amber-800 selection:text-stone-50 antialiased font-sans">
        
        {/* Header Navigator */}
        <Header 
          scrollToSection={scrollToSection} 
        />

        {/* Main Container body */}
        <main className="flex-grow">
          {/* Main live website wrapper */}
          <div className="space-y-0 animate-fade-in">
            {/* Hero Section Container */}
            <Hero 
              onExploreRooms={() => scrollToSection("tipe-kamar")} 
              onOpenCalculator={() => scrollToSection("kalkulator-biaya")} 
            />

            {/* Room Tipe grid system */}
            <RoomCatalog 
              onSelectRoom={handleSelectRoomDirectly} 
            />

            {/* Commuanl Facilities block */}
            <Facilities />

            {/* Interactive Vector map with spots category & Embed map */}
            <GuideMap />

            {/* JavaScript Cost Calculator widget */}
            <CostCalculator 
              selectedRoomId={prefilledRoomId}
              selectedKitType={prefilledKitType}
              onSendEstimationToBooking={handleSendEstimationToBooking}
            />

            {/* Complete Booking Form Digital integration */}
            <BookingForm 
              prefilledRoomId={prefilledRoomId}
              prefilledKitType={prefilledKitType}
              prefilledAddons={prefilledAddons}
            />
          </div>
        </main>

        {/* Footer Area */}
        <Footer scrollToSection={scrollToSection} />

        {/* Floating Sticky WhatsApp Button & Quick Interactive Response bubble */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
          
          {/* Automatic micro-notification popup for quick inquiries */}
          <AnimatePresence>
            {showWhatsAppBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 5 }}
                className="bg-stone-900 border border-stone-850 px-4 py-3.5 rounded-2xl shadow-xl max-w-xs text-left text-xs pointer-events-auto flex gap-3 items-start"
                id="wa-bubble-alert"
              >
                <div className="p-1 rounded-lg bg-amber-800 text-stone-105 shrink-0">
                  <Sparkles size={14} className="animate-pulse" />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-stone-50 block leading-tight">Butuh respon cepat?</span>
                  <p className="text-[10px] text-stone-300 leading-snug">Rencana survey lokasi & tanya ketersediaan mezzanine bisa langsung ngobrol bareng Pak Heru!</p>
                </div>
                <button
                  onClick={() => setShowWhatsAppBubble(false)}
                  className="text-stone-500 hover:text-stone-100 transition shrink-0 p-0.5 focus:outline-none"
                  aria-label="Tutup notifikasi"
                >
                  <X size={12} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating WhatsApp Action Button */}
          <a
            href="https://api.whatsapp.com/send?phone=6287874817307&text=Halo%20Bapak%20Heru%20Saraluyu%2C%20saya%20tertarik%20bisa%20bertanya%20mengenai%20informasi%20lebih%20lanjut%20kamar%20Kos%20SARALUYU.%20Terima%20kasih%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 text-stone-50 rounded-full flex items-center justify-center shadow-2xl transition duration-300 border border-emerald-500 pointer-events-auto animate-bounce duration-5000"
            id="floating-sticky-whatsapp-btn"
            aria-label="Hubungi WhatsApp Pengelola"
          >
            <Phone className="fill-stone-50 shrink-0 select-none animate-wiggle" size={24} />
          </a>

        </div>

      </div>
    </>
  );
}
