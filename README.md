# 🏠 Website Sera — Website Kos-Kosan

Website profil modern untuk **Kos Sera**, dibangun untuk memudahkan calon penghuni menemukan informasi kamar, fasilitas, dan cara menghubungi pemilik kos secara langsung.

---

## ✨ Fitur

- 📋 Informasi lengkap kamar dan fasilitas kos
- 🤖 Asisten AI berbasis Gemini untuk menjawab pertanyaan calon penghuni
- 📱 Tampilan responsif — nyaman diakses dari HP maupun desktop
- 💬 Tombol kontak langsung ke pemilik kos
- ⚡ Performa cepat dengan Vite

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| React 19 + TypeScript | UI & logika aplikasi |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| Google Gemini AI | Asisten AI untuk tamu |
| Express.js | Backend server |
| Motion | Animasi |

---

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js (v18 atau lebih baru)
- API Key dari [Google AI Studio](https://aistudio.google.com/)

### Langkah-langkah

1. **Clone repository ini**
   ```bash
   git clone https://github.com/zamzulhaq/website-sera.git
   cd website-sera
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Buat file `.env.local`** dan tambahkan API key Gemini
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
   > Lihat `.env.example` untuk referensi variabel yang dibutuhkan.

4. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`

---

## 📦 Scripts

| Script | Fungsi |
|---|---|
| `npm run dev` | Jalankan dev server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run lint` | Cek type error TypeScript |
| `npm run clean` | Hapus folder build (`dist`) |

---

## 📁 Struktur Proyek

```
website-sera/
├── src/           # Source code utama (komponen, halaman, dll)
├── index.html     # Entry point HTML
├── .env.example   # Contoh variabel environment
├── vite.config.ts # Konfigurasi Vite
├── tsconfig.json  # Konfigurasi TypeScript
└── package.json
```

---

## 📄 Lisensi

Copyright © 2025 **zamzulhaq** — [Zamify](https://github.com/zamzulhaq)

Proyek ini dibuat khusus untuk kebutuhan **Kos Sera**. Seluruh hak cipta dimiliki oleh **zamzulhaq**. Dilarang menggunakan, menyalin, atau mendistribusikan tanpa izin tertulis dari pemilik.

---

> Dibuat dengan ❤️ oleh [@zamzulhaq](https://github.com/zamzulhaq)
