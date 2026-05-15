export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  startPrice: number;
  popular?: boolean;
  color: string;
}

export const services: Service[] = [
  {
    id: "website-company",
    icon: "Globe",
    title: "Website Company Profile",
    description:
      "Website company profile modern, SEO-friendly, dan responsive untuk meningkatkan kredibilitas bisnis Anda.",
    features: [
      "Design modern & responsive",
      "SEO optimization",
      "Konten hingga 10 halaman",
      "Form kontak & WhatsApp",
      "Google Maps terintegrasi",
      "1 bulan free maintenance",
    ],
    startPrice: 500000,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "sistem-informasi",
    icon: "Database",
    title: "Sistem Informasi",
    description:
      "Sistem informasi custom sesuai kebutuhan instansi, perusahaan, atau usaha dengan fitur lengkap dan CRUD.",
    features: [
      "Analisis kebutuhan sistem",
      "Dashboard admin modern",
      "CRUD data lengkap",
      "Export PDF & Excel",
      "Multi-user & role management",
      "Dokumentasi sistem",
    ],
    startPrice: 1500000,
    popular: true,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "landing-page",
    icon: "Layout",
    title: "Landing Page",
    description:
      "Landing page high-converting untuk produk, layanan, atau event dengan animasi modern dan CTA yang kuat.",
    features: [
      "1 halaman full-featured",
      "Animasi Framer Motion",
      "Konversi optimized",
      "WhatsApp integration",
      "Loading super cepat",
      "Mobile-first design",
    ],
    startPrice: 300000,
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id: "portfolio-website",
    icon: "User",
    title: "Portfolio Website",
    description:
      "Portfolio website premium untuk developer, desainer, fotografer, atau profesional lainnya.",
    features: [
      "Dark mode modern",
      "Animasi premium",
      "Showcase project & skill",
      "Form kontak terintegrasi",
      "Blog section",
      "Deploy ke Vercel",
    ],
    startPrice: 400000,
    color: "from-orange-500/20 to-rose-500/20",
  },
  {
    id: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Desain antarmuka modern dan user-friendly menggunakan Figma dengan prototype interaktif.",
    features: [
      "Wireframe & mockup",
      "Design system",
      "Prototype interaktif",
      "Responsive design",
      "Handoff ke developer",
      "Revisi hingga puas",
    ],
    startPrice: 350000,
    color: "from-pink-500/20 to-violet-500/20",
  },
  {
    id: "dashboard-admin",
    icon: "BarChart3",
    title: "Dashboard Admin",
    description:
      "Dashboard admin modern dengan analitik data, tabel interaktif, dan manajemen konten yang mudah digunakan.",
    features: [
      "Chart & grafik interaktif",
      "Tabel data dengan filter",
      "CRUD management",
      "Role-based access",
      "Dark mode",
      "Responsive mobile",
    ],
    startPrice: 800000,
    color: "from-blue-500/20 to-indigo-500/20",
  },
];
