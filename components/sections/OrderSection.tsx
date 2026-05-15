"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, MessageCircle, CheckCircle } from "lucide-react";
import { createWhatsAppMessage, WHATSAPP_NUMBER } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z
    .string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .regex(/^[0-9+\-\s()]+$/, "Format nomor tidak valid"),
  service: z.string().min(1, "Pilih layanan terlebih dahulu"),
  projectTitle: z.string().min(3, "Judul project minimal 3 karakter"),
  deadline: z.string().min(1, "Masukkan deadline project"),
  budget: z.string().min(1, "Pilih range budget"),
  description: z.string().min(20, "Deskripsi minimal 20 karakter"),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Website Company Profile",
  "Sistem Informasi",
  "Landing Page",
  "Portfolio Website",
  "UI/UX Design",
  "Dashboard Admin",
  "Lainnya",
];

const budgetOptions = [
  "< Rp 500.000",
  "Rp 500.000 – Rp 1.000.000",
  "Rp 1.000.000 – Rp 2.500.000",
  "Rp 2.500.000 – Rp 5.000.000",
  "> Rp 5.000.000",
  "Diskusi dulu",
];

export default function OrderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Simulate slight delay for UX
      await new Promise((r) => setTimeout(r, 800));
      const msg = createWhatsAppMessage({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        projectTitle: data.projectTitle,
        deadline: data.deadline,
        budget: data.budget,
        description: data.description,
      });
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      toast.success("Berhasil! Membuka WhatsApp...", {
        description: "Pesan sudah disiapkan otomatis.",
        icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
      });
      reset();
    } catch {
      toast.error("Terjadi kesalahan", {
        description: "Silakan coba lagi atau hubungi langsung via WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputCls =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] transition-all";
  const errorCls = "mt-1.5 text-xs text-rose-400 flex items-center gap-1";

  return (
    <section id="order" className="relative section-padding" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent pointer-events-none" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Order <span className="text-gradient-static">Layanan</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Isi form di bawah dan saya akan menghubungi Anda via WhatsApp untuk diskusi lebih lanjut.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                    Nama Lengkap *
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Nama Anda"
                    autoComplete="name"
                    className={inputCls}
                  />
                  {errors.name && (
                    <p className={errorCls}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="hello@email.com"
                    autoComplete="email"
                    className={inputCls}
                  />
                  {errors.email && (
                    <p className={errorCls}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                    Nomor WhatsApp *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="WA"
                    autoComplete="tel"
                    className={inputCls}
                  />
                  {errors.phone && (
                    <p className={errorCls}>{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                    Jenis Layanan *
                  </label>
                  <select
                    {...register("service")}
                    className={inputCls}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-gray-900 text-white/40">
                      Pilih layanan...
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-gray-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className={errorCls}>{errors.service.message}</p>
                  )}
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                    Judul Project *
                  </label>
                  <input
                    {...register("projectTitle")}
                    placeholder="Website Toko / Instansi"
                    className={inputCls}
                  />
                  {errors.projectTitle && (
                    <p className={errorCls}>{errors.projectTitle.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                    Deadline *
                  </label>
                  <input
                    {...register("deadline")}
                    type="date"
                    className={inputCls}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.deadline && (
                    <p className={errorCls}>{errors.deadline.message}</p>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                  Budget *
                </label>
                <select
                  {...register("budget")}
                  className={inputCls}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-gray-900 text-white/40">
                    Pilih range budget...
                  </option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b} className="bg-gray-900 text-white">
                      {b}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className={errorCls}>{errors.budget.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs text-white/50 mb-2 font-medium tracking-wide">
                  Deskripsi Kebutuhan *
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  placeholder="Ceritakan kebutuhan project Anda secara detail — fitur yang dibutuhkan, referensi desain, target pengguna, dll."
                  className={`${inputCls} resize-none`}
                />
                {errors.description && (
                  <p className={errorCls}>{errors.description.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    Kirim via WhatsApp
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-white/25 leading-relaxed">
                Form ini akan otomatis membuka WhatsApp dengan pesan yang sudah terformat.
                Data Anda aman dan tidak disimpan di server.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
