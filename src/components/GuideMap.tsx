import { useState } from "react";
import { GUIDE_SPOTS } from "../data";
import { GuideSpot } from "../types";
import { MapPin, Coffee, Utensils, Scissors, Star, Navigation, Compass, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GuideMap() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "kuliner" | "nugas" | "laundry">("all");
  const [activeSpot, setActiveSpot] = useState<GuideSpot>(GUIDE_SPOTS[1]); // Default active spot is "Cafe Kopi Kancil"

  const filteredSpots = selectedCategory === "all"
    ? GUIDE_SPOTS
    : GUIDE_SPOTS.filter(spot => spot.category === selectedCategory);

  // Mapping categoric markers or colored pins
  const categoryConfig: Record<string, { color: string; icon: any; bg: string }> = {
    kuliner: { color: "text-rose-600 border-rose-300", bg: "bg-rose-500", icon: Utensils },
    nugas: { color: "text-indigo-600 border-indigo-300", bg: "bg-indigo-500", icon: Coffee },
    laundry: { color: "text-teal-605 border-teal-300", bg: "bg-teal-500", icon: Scissors },
  };

  const placesDistances = [
    { destination: "Kampus Universitas Terdekat (Bandung)", timeWalk: "10 menit", timeBike: "3-4 menit", distance: "1.2 km" },
    { destination: "Minimarket Alfa/Indomaret", timeWalk: "2 menit", timeBike: "1 menit", distance: "150 m" },
    { destination: "Stasiun / Pool Travel Bandung Terdekat", timeWalk: "12 menit", timeBike: "4 menit", distance: "1.5 km" },
    { destination: "Rumah Sakit & Apotek 24 Jam", timeWalk: "8 menit", timeBike: "2 menit", distance: "900 m" }
  ];

  return (
    <section id="lokasi" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-mono font-bold tracking-widest text-amber-805 uppercase">AKSES & PARADIGMA LOKASI</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Interactive Guide Map & Lokasi Kos
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Menghubungkan masa studimu dengan kepraktisan hidup harian. Gunakan peta interaktif di bawah untuk melihat titik kuliner terlezat, tempat nugas favorit, dan laundry kilat di sekitar Kos SARALUYU.
          </p>
        </div>

        {/* Dashboard Grid Map layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="student-guide">
          
          {/* Left panel: Category Selector + Interactive Spots Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block font-bold">Kategori Panduan</span>
              
              {/* Filter Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2" id="map-filters">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-center border transition ${
                    selectedCategory === "all"
                      ? "bg-stone-900 border-stone-950 text-stone-50"
                      : "bg-stone-100 border-stone-200 text-stone-600 hover:bg-stone-205"
                  }`}
                >
                  Semua Titik
                </button>
                <button
                  onClick={() => setSelectedCategory("kuliner")}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-center border transition flex items-center justify-center gap-1.5 ${
                    selectedCategory === "kuliner"
                      ? "bg-rose-600 border-rose-700 text-stone-50"
                      : "bg-rose-50 border-rose-100 text-rose-800 hover:bg-rose-100/50"
                  }`}
                >
                  <Utensils size={12} />
                  <span>Kuliner</span>
                </button>
                <button
                  onClick={() => setSelectedCategory("nugas")}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-center border transition flex items-center justify-center gap-1.5 ${
                    selectedCategory === "nugas"
                      ? "bg-indigo-600 border-indigo-700 text-stone-50"
                      : "bg-indigo-50 border-indigo-100 text-indigo-800 hover:bg-indigo-100/50"
                  }`}
                >
                  <Coffee size={12} />
                  <span>Tempat Nugas</span>
                </button>
                <button
                  onClick={() => setSelectedCategory("laundry")}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-center border transition flex items-center justify-center gap-1.5 ${
                    selectedCategory === "laundry"
                      ? "bg-teal-605 border-teal-700 text-stone-50"
                      : "bg-teal-50 border-teal-100 text-teal-800 hover:bg-teal-100/50"
                  }`}
                >
                  <Scissors size={12} />
                  <span>Laundry</span>
                </button>
              </div>
            </div>

            {/* Micro list view */}
            <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-[340px] pr-2 space-y-2 mt-4">
              <span className="text-[10px] font-mono tracking-widest text-stone-400 block uppercase font-bold">List Lokasi ({filteredSpots.length})</span>
              {filteredSpots.map((spot) => {
                const isSelected = activeSpot.id === spot.id;
                const config = categoryConfig[spot.category];
                return (
                  <div
                    key={spot.id}
                    onClick={() => setActiveSpot(spot)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between text-left ${
                      isSelected
                        ? "bg-stone-900 border-stone-950 text-stone-50 shadow-md"
                        : "bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? "bg-amber-800/20 text-amber-300" : "bg-stone-200 text-stone-600"}`}>
                        {spot.category === "kuliner" && <Utensils size={14} />}
                        {spot.category === "nugas" && <Coffee size={14} />}
                        {spot.category === "laundry" && <Scissors size={14} />}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold leading-tight">{spot.name}</h4>
                        <span className="text-[10px] opacity-75">{spot.distance} dari Kos</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-500 font-bold text-xs shrink-0 pl-2">
                      <Star size={11} fill="currentColor" />
                      <span>{spot.rating}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlighting Active Card Info Overlay Detail */}
            <AnimatePresence mode="wait">
              {activeSpot && (
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-amber-900 text-stone-50 p-4 rounded-2xl border border-amber-805 flex flex-col justify-between space-y-3 shadow-inner"
                >
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono tracking-widest uppercase text-amber-300 font-bold">
                        {activeSpot.category}  •  {activeSpot.distance}
                      </span>
                      <div className="flex items-center gap-0.5 text-amber-300 font-bold text-xs">
                        <Star size={11} fill="currentColor" />
                        <span>{activeSpot.rating}</span>
                      </div>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold mt-1 font-serif">{activeSpot.name}</h4>
                    <p className="text-[11px] text-amber-100/90 leading-relaxed mt-1.5">{activeSpot.description}</p>
                  </div>
                  <div className="pt-2 border-t border-amber-800/60 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-amber-300">Waktu Tempuh: {activeSpot.distance.split("(")[0]}</span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(activeSpot.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono font-bold bg-stone-50 hover:bg-stone-100 text-amber-900 px-2.5 py-1 rounded-md transition inline-flex items-center gap-1 shrink-0"
                    >
                      <Navigation size={8} />
                      <span>Peta</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Column: Beautiful Visual Interactive Map (Representing the "Interactive Guide Map") */}
          <div className="lg:col-span-5 relative bg-stone-200 border border-stone-300 rounded-3xl min-h-[300px] flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Visual stylised vector landscape grid representing student hub */}
            <div className="absolute inset-0 bg-stone-300 bg-[radial-gradient(#b5b5b5_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />

            {/* Abstract campus outline routes / paths lines on map canvas */}
            <svg className="absolute inset-0 w-full h-full text-stone-400/50 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,100 C 150,120 200,80 350,150 S 500,300 800,280" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M 120,0 C 100,200 400,100 350,400" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M 0,250 C 300,225 350,350 800,350" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="350" cy="225" r="50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
            </svg>

            {/* Static Core Marker for "KOS SARALUYU" (Self placement) */}
            <div 
              style={{ left: "50%", top: "45%" }} 
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
              id="map-marker-kos"
            >
              <div className="bg-amber-800 text-stone-50 text-[10px] font-mono font-bold px-2 py-1 rounded-md shadow-lg border border-amber-700 whitespace-nowrap mb-1">
                KOS SARALUYU 🏠
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-800 border-4 border-stone-50 flex items-center justify-center animate-bounce shadow-md">
                <div className="w-1.5 h-1.5 bg-stone-50 rounded-full" />
              </div>
              <div className="w-8 h-2 bg-stone-900/20 blur-sm rounded-full mt-0.5" />
            </div>

            {/* Floating colored interactive categorical marker pins */}
            {filteredSpots.map((spot) => {
              const markerCfg = categoryConfig[spot.category];
              const isSpotActive = activeSpot.id === spot.id;
              
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(spot)}
                  style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/marker font-semibold flex flex-col items-center z-10 focus:outline-none focus:ring-0"
                  title={spot.name}
                >
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover/marker:opacity-100 transition duration-250 absolute bottom-full mb-1 bg-stone-900 text-stone-50 text-[9px] font-mono px-1.5 py-0.5 rounded whitespace-nowrap pointer-events-none z-20">
                    {spot.name} • {spot.distance}
                  </div>

                  {/* Marker Pin Circle */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 border-stone-50 shadow-md transition-all ${
                    isSpotActive 
                      ? "scale-125 ring-2 ring-stone-950 font-bold" 
                      : "opacity-85 hover:opacity-100 hover:scale-110"
                  } ${markerCfg.bg} text-stone-50`}>
                    <div className="scale-75">
                      {spot.category === "kuliner" && <Utensils size={12} />}
                      {spot.category === "nugas" && <Coffee size={12} />}
                      {spot.category === "laundry" && <Scissors size={12} />}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Bottom mini instruction guide */}
            <div className="p-3 bg-stone-900/90 backdrop-blur-sm border-t border-stone-850 flex items-center justify-between text-stone-550 z-10 w-full text-[10px] font-mono leading-none tracking-tight">
              <span className="text-stone-300">💡 Klik pin warna-warni untuk detail rute jarak tempuh</span>
              <span className="text-amber-400 font-bold uppercase select-none">Interactive Sandbox</span>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Map + Distances Poin list */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6 bg-stone-100/50 p-5 rounded-3xl border border-stone-200">
            {/* Google Maps Embed representation inside sandbox */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block font-bold">Embed Peta Google Maps</span>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-300 border border-stone-250 relative shadow-inner">
                {/* Embedded Map Representation */}
                <iframe
                  title="Google Maps Embed Kos Saraluyu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2341496350796!2d106.8290947!3d-6.3637145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1107ff752d%3A0xe54efd7b42fa9eb9!2sUniversitas%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-80 hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>

            {/* List distances points */}
            <div className="space-y-4 flex-1 pt-4">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block font-bold">Jarak Fasilitas Umum</span>
              <div className="space-y-3">
                {placesDistances.map((place, idx) => (
                  <div key={idx} className="text-left leading-tight text-xs space-y-1">
                    <span className="font-semibold text-stone-800 text-[11px] sm:text-xs block">{place.destination}</span>
                    <div className="flex items-center gap-2 text-[10px] text-stone-500">
                      <span className="bg-stone-200 px-1.5 py-0.5 rounded text-stone-605">🚶 {place.timeWalk}</span>
                      <span className="bg-stone-200 px-1.5 py-0.5 rounded text-stone-605">🏍️ {place.timeBike}</span>
                      <span>({place.distance})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
