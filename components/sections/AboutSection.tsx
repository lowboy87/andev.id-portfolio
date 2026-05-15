"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { MapPin, Coffee, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { value: 5, suffix: "+", label: "Total Projects", icon: Briefcase },
  { value: 15, suffix: "+", label: "Technologies", icon: Coffee },
  { value: 4, suffix: "+", label: "Happy Clients", icon: GraduationCap },
  { value: 3, suffix: "+", label: "Years Exp", icon: MapPin },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-8 border-gradient overflow-hidden">
              {/* Code snippet decoration */}
              <div className="font-mono text-sm space-y-2 text-white/50">
                <div>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span>
                  <span className="text-white"> = {"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-white/40">name:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Andre Sarlindo&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-white/40">role:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Fullstack Developer&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-white/40">location:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Pekanbaru, Riau&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-white/40">status:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Available for hire&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-white/40">passion:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Building awesome web apps&quot;
                  </span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                </div>
              </div>

              {/* Glow decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map(({ value, suffix, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl p-4 border border-white/5 hover:border-cyan-500/20 transition-all group"
                >
                  <Icon className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold font-display text-white">
                    {inView && (
                      <CountUp end={value} duration={2} suffix={suffix} />
                    )}
                  </div>
                  <div className="text-xs text-white/40 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 leading-tight">
              About <span className="text-gradient-static">Me</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Halo! Saya{" "}
                <span className="text-white font-medium">
                  Andre Sarlindo, S.Kom
                </span>
                , seorang fresh graduate programmer yang passionate dalam
                membangun solusi digital modern dan inovatif.
              </p>
              <p>
                Fokus utama saya adalah{" "}
                <span className="text-cyan-400 font-medium">
                  web development modern
                </span>{" "}
                menggunakan teknologi terkini seperti Next.js, TypeScript, dan
                Tailwind CSS. Saya juga berpengalaman dalam membangun{" "}
                <span className="text-violet-400 font-medium">
                  sistem informasi
                </span>{" "}
                berbasis PHP Native dan Laravel untuk instansi pemerintah dan
                UMKM.
              </p>
              <p>
                Pengalaman saya mencakup project skripsi Berjudul Optimasi
                Layanan Di Afdal Gorden Pekanbaru Melalui Sistem Informasi
                Manajemen Berbasis Web Dengan{" "}
                <span className="text-emerald-400 font-medium">
                  Feature Driven Development (FDD)
                </span>
                , beberapa project freelance pengembangan sistem pemerintahan,
                dan untuk klien dari berbagai industri di Pekanbaru & Kabupaten
                Siak, Riau.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Next.js",
                "TypeScript",
                "PHP",
                "Laravel",
                "MySQL",
                "Tailwind CSS",
                "React",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 glass border border-white/8 rounded-lg text-xs font-mono text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/40">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Pekanbaru, Riau, Indonesia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
