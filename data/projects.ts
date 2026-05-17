export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  gallery: string[];
  tech: string[];
  category: string;
  year: number;
  status: "completed" | "in-progress" | "maintenance";
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "sip-sapras",
    title: "SIP-SAPRAS",
    description:
      "Sistem Informasi Pengelolaan Sarana dan Prasarana Sekolah untuk 500+ sekolah di Kabupaten Siak.",
    longDescription:
      "SIP-SAPRAS adalah sistem informasi berbasis web yang dirancang untuk mengelola sarana dan prasarana sekolah di Kabupaten Siak. Sistem ini memudahkan proses pelaporan, verifikasi, dan pengelolaan data kerusakan fasilitas sekolah secara digital dan real-time.",
    thumbnail: "/images/projects/sipsapras-thumb.jpg",
    gallery: [
      "/images/projects/sipsapras-1.jpg",
      "/images/projects/sipsapras-2.jpg",
      "/images/projects/sipsapras-3.jpg",
    ],
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "PDO"],
    category: "Sistem Informasi",
    year: 2026,
    status: "completed",
    demoUrl: "https://demo.sipsapras.id",
    githubUrl: "https://github.com/andredev/sipsapras",
    features: [
      "Dashboard admin & operator",
      "Pelaporan kerusakan 4 langkah",
      "Workflow verifikasi 7 status",
      "Peta lokasi sekolah (Leaflet.js)",
      "Notifikasi real-time",
      "Export laporan PDF/Excel",
      "500+ sekolah terintegrasi",
    ],
  },
  {
    id: "healthymom-baby",
    title: "HealthyMom&Baby",
    description:
      "Sistem informasi kesehatan ibu dan anak untuk monitoring tumbuh kembang bayi dan kesehatan ibu hamil.",
    longDescription:
      "HealthyMom&Baby adalah platform digital kesehatan yang membantu tenaga kesehatan dan ibu dalam memantau perkembangan kesehatan ibu hamil dan bayi. Sistem ini terintegrasi dengan data posyandu dan puskesmas.",
    thumbnail: "/images/projects/healthymom-thumb.jpg",
    gallery: [
      "/images/projects/healthymom-1.jpg",
      "/images/projects/healthymom-2.jpg",
    ],
    tech: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS", "Chart.js"],
    category: "Kesehatan",
    year: 2024,
    status: "completed",
    demoUrl: "https://demo.healthymombaby.id",
    githubUrl: "https://github.com/andredev/healthymom",
    features: [
      "Monitoring tumbuh kembang bayi",
      "Jadwal imunisasi digital",
      "Rekam medis ibu hamil",
      "Grafik pertumbuhan interaktif",
      "Notifikasi jadwal posyandu",
      "Laporan kesehatan bulanan",
    ],
  },
  {
    id: "afdal-gorden",
    title: "Sistem Penjualan Afdal Gorden",
    description:
      "Aplikasi penjualan modern berbasis PHP Native dan MySQL untuk toko gorden dengan fitur kasir dan laporan.",
    longDescription:
      "Sistem penjualan komprehensif untuk toko Afdal Gorden yang mencakup manajemen produk, transaksi penjualan, manajemen stok, dan laporan keuangan. Dibangun dengan PHP Native tanpa framework untuk performa optimal.",
    thumbnail: "/images/projects/afdalgorden-thumb.jpg",
    gallery: [
      "/images/projects/afdalgorden-1.jpg",
      "/images/projects/afdalgorden-2.jpg",
    ],
    tech: ["PHP Native", "MySQL", "Bootstrap", "JavaScript", "FPDF"],
    category: "E-Commerce",
    year: 2025,
    status: "completed",
    githubUrl: "https://github.com/andredev/afdal-gorden",
    features: [
      "Manajemen produk & kategori",
      "Sistem kasir POS",
      "Manajemen stok real-time",
      "Laporan penjualan harian/bulanan",
      "Cetak struk & invoice PDF",
      "Multi-user dengan hak akses",
    ],
  },
  {
    id: "kopi-keliling",
    title: "Sistem Kelola Usaha Kopi Keliling",
    description:
      "Aplikasi modern berbasis UCD dan SUS untuk mengelola usaha kopi keliling dengan antarmuka yang user-friendly.",
    longDescription:
      "Sistem manajemen usaha kopi keliling yang dirancang menggunakan metodologi User Centered Design (UCD) dengan evaluasi System Usability Scale (SUS). Aplikasi ini membantu pengusaha kopi keliling mengelola pesanan, keuangan, dan rute distribusi.",
    thumbnail: "/images/projects/kopikeliling-thumb.jpg",
    gallery: [
      "/images/projects/kopikeliling-1.jpg",
      "/images/projects/kopikeliling-2.jpg",
    ],
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "Google Maps API"],
    category: "Bisnis",
    year: 2026,
    status: "completed",
    githubUrl: "https://github.com/andredev/kopi-keliling",
    features: [
      "Manajemen pesanan harian",
      "Pelacakan rute distribusi",
      "Laporan keuangan usaha",
      "Manajemen pelanggan",
      "Analitik penjualan",
      "Design UCD & evaluasi SUS",
    ],
  },
  {
    id: "website-instansi",
    title: "Website Profil Instansi",
    description:
      "Website pemerintahan modern untuk Dinas PUPR Kabupaten Siak dengan fitur GIS dan berita dinamis.",
    longDescription:
      "Website profil instansi pemerintah yang modern dan informatif untuk Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) Kabupaten Siak. Dilengkapi dengan fitur GIS untuk pemetaan infrastruktur dan sistem manajemen konten.",
    thumbnail: "/images/projects/websiteinstansi-thumb.jpg",
    gallery: [
      "/images/projects/websiteinstansi-1.jpg",
      "/images/projects/websiteinstansi-2.jpg",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet.js", "Supabase"],
    category: "Website",
    year: 2026,
    status: "completed",
    demoUrl: "https://pupr.siakkab.go.id",
    githubUrl: "https://github.com/andredev/website-instansi",
    features: [
      "GIS pemetaan infrastruktur",
      "Sistem berita & pengumuman",
      "Galeri kegiatan instansi",
      "Profil pejabat & struktur organisasi",
      "Layanan publik digital",
      "SEO optimized",
      "Responsive all device",
    ],
  },
  {
    id: "funfrozenfood",
    title: "Fun Frozen Food",
    description:
      "Website company profile dan katalog produk frozen food premium dengan tampilan modern dan menarik.",
    longDescription:
      "Fun Frozen Food adalah website company profile sekaligus katalog produk online untuk bisnis frozen food premium. Website ini menampilkan produk-produk frozen food berkualitas dengan desain yang menarik dan user-friendly untuk meningkatkan kepercayaan pelanggan.",
    thumbnail: "/images/projects/funfrozenfood-thumb.jpg",
    gallery: [],
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Website",
    year: 2025,
    status: "completed",
    demoUrl: "https://funfrozenfood.com",
    features: [
      "Katalog produk online",
      "Tampilan modern & responsive",
      "Halaman tentang kami",
      "Form kontak & WhatsApp",
      "SEO optimized",
      "Mobile-first design",
    ],
  },
  {
    id: "siak-gis",
    title: "Siak GIS",
    description:
      "Sistem Informasi Geografis Irigasi Rawa Kabupaten Siak untuk Dinas PU Tata Ruang dengan peta interaktif.",
    longDescription:
      "Siak GIS adalah sistem informasi geografis berbasis web untuk memetakan dan mengelola data irigasi rawa di Kabupaten Siak. Dibangun untuk Dinas PU Tata Ruang, sistem ini menyediakan peta interaktif, monitoring irigasi real-time, dan laporan analisis data spasial.",
    thumbnail: "/images/projects/siakgis-thumb.jpg",
    gallery: [],
    tech: ["PHP", "MySQL", "Leaflet.js", "GeoJSON", "Bootstrap"],
    category: "Sistem Informasi",
    year: 2025,
    status: "completed",
    features: [
      "Peta interaktif irigasi rawa",
      "Monitoring kondisi real-time",
      "Manajemen data spasial",
      "Laporan & analisis data",
      "Sistem login & autentikasi",
      "11 Daerah Irigasi terintegrasi",
    ],
  },
  {
    id: "wisata-bukittinggi",
    title: "Wisata Bukittinggi",
    description:
      "Platform wisata digital Kota Bukittinggi dengan fitur pencarian destinasi, pemesanan tiket online, dan pembayaran QRIS.",
    longDescription:
      "Wisata Bukittinggi adalah platform digital pariwisata yang memudahkan wisatawan menemukan dan memesan tiket destinasi wisata di Kota Bukittinggi, Sumatera Barat. Platform ini dilengkapi dengan pencarian destinasi, pemesanan tiket online, pembayaran QRIS, dan e-ticket digital.",
    thumbnail: "/images/projects/wisatabukittinggi-thumb.jpg",
    gallery: [],
    tech: ["Laravel", "MySQL", "Tailwind CSS", "QRIS API", "JavaScript"],
    category: "Website",
    year: 2025,
    status: "completed",
    features: [
      "Pencarian destinasi wisata",
      "Pemesanan tiket online",
      "Pembayaran QRIS digital",
      "E-ticket otomatis",
      "5+ destinasi wisata",
      "100% digital & paperless",
    ],
  },
  {
    id: "poskasir-funfrozenfood",
    title: "POS Kasir Fun Frozen Food",
    description:
      "Aplikasi kasir modern berbasis PWA terintegrasi dengan website Fun Frozen Food, dilengkapi manajemen produk, keranjang belanja, dan checkout.",
    longDescription:
      "POS Kasir Fun Frozen Food adalah aplikasi Point of Sale berbasis web yang terintegrasi langsung dengan website Fun Frozen Food. Dibangun sebagai Progressive Web App (PWA) sehingga bisa diinstall di perangkat mobile maupun desktop. Kasir dapat mencari produk, menambah ke keranjang, dan melakukan checkout dengan mudah dan cepat.",
    thumbnail: "/images/projects/poskasir-thumb.jpg",
    gallery: [],
    tech: ["PHP Native", "MySQL", "JavaScript", "PWA", "Bootstrap"],
    category: "E-Commerce",
    year: 2025,
    status: "completed",
    features: [
      "Point of Sale (POS) modern",
      "PWA - bisa diinstall di HP/PC",
      "Pencarian produk real-time",
      "Filter kategori produk",
      "Keranjang belanja dinamis",
      "Manajemen stok otomatis",
      "Checkout & struk digital",
      "Terintegrasi Fun Frozen Food",
    ],
  },
  {
    id: "kos-kampus",
    title: "KosCampus",
    description:
      "Platform pencarian kos digital dekat kampus dengan fitur filter lokasi, tipe kos, dan sistem registrasi pengguna.",
    longDescription:
      "KosCampus adalah platform digital yang memudahkan mahasiswa menemukan kos terbaik di sekitar kampus favorit mereka. Dilengkapi dengan fitur pencarian berdasarkan nama, lokasi, kampus terdekat, dan tipe kos. Platform ini juga memiliki sistem registrasi pengguna dan manajemen listing kos.",
    thumbnail: "/images/projects/koskampus-thumb.jpg",
    gallery: [],
    tech: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
    category: "Website",
    year: 2025,
    status: "completed",
    features: [
      "Pencarian kos by nama & lokasi",
      "Filter kampus terdekat",
      "Filter tipe kos",
      "Sistem registrasi & login",
      "Listing kos lengkap",
      "5+ kampus terintegrasi",
      "Responsive mobile",
    ],
  },
  {
    id: "siparkir",
    title: "SiParkir",
    description:
      "Sistem monitoring juru parkir digital dengan fitur scan QR Code untuk verifikasi juru parkir resmi dan pelaporan jukir liar.",
    longDescription:
      "SiParkir adalah sistem monitoring juru parkir berbasis web yang membantu masyarakat memverifikasi keaslian juru parkir resmi melalui scan QR Code. Sistem ini juga memungkinkan masyarakat melaporkan juru parkir liar dan pelanggaran tarif parkir, sehingga menciptakan transparansi dan keamanan parkir di kota.",
    thumbnail: "/images/projects/siparkir-thumb.jpg",
    gallery: [],
    tech: ["PHP Native", "MySQL", "Bootstrap", "JavaScript", "QR Code"],
    category: "Sistem Informasi",
    year: 2025,
    status: "completed",
    features: [
      "Scan QR Code verifikasi jukir",
      "Pendaftaran juru parkir resmi",
      "Pelaporan jukir liar",
      "Transparansi tarif parkir",
      "Dashboard admin & laporan",
      "Sistem login multi-role",
      "Responsive mobile",
    ],
  },
  {
    id: "simbangizi",
    title: "SIMBANGIZI",
    description:
      "Sistem Informasi Manajemen Bantuan Gizi untuk monitoring distribusi Program Makan Bergizi Gratis (MBG) nasional.",
    longDescription:
      "SIMBANGIZI adalah sistem informasi manajemen berbasis web untuk memantau dan mengelola distribusi Program Makan Bergizi Gratis (MBG) secara nasional. Sistem ini terintegrasi dengan data sekolah, dapur pengelola MBG, ahli gizi, dan laporan distribusi harian. Dilengkapi dashboard analitik dengan grafik distribusi dan status penerimaan real-time.",
    thumbnail: "/images/projects/simbangizi-thumb.jpg",
    gallery: [],
    tech: ["PHP Native", "MySQL", "Bootstrap", "Chart.js", "JavaScript"],
    category: "Sistem Informasi",
    year: 2025,
    status: "completed",
    features: [
      "Dashboard nasional real-time",
      "Monitoring 900+ penerima MBG",
      "Manajemen data sekolah",
      "Data dapur & pengelola MBG",
      "Grafik distribusi 7 hari",
      "Status distribusi mingguan",
      "Laporan & audit log",
      "Peta distribusi interaktif",
      "Sanksi pengelola",
      "Multi-role admin",
    ],
  },
  {
    id: "alga-group",
    title: "Alga Group",
    description:
      "Website company profile dan katalog produk otomotif Alga Group dengan fitur pemesanan langsung via WhatsApp.",
    longDescription:
      "Alga Group adalah website company profile sekaligus katalog produk online untuk bisnis solusi otomotif. Menampilkan berbagai produk otomotif seperti air radiator, aki, ban mobil, dan aksesoris otomotif lainnya dengan harga transparan. Dilengkapi fitur pemesanan langsung via WhatsApp untuk kemudahan transaksi.",
    thumbnail: "/images/projects/algagroup-thumb.jpg",
    gallery: [],
    tech: ["PHP Native", "MySQL", "Bootstrap", "JavaScript", "WhatsApp API"],
    category: "Website",
    year: 2025,
    status: "completed",
    features: [
      "Katalog produk otomotif",
      "Filter kategori produk",
      "Harga produk transparan",
      "Pesan via WhatsApp langsung",
      "Halaman kontak & alamat",
      "Responsive mobile",
      "SEO optimized",
    ],
  },
  {
    id: "alga-riau-jaya",
    title: "Sistem Informasi Penjualan Alga Riau Jaya",
    description:
      "Sistem informasi penjualan internal CV. Alga Riau Jaya dengan manajemen produk, stok, pelanggan, keuangan, dan laporan kinerja sales.",
    longDescription:
      "Sistem Informasi Penjualan Alga Riau Jaya adalah aplikasi manajemen bisnis internal untuk CV. Alga Riau Jaya yang bergerak di bidang otomotif. Sistem ini mencakup manajemen produk dengan kalkulasi margin otomatis, monitoring stok menipis, manajemen pelanggan, transaksi penjualan, kinerja sales, laporan keuangan, dan manajemen user berbasis role.",
    thumbnail: "/images/projects/algariautjaya-thumb.jpg",
    gallery: [],
    tech: ["PHP Native", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
    category: "Sistem Informasi",
    year: 2025,
    status: "completed",
    features: [
      "Manajemen produk & kategori",
      "Kalkulasi margin otomatis",
      "Monitoring stok menipis",
      "Manajemen pelanggan",
      "Transaksi penjualan",
      "Laporan kinerja sales",
      "Laporan keuangan",
      "Multi-user & role management",
      "Dashboard analitik",
    ],
  },
{
    id: "biro-perekonomian-riau",
    title: "Redesain Website Biro Perekonomian",
    description:
      "Redesain UI/UX website resmi Biro Perekonomian Setda Provinsi Riau menjadi lebih modern dan profesional.",
    longDescription:
      "Proyek redesain tampilan website resmi Biro Perekonomian Setda Provinsi Riau. Fokus pada peningkatan UI/UX, keterbacaan informasi publik, navigasi yang lebih intuitif, serta tampilan yang lebih modern sesuai standar website pemerintahan.",
    thumbnail: "/images/projects/biro-perekonomian.jpg",
    gallery: [],
    tech: ["Figma", "UI/UX Design", "Redesain", "Government Website"],
    category: "Website",
    year: 2025,
    status: "completed",
    features: [
      "Redesain tampilan modern",
      "Navigasi lebih intuitif",
      "Keterbacaan informasi publik",
      "Responsive design",
      "Prototype interaktif",
    ],
  },
  {
    id: "jual-beli-kita",
    title: "JBK - Jual Beli Kita",
    description:
      "Aplikasi marketplace mobile Jual Beli Kita (JBK) untuk jual beli produk secara online dengan tampilan modern dan user-friendly.",
    longDescription:
      "JBK (Jual Beli Kita) adalah aplikasi marketplace mobile yang dirancang untuk memudahkan transaksi jual beli online. Dilengkapi dengan fitur pencarian produk, profil pengguna, sistem following, feed produk, chat antar pengguna, dan manajemen listing produk dengan desain UI yang modern dan intuitif.",
    thumbnail: "/images/projects/jbk-thumb.jpg",
    gallery: [],
    tech: ["Figma", "UI/UX Design", "Mobile App", "Marketplace"],
    category: "Mobile App",
    year: 2025,
    status: "completed",
    features: [
      "Feed produk marketplace",
      "Profil pengguna",
      "Sistem following",
      "Pencarian produk",
      "Chat antar pengguna",
      "Listing produk",
      "UI modern & intuitif",
    ],
  },
  {
    id: "simbangizi",
    title: "SIMBANGIZI",
    description:
      "Sistem Monitoring dan Pengawasan Program Makan Bergizi Sekolah (MBG). Platform digital terintegrasi untuk memastikan setiap anak Indonesia mendapatkan makanan bergizi yang sesuai standar dan tepat sasaran.",
    longDescription:
      "SIMBANGIZI adalah platform digital terintegrasi untuk monitoring dan pengawasan Program Makan Bergizi Sekolah (MBG) secara nasional. Sistem ini mencakup 34+ provinsi, 50K+ sekolah, dan 20M+ penerima MBG. Dilengkapi dengan dashboard monitoring real-time, sistem pelaporan, manajemen multi-role pengguna, dan transparansi data untuk seluruh pemangku kepentingan.",
    thumbnail: "/images/projects/simbangizi-thumb.jpg",
    gallery: [],
    tech: ["PHP Native", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
    category: "Sistem Informasi",
    year: 2025,
    status: "completed",
    features: [
      "Monitoring 34+ provinsi",
      "Data 50K+ sekolah",
      "20M+ penerima MBG",
      "Dashboard real-time",
      "Sistem pelaporan",
      "Multi-role management",
      "Transparansi & akuntabilitas",
      "Sistem login terintegrasi",
    ],
  },
   ];  

export const projectCategories = [
  "Semua",
  "Sistem Informasi",
  "Website",
  "E-Commerce",
  "Kesehatan",
  "Bisnis",
];
