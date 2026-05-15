export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Web Development Fundamentals",
    issuer: "Dicoding Indonesia",
    date: "2024-06",
    category: "Web Development",
    image: "/images/certificates/cert-webdev.jpg",
    credentialUrl: "https://dicoding.com",
  },
  {
    id: "cert-2",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2024-03",
    category: "Programming",
    image: "/images/certificates/cert-js.jpg",
    credentialUrl: "https://dicoding.com",
  },
  {
    id: "cert-3",
    title: "UI/UX Design Workshop",
    issuer: "Kementerian Kominfo",
    date: "2023-11",
    category: "UI/UX",
    image: "/images/certificates/cert-uiux.jpg",
  },
  {
    id: "cert-4",
    title: "Seminar Nasional Teknologi Informasi",
    issuer: "Universitas Islam Riau",
    date: "2023-09",
    category: "Seminar",
    image: "/images/certificates/cert-seminar.jpg",
  },
  {
    id: "cert-5",
    title: "Laravel Bootcamp 2023",
    issuer: "BuildWith Angga",
    date: "2023-07",
    category: "Bootcamp",
    image: "/images/certificates/cert-laravel.jpg",
    credentialUrl: "https://buildwithangga.com",
  },
  {
    id: "cert-6",
    title: "Next.js & React Modern Development",
    issuer: "Udemy",
    date: "2024-09",
    category: "Web Development",
    image: "/images/certificates/cert-nextjs.jpg",
    credentialUrl: "https://udemy.com",
  },
];

export const certificateCategories = [
  "Semua",
  "Web Development",
  "Programming",
  "UI/UX",
  "Seminar",
  "Bootcamp",
  "Workshop",
];

// ============ TESTIMONIALS ============
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Budi Santoso",
    role: "Kepala Dinas",
    company: "Dinas PUPR Kab. Siak",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    comment:
      "Andre mengerjakan website instansi kami dengan sangat profesional. Hasilnya modern, cepat, dan sesuai kebutuhan pemerintah. Sangat direkomendasikan!",
  },
  {
    id: "t2",
    name: "Siti Rahayu",
    role: "Owner",
    company: "Afdal Gorden",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
    comment:
      "Sistem penjualan yang dibuat benar-benar membantu bisnis saya. Sekarang laporan keuangan jadi mudah dan stok terkontrol. Terima kasih Andre!",
  },
  {
    id: "t3",
    name: "Dr. Hendra Wijaya",
    role: "Kepala Puskesmas",
    company: "Puskesmas Siak Sri Indrapura",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
    comment:
      "Aplikasi HealthyMom&Baby sangat membantu tenaga kesehatan kami dalam memantau kesehatan ibu dan anak. Desainnya user-friendly!",
  },
  {
    id: "t4",
    name: "Rika Amelia",
    role: "Mahasiswi",
    company: "Universitas Islam Riau",
    avatar: "/images/avatars/avatar-4.jpg",
    rating: 5,
    comment:
      "Minta bantuan bikin website portfolio, hasilnya keren banget! Animasinya smooth, tampilannya premium. Andre orangnya responsif dan profesional.",
  },
];

// ============ BLOG POSTS ============
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  thumbnail: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "membangun-sistem-informasi-php-native",
    title: "Membangun Sistem Informasi dengan PHP Native & MySQL",
    excerpt:
      "Panduan lengkap membangun sistem informasi profesional tanpa framework menggunakan PHP Native, PDO, dan MySQL.",
    content: "",
    category: "Tutorial",
    tags: ["PHP", "MySQL", "Backend", "Web Dev"],
    thumbnail: "/images/blog/blog-php.jpg",
    author: "Andre",
    publishedAt: "2024-12-01",
    readTime: 8,
  },
  {
    id: "b2",
    slug: "nextjs-app-router-typescript-guide",
    title: "Next.js 15 App Router + TypeScript: Panduan Lengkap 2025",
    excerpt:
      "Belajar Next.js 15 dengan App Router dan TypeScript dari awal hingga deploy ke Vercel. Best practices modern web development.",
    content: "",
    category: "Tutorial",
    tags: ["Next.js", "TypeScript", "React", "Vercel"],
    thumbnail: "/images/blog/blog-nextjs.jpg",
    author: "Andre",
    publishedAt: "2025-01-15",
    readTime: 12,
  },
  {
    id: "b3",
    slug: "tailwind-css-tips-tricks",
    title: "Tailwind CSS Tips & Tricks untuk Developer Modern",
    excerpt:
      "Koleksi tips dan trik Tailwind CSS yang sering digunakan untuk membuat UI yang lebih cepat dan konsisten.",
    content: "",
    category: "Tips",
    tags: ["Tailwind CSS", "CSS", "Frontend", "Design"],
    thumbnail: "/images/blog/blog-tailwind.jpg",
    author: "Andre",
    publishedAt: "2025-02-10",
    readTime: 6,
  },
];

// ============ EXPERIENCE / JOURNEY ============
export interface Experience {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: "e1",
    year: "2021",
    title: "Fullstack Developer & Digital Services",
    description:
      "Berkembang menjadi fullstack developer profesional. Mengerjakan proyek instansi pemerintah, startup, dan layanan digital premium untuk klien berbagai industri.",
    icon: "Code2",
    color: "cyan",
  },
  {
    id: "e2",
    year: "2025",
    title: "Sarjana  Teknik Informatika",
    description:
      "Dalam rangka menyelesaikan perkuliahan saya membuat sebuah sistem berbasis web yang dapat memanajemen Penjualan Di Afdal Gorden Pekanbaru.",
    icon: "Server",
    color: "violet",
  },
  {
    id: "e3",
    year: "2024",
    title: "Mahasiswa Magang Di Kantor Gubernur Riau ",
    description:
      "Menyelesaikan program magang komprehensif 45 hari di bagian Biro Perekonomian Riau Yang mencakup dasar-dasar MS Word & MS Excel, Pada kesempatan ini saya juga ditugaskan Meredesain Website Biro Perekonomian Riau.",
    icon: "GraduationCap",
    color: "emerald",
  },
  {
    id: "e4",
    year: "2026",
    title: "Freelance web developer",
    description:
      "Saya siap membantu mulai dari website company profile, sistem informasi, landing page, hingga dashboard admin sesuai kebutuhan bisnis atau project Anda",
    icon: "Rocket",
    color: "orange",
  },
  {
    id: "e5",
    year: "2026",
    title: "Freelance Project Akhir",
    description:
      "Membantu sebagai mentor & konsultasi pengerjaan sistem mulai dari analisis, database, coding, hingga revisi.",
    icon: "Star",
    color: "pink",
  },
];
