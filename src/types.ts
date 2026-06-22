export interface Room {
  id: string;
  name: string;
  size: string; // e.g., "3x4 m"
  basePriceKosongan: number; // monthly price for empty room
  basePriceAesthetic: number; // monthly price with aesthetic kit
  description: string;
  images: string[];
  features: string[];
  specifications: {
    bathroom: string; // "Dalam" or "Luar"
    furnishing: string[];
    electricity: string; // "Token mandiri" or "Termasuk"
    maxOccupants: number;
  };
}

export interface GuideSpot {
  id: string;
  name: string;
  category: "kuliner" | "nugas" | "laundry";
  distance: string; // e.g., "3 menit (200m)"
  description: string;
  rating: number;
  coordinates: { x: number; y: number }; // relative percentage on mockup map
}

export interface Testimonial {
  id: string;
  name: string;
  role: "Mahasiswa" | "Alumni" | "Pekerja";
  avatar: string;
  roomType: string;
  rating: number;
  content: string;
}

export interface BookingData {
  fullName: string;
  status: "Mahasiswa" | "Pekerja";
  institution: string;
  whatsappNumber: string;
  moveInDate: string;
  roomId: string;
  packageType: "kosongan" | "aesthetic";
  notes?: string;
}
