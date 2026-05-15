# 🚀 Andre Dev — Portfolio Website

Portfolio programmer modern + landing page jasa digital premium dibangun dengan Next.js 15, TypeScript, Tailwind CSS, dan Framer Motion.

---

## ✨ Fitur Utama

- **Hero Section** — Typing animation, profile card, CTA buttons, social links
- **About Section** — Statistik animasi dengan React CountUp
- **Skills Section** — Progress bar animasi per kategori (Frontend / Backend / Tools)
- **Projects Section** — Card dengan filter kategori, modal detail project
- **Services Section** — Layanan jasa dengan harga dan CTA order
- **Certificates Section** — Gallery sertifikat dengan filter & modal preview
- **Experience Section** — Timeline perjalanan programmer
- **Testimonials Section** — Review klien dengan rating bintang
- **Blog Section** — Artikel programming
- **Order Form** — Form pemesanan dengan validasi Zod + WhatsApp integration
- **Contact Section** — Kontak lengkap + social media
- **Particle Background** — Canvas particle animation
- **Scroll Progress Bar** — Progress scroll di atas halaman
- **Dark Mode** — Default dark, bisa switch ke light

---

## 🛠️ Teknologi

| Teknologi | Versi | Kegunaan |
|-----------|-------|---------|
| Next.js | 15.x | App Router, SSR/SSG |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animasi |
| React Hook Form | 7.x | Form management |
| Zod | 3.x | Validasi schema |
| Sonner | latest | Toast notification |
| Lucide React | latest | Icon library |
| React CountUp | 6.x | Animasi angka |
| React Type Animation | 3.x | Typing effect |
| next-themes | 0.4 | Dark/light mode |

---

## ⚡ Instalasi & Menjalankan

### 1. Clone atau extract project

```bash
# Jika dari zip, extract dulu kemudian masuk folder
cd portfolio-programmer
```

### 2. Install dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Setup environment variables

```bash
# Salin file example
cp .env.example .env.local

# Edit file .env.local sesuai kebutuhan
```

### 4. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🔧 Konfigurasi Penting

### Ganti Nomor WhatsApp Admin

Buka file `lib/utils.ts`:

```typescript
// Ganti nomor ini dengan nomor WhatsApp Anda
export const WHATSAPP_NUMBER = "6285274123456";
// Format: 62 + nomor tanpa 0 (misal: 081234567890 → 6281234567890)
```

### Ganti Email Admin

```typescript
export const EMAIL_ADDRESS = "hello@andredev.id";
```

### Ganti Nama & Info Developer

Buka file-file berikut dan edit sesuai data Anda:
- `app/layout.tsx` — metadata SEO (title, description)
- `components/sections/HeroSection.tsx` — nama, deskripsi, sosial media
- `components/sections/AboutSection.tsx` — bio & lokasi
- `components/layout/Navbar.tsx` — nama brand
- `components/layout/Footer.tsx` — copyright & sosial media

### Edit Data Project

Buka `data/projects.ts` dan edit array `projects`:

```typescript
export const projects: Project[] = [
  {
    id: "project-baru",
    title: "Nama Project",
    description: "Deskripsi singkat",
    longDescription: "Deskripsi panjang...",
    thumbnail: "/images/projects/nama-thumb.jpg",
    gallery: ["/images/projects/nama-1.jpg"],
    tech: ["Next.js", "TypeScript"],
    category: "Website",
    year: 2025,
    status: "completed",
    demoUrl: "https://demo.project.com",
    githubUrl: "https://github.com/username/project",
    features: ["Fitur 1", "Fitur 2"],
  },
];
```

### Tambah Sertifikat

Buka `data/index.ts` dan tambah ke array `certificates`.

### Tambah Blog Post

Buka `data/index.ts` dan tambah ke array `blogPosts`.

---

## 🖼️ Cara Menambah Gambar Project

1. Simpan gambar thumbnail di: `public/images/projects/nama-project-thumb.jpg`
2. Simpan gambar gallery di: `public/images/projects/nama-project-1.jpg`
3. Update path di `data/projects.ts`

**Rekomendasi ukuran:**
- Thumbnail: 800×450px (rasio 16:9)
- Gallery: 1280×720px (rasio 16:9)

---

## 🚀 Deploy ke Vercel

### Via GitHub

1. Push project ke GitHub repository
2. Login ke [vercel.com](https://vercel.com)
3. Klik **"New Project"** → Import dari GitHub
4. Pilih repository Anda
5. Klik **"Deploy"**

### Environment Variables di Vercel

Di Vercel dashboard → Settings → Environment Variables, tambahkan:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = nomor WA Anda
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` (jika pakai EmailJS)
- Semua variabel dari `.env.example`

### Via CLI

```bash
npm install -g vercel
vercel login
vercel deploy
```

---

## 📧 Setup EmailJS (Opsional)

EmailJS memungkinkan form order juga terkirim ke email Anda.

### Langkah:

1. Daftar di [emailjs.com](https://emailjs.com)
2. Buat **Email Service** (pilih Gmail)
3. Buat **Email Template** dengan variabel:
   - `{{from_name}}`, `{{from_email}}`, `{{phone}}`
   - `{{service}}`, `{{project_title}}`, `{{deadline}}`
   - `{{budget}}`, `{{description}}`
4. Copy **Service ID**, **Template ID**, dan **Public Key**
5. Masukkan ke `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
   ```

---

## 🗄️ Setup Supabase (Opsional - untuk CMS)

1. Daftar di [supabase.com](https://supabase.com)
2. Buat project baru
3. Copy **Database URL** dari Settings → Database
4. Masukkan ke `.env.local`:
   ```
   DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres
   ```

---

## 📁 Struktur Folder

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── common/
│   │   ├── ThemeProvider.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── ParticleBackground.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ServicesSection.tsx
│       ├── CertificatesSection.tsx
│       ├── ExperienceSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogSection.tsx
│       ├── OrderSection.tsx
│       └── ContactSection.tsx
├── data/
│   ├── projects.ts         # Data project (edit di sini!)
│   ├── skills.ts           # Data skill
│   ├── services.ts         # Data layanan + harga
│   └── index.ts            # Sertifikat, testimonial, blog, experience
├── lib/
│   └── utils.ts            # Utility functions + kontak info
├── public/
│   └── images/
│       ├── projects/       # Gambar project
│       ├── certificates/   # Gambar sertifikat
│       └── avatars/        # Foto profil
├── .env.example            # Template environment variables
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 🎨 Kustomisasi Desain

### Warna Utama

Edit `app/globals.css` bagian `:root`:

```css
:root {
  --primary: 191 97% 42%;   /* Cyan - warna utama */
  --secondary: 263 70% 60%; /* Violet - warna aksen */
  --background: 222 47% 5%; /* Dark background */
}
```

### Font

Font default: **Syne** (display) + **JetBrains Mono** (code)

Ganti di `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

---

## 🐛 Troubleshooting

### Error: Module not found
```bash
npm install  # install ulang dependencies
```

### Error: 'ReactCountUp' is not exported
```bash
npm install react-countup@latest
```

### Gambar tidak muncul
- Pastikan file ada di folder `public/images/...`
- Check path di `data/projects.ts`

### TypeScript error pada form
```bash
npm install @hookform/resolvers zod
```

---

## 📞 Support

Butuh bantuan? Hubungi via:
- WhatsApp: +62 852-7412-3456
- Email: hello@andredev.id

---

**Dibuat dengan ❤️ menggunakan Next.js 15, TypeScript, dan Tailwind CSS**
