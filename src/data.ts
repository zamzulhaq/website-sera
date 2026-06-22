import { Room, GuideSpot, Testimonial } from "./types";

export const ROOMS: Room[] = [
  {
    id: "svara",
    name: "Tipe Svara (Cozy Single)",
    size: "3 x 3.5 m",
    basePriceKosongan: 1200000,
    basePriceAesthetic: 1650000,
    description: "Kamar tipe single yang ekonomis namun sangat fungsional. Sangat cocok untuk mahasiswa yang menginginkan ketenangan belajar dan privasi ekstra.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Kamar Mandi Dalam",
      "AC 1/2 PK Hemat Energi",
      "Ventilasi Udara Langsung",
      "Wifi High-Speed Dedicated",
      "Sistem Listrik Prabayar Pin"
    ],
    specifications: {
      bathroom: "Dalam (Shower, Kloset Duduk, Jet Washer)",
      furnishing: ["Springbed 120x200", "Lemari 2 Pintu Cermin", "Meja Belajar Minimalis", "Kursi Ergonomis"],
      electricity: "Token mandiri 900W per kamar",
      maxOccupants: 1
    }
  },
  {
    id: "nalendra",
    name: "Tipe Nalendra (Studi Loft style)",
    size: "3 x 4.5 m",
    basePriceKosongan: 1700000,
    basePriceAesthetic: 2150000,
    description: "Kamar dengan langit-langit tinggi dan mezzanine kecil. Memberikan ilusi ruangan yang sangat luas, sirkulasi udara yang segar, dan pembagian area kerja & istirahat yang jelas.",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Kamar Mandi Dalam + Water Heater",
      "AC 3/4 PK JetCool",
      "Mezzanine Area Tidur",
      "Smart TV 32 inch",
      "Large Window View Pepohonan"
    ],
    specifications: {
      bathroom: "Dalam (Water Heater, Shower, Kloset Duduk, Wastafel)",
      furnishing: ["Springbed Queen Size 160x200", "Walk-in Wardrobe Terpadu", "Premium Workstation Desk", "Kursi Kerja Busa"],
      electricity: "Token mandiri 1300W per kamar",
      maxOccupants: 2
    }
  },
  {
    id: "abimata",
    name: "Tipe Abimata (Suite Premium)",
    size: "4 x 5 m",
    basePriceKosongan: 2300000,
    basePriceAesthetic: 2850000,
    description: "Kamar tipe termewah di Kos SARALUYU. Berukuran super luas layaknya studio apartemen dengan lemari es mini, sink cuci piring pribadi, dan area duduk santai (mini lounge).",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Kamar Mandi Dalam + Water Heater Premium",
      "Kitchenette Mini & Sink Cuci Piring",
      "Kulkas Dua Pintu Low-Watt",
      "Balkon Pribadi untuk Jemuran/Bersantai",
      "Sofa Bed Tambahan"
    ],
    specifications: {
      bathroom: "Dalam Premium (Water Heater, Shower, Kloset Duduk, Mirror Light, Wasthafel)",
      furnishing: ["Springbed King Size 180x200", "Custom Side Kitchen Closet", "Meja Kerja Custom Minimalis", "Sofa Bed Cozy", "Rak Sepatu Estetik"],
      electricity: "Token mandiri 1300W per kamar",
      maxOccupants: 2
    }
  }
];

export const SHADA_FACILITIES = [
  { icon: "Wifi", name: "Wifi Bisnis Ultra Cepat", desc: "Koneksi fiber-optic 150 Mbps dengan backup router otomatis jika terjadi mati listrik." },
  { icon: "CookingPot", name: "Dapur Bersama Modern", desc: "Dilengkapi kompor induksi, kulkas besar, microwave, toaster, cookware lengkap, dan dispenser air minum." },
  { icon: "Shield", name: "Sistem Keamanan 24/7", desc: "Akses gate utama pakai Card/Fingerprint, CCTV rekam di 12 titik sudut kos, dan penjaga malam standby." },
  { icon: "WashingMachine", name: "Area Laundry Mandiri", desc: "Dua unit mesin cuci bukaan depan gratis pakai + area jemuran aman dari air hujan." },
  { icon: "Bike", name: "Parkir Motor & Mobil Luas", desc: "Sistem parkir teduh berkanopi dengan sensor gerak CCTV aktif untuk kenyamanan kendaraanmu." },
  { icon: "Sparkles", name: "Fasilitas Kebersihan Mingguan", desc: "Petugas kebersihan membersihkan koridor luar, area komunal, dapur, dan pembuangan sampah setiap hari." },
];

export const ACCESSORIES_PRICING = [
  { id: "vip_internet", name: "Dedicated Router VIP (Internet +50Mbps)", price: 90000, description: "IP dedicated & Router eksklusif ramah gaming tanpa guncangan latency." },
  { id: "laundry_service", name: "Laundry Drop-off (Pakaian Disetrika)", price: 150000, description: "Kuota laundry hingga 20 kg per bulan, diambil dan diantar langsung ke kamar." },
  { id: "cleaning_service", name: "Deep Cleaning Kamar Mingguan", price: 80000, description: "Pembersihan total kamar, menyapu, mengepel, kamar mandi, dan ganti sprei gratis." },
  { id: "catering_diet", name: "Catering Sehat 'Saraluyu Diet' (1x makan/hari)", price: 450000, description: "Catering sehat dikirim hangat untuk makan malam instan sehat anak kos." },
  { id: "car_parking", name: "Kavling Parkir Mobil Berbayar", price: 200000, description: "Kavling khusus parkir mobil beratap khusus unit penghuni tipe Abimata/Nalendra." },
];

export const GUIDE_SPOTS: GuideSpot[] = [
  {
    id: "spot-1",
    name: "Universitas Terdekat (Bandung)",
    category: "nugas",
    distance: "4 menit (1.2 km)",
    description: "Akses mudah ke berbagai kampus ternama dengan kendaraan pribadi, ojek online, maupun jalan kaki.",
    rating: 4.8,
    coordinates: { x: 30, y: 15 }
  },
  {
    id: "spot-2",
    name: "Cafe Kopi Kancil & Nugas",
    category: "nugas",
    distance: "2 menit (450 m)",
    description: "Espresso bar yang tenang, colokan listrik melimpah di setiap meja, buka 24 jam dengan WiFi berkecepatan tinggi.",
    rating: 4.7,
    coordinates: { x: 45, y: 28 }
  },
  {
    id: "spot-3",
    name: "Co-Working Room 'Ruang Tenang'",
    category: "nugas",
    distance: "3 menit (600 m)",
    description: "Tempat favorit diskusi kelompok dan nugas skripsi dengan bilik kedap suara dan free-flow kopi.",
    rating: 4.6,
    coordinates: { x: 55, y: 38 }
  },
  {
    id: "spot-4",
    name: "Kedai Batagor & Kuliner Bandung",
    category: "kuliner",
    distance: "1 menit (150 m)",
    description: "Kuliner lokal khas Bandung yang enak, murah meriah, dan porsi melimpah favorit anak kos Saraluyu.",
    rating: 4.9,
    coordinates: { x: 20, y: 55 }
  },
  {
    id: "spot-5",
    name: "Food Court Tenda Saraluyu",
    category: "kuliner",
    distance: "2 menit (300 m)",
    description: "Pusat jajanan malam, mulai dari martabak, ayam geprek super pedas, hingga dimsum kekinian.",
    rating: 4.5,
    coordinates: { x: 35, y: 48 }
  },
  {
    id: "spot-6",
    name: "Warteg Bahari Bandung",
    category: "kuliner",
    distance: "2 menit (250 m)",
    description: "Penyelamat kantong akhir bulan dengan puluhan menu rumahan bersih dan harganya bersahabat.",
    rating: 4.4,
    coordinates: { x: 50, y: 62 }
  },
  {
    id: "spot-7",
    name: "Express Clean 1-Hour Laundry",
    category: "laundry",
    distance: "1 menit (120 m)",
    description: "Laundry koin otomatis, cuci-kering kilat hanya dalam 1 jam menggunakan mesin pengering standar komersial.",
    rating: 4.7,
    coordinates: { x: 75, y: 45 }
  },
  {
    id: "spot-8",
    name: "Setrika Express Barokah",
    category: "laundry",
    distance: "2 menit (350 m)",
    description: "Jasa setrika kilat per kilo yang bisa dipanggil untuk mengambil baju kotor langsung ke gerbang depan kos.",
    rating: 4.5,
    coordinates: { x: 62, y: 70 }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ahmad Rayhan",
    role: "Mahasiswa",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
    roomType: "Tipe Nalendra (Studi Loft style)",
    rating: 5,
    content: "Udah setahun tinggal di Tipe Nalendra. Paling suka sama mezzanine-nya, kerasa tinggal di apartemen mikro. Layout Aesthetic Kit bener-bener kayak foto Pinterest. Wifi kenceng banget stabil buat nugas dan push rank ML pas malam."
  },
  {
    id: "testi-2",
    name: "Sarah Amanda",
    role: "Mahasiswa",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    roomType: "Tipe Abimata (Suite Premium)",
    rating: 5,
    content: "Fasilitas kulkas dua pintu dan sink cuci piring di tipe Abimata ngebantu banget pas mager keluar. Kosannya bersih karena disapu tiap hari. Suasananya tenang, sirkulasi udara bagus, dan paling penting penjaganya ramah & sigap."
  },
  {
    id: "testi-3",
    name: "Rian Hidayat",
    role: "Pekerja",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    roomType: "Tipe Svara (Cozy Single)",
    rating: 5,
    content: "Sangat recommended buat yang kerja remote kayak saya. Kamar Single-nya fungsional, mejanya pas buat laptop extra monitor. Lokasi deket banget sama minimarket dan stasiun kereta, bepergian jadi super efisien."
  }
];
