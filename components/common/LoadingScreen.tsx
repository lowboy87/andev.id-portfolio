"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Orbit rings */}
          <div className="relative flex items-center justify-center mb-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 h-40 rounded-full border border-cyan-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-28 h-28 rounded-full border border-violet-500/30"
            />

            {/* Dot on orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 h-40"
            >
              <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-28 h-28"
            >
              <div className="w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
            </motion.div>

            {/* Logo */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 relative z-10"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              />
            </motion.div>
          </div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-gradient-static mb-1 tracking-wider"
          >
            AnDev
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-white/30 font-mono tracking-widest mb-10 uppercase"
          >
            Solusi Digital, Kode Tanpa Batas
          </motion.div>

          {/* Progress bar */}
          <div className="w-56 space-y-2">
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/20 font-mono">Loading...</span>
              <span className="text-xs text-cyan-400 font-mono">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}