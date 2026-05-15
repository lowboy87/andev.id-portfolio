"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, MapPin, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER, EMAIL_ADDRESS } from "@/lib/utils";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Coming soon",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: "text-emerald-400",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
    color: "text-cyan-400",
    border: "hover:border-cyan-500/30",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Pekanbaru, Riau",
    href: "https://maps.google.com/?q=Kabupaten+Siak+Riau",
    color: "text-violet-400",
    border: "hover:border-violet-500/30",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative section-padding" ref={ref}>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient-static">Touch</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Ada project menarik? Mari diskusi! Saya siap membantu mewujudkan ide digital Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href, color, border }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-5 glass-card border border-white/5 ${border} rounded-2xl group transition-all`}
              >
                <div className="w-12 h-12 glass border border-white/8 rounded-xl flex items-center justify-center group-hover:border-current transition-colors">
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-white/40 mb-0.5">{label}</div>
                  <div className="font-medium text-white text-sm">{value}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <div className="text-xs text-white/30 font-mono uppercase tracking-wider mb-3">
                Follow me
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/andredev", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/andredev", label: "LinkedIn" },
                  { icon: Instagram, href: "https://instagram.com/andredev_", label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 glass border border-white/8 rounded-xl flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-3xl p-8 border border-white/8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
                <MessageCircle className="w-7 h-7 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Let&apos;s work together!
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Saya terbuka untuk proyek freelance, kolaborasi, dan peluang kerja.
                Jangan ragu untuk menghubungi saya kapan saja!
              </p>

              <div className="space-y-3">
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl text-sm hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat via WhatsApp
                </motion.a>
                <motion.a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 glass border border-white/10 text-white font-semibold rounded-xl text-sm hover:border-white/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Kirim Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
