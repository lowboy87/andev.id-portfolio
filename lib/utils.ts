import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
  }).format(new Date(dateStr));
}

export function createWhatsAppMessage(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectTitle: string;
  deadline: string;
  budget: string;
  description: string;
}): string {
  const message = `Halo, saya ingin menggunakan jasa Anda.

*Nama:* ${data.name}
*Email:* ${data.email}
*WhatsApp:* ${data.phone}
*Layanan:* ${data.service}
*Judul Project:* ${data.projectTitle}
*Deadline:* ${data.deadline}
*Budget:* ${data.budget}

*Deskripsi Kebutuhan:*
${data.description}

Terima kasih 🙏`;

  return encodeURIComponent(message);
}

// WhatsApp number - GANTI dengan nomor Anda
export const WHATSAPP_NUMBER = "6285274123456";
export const EMAIL_ADDRESS = "hello@andredev.id";
