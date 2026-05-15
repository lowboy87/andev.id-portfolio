"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  Eye,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const socials = [
  { icon: Github, href: "https://github.com/andredev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/andredev",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/andredev_",
    label: "Instagram",
  },
  {
    icon: MessageCircle,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "WhatsApp",
  },
  { icon: Mail, href: "mailto:hello@andredev.id", label: "Email" },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass border border-cyan-500/20 rounded-full text-sm font-mono text-cyan-400 mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Available for freelance
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="font-mono text-sm text-white/40 mb-2 tracking-widest uppercase">
                Hello, I&apos;m
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-4">
                <span className="text-white">Andre</span>{" "}
                <span className="text-gradient">Sarlindo</span>
              </h1>
            </motion.div>

            {/* Type Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-white/40 font-mono text-sm">{"// "}</span>
              <div className="text-xl sm:text-2xl font-semibold text-cyan-400 font-mono h-8">
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "Backend Developer",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                    "Freelance Web Dev",
                    2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/55 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              Membangun pengalaman web yang luar biasa dengan teknologi modern.
              Jurusan{" "}
              <span className="text-cyan-400 font-medium">
                Teknik Informatika
              </span>
              ,{" "}
              <span className="text-violet-400 font-medium">
                website profesional
              </span>
              , dan{" "}
              <span className="text-emerald-400 font-medium">
                jasa digital premium
              </span>{" "}
              berbasis Website & Mobile Apps di Pekanbaru, Riau.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                onClick={() => scrollTo("#projects")}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl glow-cyan hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-sm"
              >
                <Eye className="w-4 h-4" />
                View Projects
              </motion.button>

              <motion.button
                onClick={() => scrollTo("#order")}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white font-semibold rounded-xl hover:border-cyan-500/30 transition-all text-sm"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href="/cv-Andre-dev.pdf"
                download
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white/70 font-semibold rounded-xl hover:text-white hover:border-white/20 transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-white/30 text-xs font-mono">
                FIND ME ON
              </span>
              <div className="w-8 h-px bg-white/10" />
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-cyan-500/10 animate-spin-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-96 h-96 rounded-full border border-violet-500/10 animate-spin-slow"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: "12s",
                  }}
                />
              </div>

              {/* Profile picture container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-72 h-72 sm:w-80 sm:h-80"
              >
                {/* Glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-2xl" />

                {/* Image frame */}
                <div className="relative w-full h-full rounded-full border-2 border-gradient overflow-hidden glass-card">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="/images/avatar.png"
                      alt="Avatar"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 top-1/4 glass border border-cyan-500/20 rounded-2xl px-3 py-2 text-xs font-mono"
                >
                  <div className="text-cyan-400 font-bold">5+</div>
                  <div className="text-white/50">Projects</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-8 bottom-1/4 glass border border-violet-500/20 rounded-2xl px-3 py-2 text-xs font-mono"
                >
                  <div className="text-violet-400 font-bold">3+</div>
                  <div className="text-white/50">Years Exp</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 glass border border-emerald-500/20 rounded-2xl px-3 py-2 text-xs font-mono"
                >
                  <div className="text-emerald-400 font-bold text-center">
                    Open to Work
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 font-mono uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
