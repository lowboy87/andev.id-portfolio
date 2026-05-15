"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { EMAIL_ADDRESS } from "@/lib/utils";

const socials = [
  { icon: Github, href: "https://github.com/andredev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/andredev", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/andredev", label: "Instagram" },
  { icon: Mail, href: `mailto:${EMAIL_ADDRESS}`, label: "Email" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 overflow-hidden">
            <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
            />
            </div>
            <div>
              <div className="font-bold text-lg text-gradient-static">Andre.dev</div>
              <div className="text-xs text-white/40 font-mono">Fullstack Developer</div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/50 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-white/50 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-white/30 flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Andre Dev.</span>
            <span>Built with</span>
            <Heart className="w-3 h-3 text-rose-400 inline" />
            <span>using Next.js, TypeScript &amp; Tailwind CSS.</span>
            <span className="text-cyan-400 font-mono">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
