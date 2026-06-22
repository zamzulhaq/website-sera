import { useState, useEffect, FormEvent } from "react";
import { ROOMS, ACCESSORIES_PRICING } from "../data";
import { BookingData } from "../types";
import { Calendar, Phone, CheckCircle2, User, Building, Heart, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BookingFormProps {
  prefilledRoomId: string;
  prefilledKitType: "kosongan" | "aesthetic";
  prefilledAddons: string[];
}

export default function BookingForm({ prefilledRoomId, prefilledKitType, prefilledAddons }: BookingFormProps) {
  const [formData, setFormData] = useState<Partial<BookingData>>({
    fullName: "",
    status: "Mahasiswa",
    institution: "",
    whatsappNumber: "",
    moveInDate: "",
    roomId: ROOMS[0].id,
    packageType: "aesthetic",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  // Sync with calculator feedback trigger values
  useEffect(() => {
    if (prefilledRoomId) {
      setFormData(prev => ({ ...prev, roomId: prefilledRoomId }));
    }
  }, [prefilledRoomId]);

  useEffect(() => {
    if (prefilledKitType) {
      setFormData(prev => ({ ...prev, packageType: prefilledKitType }));
    }
  }, [prefilledKitType]);

  const buildWhatsAppMessage = (data: Partial<BookingData>): string => {
    const room = ROOMS.find(r => r.id === data.roomId) || ROOMS[0];
    const packageLabel = data.packageType === "aesthetic"
      ? "Aesthetic Kit (Pinterest-Ready)"
      : "Kamar Kosongan (Penataan Meja Luwes)";

    const addonNames = prefilledAddons.map(id => {
      const addon = ACCESSORIES_PRICING.find(a => a.id === id);
      return addon ? addon.name : id;
    });

    const lines: string[] = [
      "*FORMULIR BOOKING DIGITAL - KOS SARALUYU*",
      "",
      "Halo Pengelola Kos Saraluyu, saya ingin melakukan booking kamar dengan detail berikut:",
      "",
      "*Data Diri:*",
      `• Nama Lengkap: ${data.fullName || "-"}`,
      `• Status: ${data.status || "-"}`,
      `• Universitas / Instansi: ${data.institution || "-"}`,
      `• Nomor WhatsApp: ${data.whatsappNumber || "-"}`,
      "",
      "*Detail Kamar & Paket:*",
      `• Pilihan Tipe Kamar: ${room.name}`,
      `• Model Penataan: ${packageLabel}`,
      `• Rencana Tanggal Masuk: ${data.moveInDate || "-"}`,
    ];

    if (addonNames.length > 0) {
      lines.push("");
      lines.push("*Opsi Tambahan (Add-ons):*");
      addonNames.forEach(name => lines.push(`• ${name}`));
    }

    if (data.notes) {
      lines.push("");
      lines.push("*Catatan Tambahan:*");
      lines.push(`"${data.notes}"`);
    }

    lines.push("");
    lines.push("_zamify_");

    return lines.join("\n");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = buildWhatsAppMessage(formData);
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=6287874817307&text=${encodedMessage}`;
    setLastWhatsAppUrl(waUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      window.open(waUrl, "_blank");

      setFormData({
        fullName: "",
        status: "Mahasiswa",
        institution: "",
        whatsappNumber: "",
        moveInDate: "",
        roomId: ROOMS[0].id,
        packageType: "aesthetic",
        notes: ""
      });
    }, 800);
  };

  const activeRoomDetail = ROOMS.find(r => r.id === formData.roomId) || ROOMS[0];

  return (
    <section id="hubungi" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left info column: Branding, integration information, address */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-850 uppercase">BOOKING SEBELUM HABIS</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-none">
                Formulir Booking Digital
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Unit mezzanine kami sangat terbatas! Amankan slot kamar saksama sekarang demi mendukung kemudahan belajarmu. Formulir ini terhubung langsung dengan tim pengelola Kos Saraluyu.
              </p>
            </div>

            {/* Petunjuk Pengisian / Alur Booking */}
            <div className="bg-stone-100 p-5 rounded-2xl border border-stone-200/80 space-y-3">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block font-bold">Alur Booking Digital</span>
              <div className="space-y-2.5 text-xs text-stone-700">
                <p className="flex gap-2">
                  <span className="font-bold text-[#5a5a40]">1.</span> 
                  <span><strong>Formulir Online:</strong> Isi detail diri, pilihan tipe kamar, dan estimasi tanggal masuk Anda melalui form di samping.</span>
                </p>
                <p className="flex gap-2">
                  <span className="font-bold text-[#5a5a40]">2.</span> 
                  <span><strong>Verifikasi Admin:</strong> Tim admin kami akan meninjau ketersediaan slot kamar kosong pilihan Anda.</span>
                </p>
                <p className="flex gap-2">
                  <span className="font-bold text-[#5a5a40]">3.</span> 
                  <span><strong>Survey & DP:</strong> Lakukan kunjungan fisik langsung ke lokasi jika diperlukan, lalu amankan sewa dengan tanda jadi resmi.</span>
                </p>
              </div>
            </div>

            {/* Safety notice badge */}
            <div className="bg-amber-100/50 rounded-2xl p-4 border border-amber-800/10 flex items-start gap-3">
              <CheckCircle2 className="text-amber-850 shrink-0 mt-0.5" size={16} />
              <div className="text-xs text-amber-951">
                <span className="font-bold block">Bebas Biaya Administrasi</span>
                <p className="mt-0.5 opacity-90">Kami tidak memungut biaya agen/perantara apapun. Semua transaksi langsung dikelola oleh pemilik resmi Kos SARALUYU.</p>
              </div>
            </div>
          </div>

          {/* Right Forms column */}
          <div className="lg:col-span-7 bg-stone-150 rounded-3xl p-6 sm:p-10 border border-stone-250 shadow-xl relative overflow-hidden" id="booking-form-box">
            
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-800/10 text-amber-850 flex items-center justify-center mx-auto border-2 border-amber-800/20">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Pemesanan Terkirim!</h3>
                    <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                      Terima kasih telah mendaftar. Formulir booking digital Anda akan dikirim langsung ke WhatsApp pengelola Kos Saraluyu untuk segera diproses.
                    </p>
                  </div>
                  
                  {/* WhatsApp confirmation link generator */}
                  <div className="pt-4 max-w-xs mx-auto">
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-full inline-flex items-center justify-center bg-stone-900 hover:bg-stone-850 text-stone-50 text-xs font-semibold rounded-xl transition gap-2 font-mono tracking-wider shadow-md"
                    >
                      <Phone size={14} className="text-amber-400" />
                      <span>KONFIRMASI VIA WHATSAPP</span>
                    </a>
                    
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-stone-500 hover:text-stone-900 text-xs mt-4 underline font-medium block mx-auto focus:outline-none"
                    >
                      Kirim Pesanan Baru
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="pb-3 border-b border-stone-200">
                    <h3 className="font-serif text-lg font-bold text-stone-900">Isi Formulir Booking</h3>
                    <p className="text-[11px] text-stone-500">Silakan lengkapi data diri Anda secara jujur</p>
                  </div>

                  {/* Input Rows: Name and status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="fullName" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">Nama Lengkap</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 text-stone-400" size={15} />
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="Ahmad Rayhan"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-stone-100 border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
                        />
                      </div>
                    </div>

                    {/* Status selection */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="status" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">Status</label>
                      <select
                        id="status"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                        className="w-full bg-stone-100 border border-stone-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
                      >
                        <option value="Mahasiswa">Mahasiswa</option>
                        <option value="Pekerja">Pekerja / Karyawan</option>
                      </select>
                    </div>
                  </div>

                  {/* Input Rows: Institution & Whatsapp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Institution */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="institution" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">Universitas / Instansi</label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-3.5 text-stone-400" size={15} />
                        <input
                          id="institution"
                          type="text"
                          required
                          placeholder="Universitas Indonesia"
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                          className="w-full bg-stone-100 border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="whatsappNumber" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">Nomor WhatsApp</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 text-stone-400" size={15} />
                        <input
                          id="whatsappNumber"
                          type="tel"
                          required
                          placeholder="081234567890"
                          value={formData.whatsappNumber}
                          onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                          className="w-full bg-stone-100 border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Input Rows: Planned entry date & room choice */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Entry Date */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="moveInDate" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">Rencana Tanggal Masuk</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3.5 text-stone-400" size={15} />
                        <input
                          id="moveInDate"
                          type="date"
                          required
                          value={formData.moveInDate}
                          onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                          className="w-full bg-stone-100 border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
                        />
                      </div>
                    </div>

                    {/* Room Choice select */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="roomId" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">Pilihan Tipe Kamar</label>
                      <select
                        id="roomId"
                        value={formData.roomId}
                        onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
                        className="w-full bg-stone-100 border border-stone-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
                      >
                        {ROOMS.map((room) => (
                          <option key={room.id} value={room.id}>
                            {room.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interior Package selection */}
                  <div className="grid grid-cols-2 gap-3" id="form-package-selection">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, packageType: "kosongan" }))}
                      className={`p-3 rounded-2xl border text-center flex flex-col justify-center h-20 transition ${
                        formData.packageType === "kosongan"
                          ? "bg-stone-900 border-stone-900 text-stone-50"
                          : "bg-stone-100 border-stone-250 text-stone-600 hover:bg-stone-200/50"
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider">Kamar Kosongan</span>
                      <span className="text-[10px] opacity-80 mt-0.5">Penataan Meja Luwes</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, packageType: "aesthetic" }))}
                      className={`p-3 rounded-2xl border text-center flex flex-col justify-center h-20 transition gap-0.5 ${
                        formData.packageType === "aesthetic"
                          ? "bg-amber-800 border-amber-900 text-stone-50"
                          : "bg-stone-100 border-stone-250 text-stone-605 hover:bg-stone-200/50"
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                        <span>Aesthetic Kit</span>
                        <Sparkles size={11} className="text-amber-300" />
                      </span>
                      <span className="text-[10px] opacity-85">Kamar Pinterest-Ready</span>
                    </button>
                  </div>

                  {/* Notes / Special Requests text field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="notes" className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">Catatan Tambahan (Opsional)</label>
                    <textarea
                      id="notes"
                      rows={2}
                      placeholder="Contoh: 'Saya ingin pasang AC ekstra' atau 'Ingin letak kamar di lantai 2'"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-stone-100 border border-stone-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:border-amber-805"
                    />
                  </div>

                  {/* Form Submission Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-amber-805 hover:bg-amber-900 disabled:bg-stone-350 text-stone-50 rounded-xl text-xs sm:text-sm font-bold font-mono tracking-widest transition flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20 uppercase"
                    id="booking-form-submit-btn"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-stone-50 border-t-transparent animate-spin" />
                        <span>MENGIRIM FORMULIR...</span>
                      </div>
                    ) : (
                      <span>SUBMIT BOOKING KAMAR DIGITAL</span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
