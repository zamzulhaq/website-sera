import { useState, useEffect } from "react";
import { ROOMS, ACCESSORIES_PRICING } from "../data";
import { Calculator, Check, ArrowRight, ShieldAlert, Sparkles, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

interface CostCalculatorProps {
  selectedRoomId: string;
  selectedKitType: "kosongan" | "aesthetic";
  onSendEstimationToBooking: (roomId: string, kitType: "kosongan" | "aesthetic", addonIds: string[]) => void;
}

export default function CostCalculator({ selectedRoomId, selectedKitType, onSendEstimationToBooking }: CostCalculatorProps) {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || ROOMS[0].id);
  const [kitType, setKitType] = useState<"kosongan" | "aesthetic">(selectedKitType || "aesthetic");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [securityDeposit, setSecurityDeposit] = useState<number>(300000); // refundable deposit

  // Sync state if prop changes
  useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
    }
  }, [selectedRoomId]);

  useEffect(() => {
    if (selectedKitType) {
      setKitType(selectedKitType);
    }
  }, [selectedKitType]);

  const activeRoom = ROOMS.find(r => r.id === roomId) || ROOMS[0];
  const basePrice = kitType === "aesthetic" ? activeRoom.basePriceAesthetic : activeRoom.basePriceKosongan;

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const calculateAddonsTotal = () => {
    return selectedAddons.reduce((acc, addonId) => {
      const addon = ACCESSORIES_PRICING.find(a => a.id === addonId);
      return acc + (addon ? addon.price : 0);
    }, 0);
  };

  const grandTotal = basePrice + calculateAddonsTotal();

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="kalkulator-biaya" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-mono font-bold tracking-widest text-amber-850 uppercase">SIMULASI ANGGARAN</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Kalkulator Biaya Singkat Kos
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Estimasi total investasi hunian bulananmu secara transparan. Sesuaikan tipe hunian dan tambahkan add-ons sesuai kebutuhan gayamu.
          </p>
        </div>

        {/* Calculator Main Panel */}
        <div className="bg-stone-50 rounded-3xl border border-stone-300 shadow-xl overflow-hidden max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Inputs Section */}
          <div className="md:col-span-7 p-6 sm:p-10 space-y-6 text-left">
            <span className="text-xs font-mono text-stone-400 block uppercase font-bold tracking-wider">Konfigurasi Hunian</span>
            
            {/* Step 1: Select Room Type */}
            <div className="space-y-2">
              <label htmlFor="calculator-room-select" className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">1. Pilih Tipe Kamar</label>
              <select
                id="calculator-room-select"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full bg-stone-100 border border-stone-300 rounded-xl px-4 py-3 text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
              >
                {ROOMS.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} (Ukuran {room.size})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Interior Style */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">2. Model Penataan Interior</span>
              <div className="grid grid-cols-2 gap-3" id="calc-style-selector">
                <button
                  onClick={() => setKitType("kosongan")}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between h-24 transition ${
                    kitType === "kosongan"
                      ? "bg-stone-900 border-stone-900 text-stone-50 shadow-md"
                      : "bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">Kamar Kosongan</span>
                  <span className="text-[11px] opacity-80 block leading-tight">Rp {formatRupiah(activeRoom.basePriceKosongan)} /bln</span>
                </button>
                <button
                  onClick={() => setKitType("aesthetic")}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between h-24 transition ${
                    kitType === "aesthetic"
                      ? "bg-amber-800 border-amber-900 text-stone-50 shadow-md"
                      : "bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>Aesthetic Kit</span>
                    <Sparkles size={11} className="text-amber-300" />
                  </span>
                  <span className="text-[11px] opacity-80 block leading-tight">Rp {formatRupiah(activeRoom.basePriceAesthetic)} /bln</span>
                </button>
              </div>
            </div>

            {/* Step 3: Checkbox Add-ons (Fitur Kreatif & Interaktif) */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">3. Opsi Tambahan (Fasilitas Ekstra Premium)</span>
              <div className="space-y-2" id="calc-addons-checklist">
                {ACCESSORIES_PRICING.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer select-none transition ${
                        isChecked
                          ? "bg-amber-800/10 border-amber-800/30"
                          : "bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200/50"
                      }`}
                    >
                      {/* Checkbox Box decoration */}
                      <div className={`w-5 h-5 rounded border flex items-center justify-center mt-0.5 transition ${
                        isChecked ? "bg-amber-800 border-amber-800 text-stone-50" : "bg-stone-50 border-stone-300"
                      }`}>
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>

                      {/* Detail list item */}
                      <div className="flex-1 text-left leading-tight">
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-xs font-bold text-stone-900">{addon.name}</span>
                          <span className="text-xs font-mono font-semibold text-amber-950 shrink-0">+{formatRupiah(addon.price)}</span>
                        </div>
                        <p className="text-[10px] text-stone-500 mt-0.5">{addon.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Invoice Statement Side */}
          <div className="md:col-span-5 bg-stone-900 text-stone-100 p-6 sm:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-800">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-stone-850">
                <div>
                  <span className="text-[10px] text-stone-400 font-mono tracking-widest block uppercase">Ringkasan Invoice</span>
                  <span className="font-serif font-bold text-sm">Simulasi Anggaran</span>
                </div>
                <Calculator className="text-amber-400" size={20} />
              </div>

              {/* Bill Details Rows */}
              <div className="space-y-4 pt-6 text-xs text-left">
                {/* Room row */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-semibold block">{activeRoom.name}</span>
                    <span className="text-[10px] text-stone-400 uppercase font-mono">Tipe interior: {kitType}</span>
                  </div>
                  <span className="font-mono font-bold text-stone-300">{formatRupiah(basePrice)}</span>
                </div>

                {/* Selected addons map items row */}
                {selectedAddons.length > 0 && (
                  <div className="space-y-2.5 pt-2 border-t border-stone-800 pb-2">
                    <span className="text-[10px] text-stone-400 uppercase font-mono tracking-wider block">Add-ons terpilih:</span>
                    {selectedAddons.map((addonId) => {
                      const addonItem = ACCESSORIES_PRICING.find(a => a.id === addonId)!;
                      return (
                        <div key={addonId} className="flex justify-between items-center text-stone-400">
                          <span>• {addonItem.name.split("(")[0]}</span>
                          <span className="font-mono">{formatRupiah(addonItem.price)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Refundable Deposit alert room */}
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 mt-2 space-y-1">
                  <div className="flex justify-between font-mono font-semibold text-stone-400">
                    <span>Deposit Jaminan Mandiri (Ref)</span>
                    <span>{formatRupiah(securityDeposit)}</span>
                  </div>
                  <p className="text-[9px] text-stone-500 leading-normal">
                    *Dibayarkan sekali saja di awal sewa. Dikembalikan 100% penuh saat serah-terima kunci selesai masa sewa jika tidak ada kerusakan.
                  </p>
                </div>
              </div>
            </div>

            {/* Total Budget Price Calculations block */}
            <div className="pt-6 border-t border-stone-800 space-y-4 mt-8">
              <div className="flex justify-between items-end text-left">
                <div>
                  <span className="text-[10px] text-amber-405 font-mono uppercase tracking-wider block">Total Sewa Bulanan</span>
                  <span className="text-xs text-stone-500 font-mono">(Belum termasuk deposit)</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif font-bold text-amber-400 block tracking-tight">
                    {formatRupiah(grandTotal)}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">/ bulan</span>
                </div>
              </div>

              {/* Action Button to copy/use inside Booking form */}
              <button
                onClick={() => onSendEstimationToBooking(roomId, kitType, selectedAddons)}
                className="w-full h-11 bg-amber-600 hover:bg-amber-500 text-stone-50 rounded-xl text-xs font-bold font-mono tracking-wide transition flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20"
                id="btn-apply-calculator-estimation"
              >
                <span>GUNAKAN ESTIMASI UNTUK BOOKING</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
