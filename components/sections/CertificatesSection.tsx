"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Award, Calendar } from "lucide-react";
import { certificates, certificateCategories, type Certificate } from "@/data/index";
import { formatDate, cn } from "@/lib/utils";

function CertModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-xl glass-card border border-white/10 rounded-3xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 glass border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="h-64 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 flex items-center justify-center">
          <Award className="w-24 h-24 text-cyan-400/30" />
        </div>

        <div className="p-6">
          <span className="text-xs font-mono text-cyan-400 glass border border-cyan-500/20 px-3 py-1 rounded-full">
            {cert.category}
          </span>
          <h3 className="text-xl font-bold text-white mt-3 mb-1">{cert.title}</h3>
          <p className="text-white/50 text-sm mb-1">{cert.issuer}</p>
          <div className="flex items-center gap-1 text-xs text-white/30 mb-6">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(cert.date)}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-semibold rounded-xl"
              >
                <ExternalLink className="w-4 h-4" /> Verifikasi
              </a>
            )}
            <button className="flex items-center gap-2 px-5 py-2.5 glass border border-white/10 text-white text-sm font-semibold rounded-xl hover:border-white/20 transition-all">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CertificatesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="relative section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Certificates &amp; <span className="text-gradient-static">Achievement</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Sertifikat dan pencapaian yang telah saya raih dalam perjalanan belajar dan berkarya.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {certificateCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-400"
                  : "glass border border-white/8 text-white/50 hover:text-white hover:border-white/15"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelected(cert)}
              className="glass-card rounded-2xl border border-white/5 hover:border-cyan-500/20 overflow-hidden cursor-pointer group transition-all"
            >
              <div className="h-36 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center group-hover:from-cyan-500/15 group-hover:to-violet-500/15 transition-all">
                <Award className="w-16 h-16 text-cyan-400/40 group-hover:text-cyan-400/60 group-hover:scale-110 transition-all" />
              </div>
              <div className="p-5">
                <span className="text-xs font-mono text-cyan-400 glass border border-cyan-500/20 px-2 py-0.5 rounded-full">
                  {cert.category}
                </span>
                <h3 className="font-bold text-white mt-3 mb-1 text-sm group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-white/40">{cert.issuer}</p>
                <div className="flex items-center gap-1 text-xs text-white/30 mt-2">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(cert.date)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal — AnimatePresence outside conditional for exit animation */}
      <AnimatePresence mode="wait">
        {selected && (
          <CertModal
            key={selected.id}
            cert={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
