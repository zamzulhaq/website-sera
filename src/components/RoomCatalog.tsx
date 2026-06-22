import { useState } from "react";
import { ROOMS } from "../data";
import { Room } from "../types";
import { BedDouble, Maximize, CheckCircle2, ChevronRight, MessageSquare, ExternalLink, RefreshCw, Layers, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface RoomCatalogProps {
  onSelectRoom: (roomId: string, kitType: "kosongan" | "aesthetic") => void;
}

export default function RoomCatalog({ onSelectRoom }: RoomCatalogProps) {
  const [useAestheticKit, setUseAestheticKit] = useState<boolean>(true);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  // Formatting currency Indonesian Rupiah
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(number);
  };

  const openDetailModal = (room: Room) => {
    setSelectedRoom(room);
    setActiveImageIdx(0);
  };

  return (
    <section id="tipe-kamar" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-mono font-bold tracking-widest text-amber-805 uppercase">KATALOG PILIHAN</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Tipe Kamar Kos Saraluyu
            </h2>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
              Jelajahi keunikan setiap tipe kamar. Semua kamar dirancang dengan penataan ruang efisien, pencahayaan alami, dan sirkulasi angin segar.
            </p>
          </div>

          {/* Interactive Toggle Button "Kamar Kosongan" vs "Aesthetic Kit" */}
          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end gap-2.5">
            <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">Opsi Penataan interior</span>
            <div className="bg-stone-200 p-1.5 rounded-2xl flex items-center shadow-inner border border-stone-300 w-full sm:w-auto">
              {/* Kosongan Button */}
              <button
                onClick={() => setUseAestheticKit(false)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-2 flex-1 sm:flex-initial ${
                  !useAestheticKit
                    ? "bg-stone-50 text-stone-900 shadow-md"
                    : "text-stone-600 hover:text-stone-900"
                }`}
                id="toggle-kosongan"
              >
                <span>Kamar Kosongan</span>
                {!useAestheticKit && (
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                )}
              </button>

              {/* Aesthetic Kit Button */}
              <button
                onClick={() => setUseAestheticKit(true)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-2 flex-1 sm:flex-initial ${
                  useAestheticKit
                    ? "bg-amber-800 text-stone-50 shadow-md"
                    : "text-stone-600 hover:text-stone-900"
                }`}
                id="toggle-aesthetic"
              >
                <Layers size={13} className={useAestheticKit ? "text-amber-300" : ""} />
                <span>Aesthetic Kit</span>
                {useAestheticKit && (
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-50" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="room-grid">
          {ROOMS.map((room) => {
            const currentPrice = useAestheticKit ? room.basePriceAesthetic : room.basePriceKosongan;
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 hover:border-amber-800/40 hover:shadow-xl transition-all duration-300 flex flex-col group"
                id={`room-card-${room.id}`}
              >
                {/* Photo Header */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Absolute Badge Room Size */}
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-stone-50 text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1.5 rounded-lg border border-stone-800/80 flex items-center gap-1.5">
                    <Maximize size={12} className="text-amber-400" />
                    <span>Ukuran {room.size}</span>
                  </div>

                  {/* Absolute Interior Kit Status */}
                  <div className="absolute top-4 right-4 bg-amber-805 text-amber-100 text-[9px] font-mono tracking-widest font-bold px-2 py-1.5 rounded-lg shadow-sm block uppercase scale-90 sm:scale-100">
                    {useAestheticKit ? "Aesthetic Kit" : "Kosongan"}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-900 transition">
                      {room.name}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>
                    
                    {/* Visual Highlights Points */}
                    <ul className="space-y-1.5 pt-2">
                      {room.features.slice(0, 3).map((feat, index) => (
                        <li key={index} className="flex items-center gap-2 text-stone-600 text-xs text-left">
                          <CheckCircle2 size={13} className="text-amber-805 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-200/80 flex flex-col gap-4">
                    {/* Price and Action Toggle Display */}
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 font-mono tracking-wider block uppercase">Harga Sewa Bulanan</span>
                        <span className="text-xl sm:text-2xl font-serif font-bold text-amber-950">
                          {formatRupiah(currentPrice)}
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono"> / bulan (nett)</span>
                      </div>
                      
                      {/* Interactive toggle prompt */}
                      <button 
                        onClick={() => openDetailModal(room)} 
                        className="text-stone-700 bg-stone-200 hover:bg-stone-300 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition"
                      >
                        Detail Kamar
                      </button>
                    </div>

                    {/* Booking CTAs */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <button
                        onClick={() => {
                          openDetailModal(room);
                        }}
                        className="h-10 text-xs font-semibold rounded-xl bg-stone-900 hover:bg-stone-850 text-stone-50 transition flex items-center justify-center gap-1.5"
                        id={`btn-details-${room.id}`}
                      >
                        Lihat Galeri
                      </button>
                      <button
                        onClick={() => onSelectRoom(room.id, useAestheticKit ? "aesthetic" : "kosongan")}
                        className="h-10 text-xs font-semibold rounded-xl bg-amber-800 hover:bg-amber-900 text-stone-50 transition shadow-sm flex items-center justify-center gap-1"
                        id={`btn-booking-${room.id}`}
                      >
                        Pesan Kamar
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Aesthetic Layout Consultation Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#5a5a40] text-[#f9f7f2] rounded-3xl p-6 sm:p-10 border border-stone-800 relative overflow-hidden"
          id="aesthetic-shop-banner"
        >
          {/* Visual abstract art background */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#d17a5a]/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold uppercase">Konsultasi Layout & Ruang</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">Ingin Menata Ulang Kamarmu Sesuai Gaya Belajarmu?</h3>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                Setiap pemesanan unit Mezzanine atau Loft di Kos Saraluyu sudah termasuk layanan konsultasi dekorasi gratis. Tim kami siap membantumu menata meja belajar, layout ranjang, hingga lampu tidur ambient belajar terbaik demi produktivitasmu.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=6287874817307&text=Halo%20Bapak%20Heru%20Saraluyu%2C%20saya%20tertarik%20untuk%20konsultasi%20tata%20ruang%20dan%20survey%20kamar%20di%20Saraluyu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d17a5a] hover:bg-[#c16a4b] text-[#f9f7f2] h-12 px-6 rounded-xl text-xs font-semibold font-mono tracking-wide transition shadow-lg shadow-stone-900/10 shrink-0"
              id="outbound-aesthetic-shop"
            >
              <Compass size={14} />
              <span>KONSULTASI RUANG GRATIS</span>
            </a>
          </div>
        </motion.div>

        {/* Modal Pop-up / Halaman Detail Room */}
        <AnimatePresence>
          {selectedRoom && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-stone-50 text-stone-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[80vh]"
                id="room-modal-popup"
              >
                {/* Left Side: Photo Slider / Galerie */}
                <div className="w-full lg:w-1/2 bg-stone-900 relative flex flex-col justify-between">
                  {/* Main active image */}
                  <div className="flex-1 relative aspect-[4/3] lg:aspect-auto h-64 lg:h-full">
                    <img
                      src={selectedRoom.images[activeImageIdx]}
                      alt={`${selectedRoom.name} slide`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Size badge */}
                    <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-800 text-stone-50 text-xs font-mono">
                      Ukuran Kamar: {selectedRoom.size}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="p-4 bg-stone-950/90 border-t border-stone-800 flex items-center gap-3 justify-center overflow-x-auto">
                    {selectedRoom.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition ${
                          activeImageIdx === idx ? "border-amber-400" : "border-stone-700 hover:border-stone-500"
                        }`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side: Specifications & Facilities */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header Spec */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-amber-850 uppercase font-bold block">Spesifikasi Detail</span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">{selectedRoom.name}</h4>
                      </div>
                      <button
                        onClick={() => setSelectedRoom(null)}
                        className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-5 pt-4">
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{selectedRoom.description}</p>
                      
                      {/* Tables specs */}
                      <div className="bg-stone-200/50 rounded-2xl p-4 border border-stone-350 space-y-3">
                        <div className="grid grid-cols-3 text-xs border-b border-stone-300/40 pb-2">
                          <span className="text-stone-500 font-medium">Kamar Mandi</span>
                          <span className="col-span-2 text-stone-900 font-semibold">{selectedRoom.specifications.bathroom}</span>
                        </div>
                        <div className="grid grid-cols-3 text-xs border-b border-stone-300/40 pb-2">
                          <span className="text-stone-500 font-medium">Kapasitas</span>
                          <span className="col-span-2 text-stone-900 font-semibold">Maksimal {selectedRoom.specifications.maxOccupants} Orang</span>
                        </div>
                        <div className="grid grid-cols-3 text-xs border-b border-stone-300/40 pb-2">
                          <span className="text-stone-500 font-medium">Sistem Listrik</span>
                          <span className="col-span-2 text-stone-900 font-semibold">{selectedRoom.specifications.electricity}</span>
                        </div>
                        <div className="grid grid-cols-3 text-xs">
                          <span className="text-stone-500 font-medium">Furniture Include</span>
                          <span className="col-span-2 text-stone-900 font-semibold">
                            {selectedRoom.specifications.furnishing.join(", ")}
                          </span>
                        </div>
                      </div>

                      {/* Facilities checkmarks list */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-stone-500 tracking-wider block uppercase font-bold">Fasilitas Kamar Standar Kamar</span>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {selectedRoom.features.map((feat, index) => (
                            <div key={index} className="flex items-center gap-2 text-stone-700">
                              <CheckCircle2 size={13} className="text-amber-805 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing footer & Action in Modal */}
                  <div className="pt-4 border-t border-stone-250 flex flex-col gap-4">
                    <div className="flex justify-between items-center bg-stone-200/40 p-4 rounded-xl border border-stone-300/50">
                      <div>
                        <span className="text-[10px] text-stone-400 font-mono tracking-wider block">KAMAR KOSONGAN</span>
                        <span className="text-base font-bold text-stone-800">{formatRupiah(selectedRoom.basePriceKosongan)}</span>
                      </div>
                      <div className="w-[1px] h-8 bg-stone-300" />
                      <div className="text-right">
                        <span className="text-[10px] text-amber-700 font-mono tracking-wider block font-bold">DENGAN AESTHETIC KIT</span>
                        <span className="text-base font-bold text-amber-900">{formatRupiah(selectedRoom.basePriceAesthetic)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => {
                          onSelectRoom(selectedRoom.id, "kosongan");
                          setSelectedRoom(null);
                        }}
                        className="h-11 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-2"
                      >
                        Pilih Kosongan
                      </button>
                      <button
                        onClick={() => {
                          onSelectRoom(selectedRoom.id, "aesthetic");
                          setSelectedRoom(null);
                        }}
                        className="h-11 bg-amber-800 hover:bg-amber-900 text-stone-50 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-1.5"
                      >
                        Pilih Aesthetic Kit
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
