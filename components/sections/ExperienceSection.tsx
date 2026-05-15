"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, GraduationCap, Rocket, Star } from "lucide-react";
import { experiences } from "@/data/index";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Server,
  GraduationCap,
  Rocket,
  Star,
};

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  cyan:    { text: "text-cyan-400",    border: "border-cyan-500/30",    bg: "bg-cyan-500/10" },
  violet:  { text: "text-violet-400",  border: "border-violet-500/30",  bg: "bg-violet-500/10" },
  emerald: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
  orange:  { text: "text-orange-400",  border: "border-orange-500/30",  bg: "bg-orange-500/10" },
  pink:    { text: "text-pink-400",    border: "border-pink-500/30",    bg: "bg-pink-500/10" },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative section-padding" ref={ref}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient-static">Journey</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Perjalanan saya dalam dunia programming dan pengembangan web dari awal hingga sekarang.
          </p>
        </motion.div>

        {/* Timeline — single column on mobile, alternating on desktop */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = iconMap[exp.icon] ?? Code2;
              const colors = colorMap[exp.color] ?? colorMap.cyan;
              const isRight = i % 2 !== 0; // alternates on desktop

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.14 }}
                  className={cn(
                    "relative flex items-start",
                    // Desktop: alternate sides via flex-row-reverse
                    "md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-center"
                  )}
                >
                  {/* ── Left cell (desktop) ── */}
                  <div className={cn("hidden md:flex", isRight ? "justify-end" : "justify-start")}>
                    {!isRight && <TimelineCard exp={exp} colors={colors} />}
                    {isRight && (
                      <span className={cn("font-mono text-2xl font-bold", colors.text)}>
                        {exp.year}
                      </span>
                    )}
                  </div>

                  {/* ── Center dot ── */}
                  <div className="flex items-center justify-center flex-shrink-0">
                    {/* mobile: absolute-left; desktop: grid center */}
                    <div
                      className={cn(
                        "absolute left-6 md:static md:left-auto -translate-x-1/2 md:translate-x-0",
                        "w-11 h-11 rounded-xl flex items-center justify-center border shadow-lg",
                        colors.bg,
                        colors.border
                      )}
                    >
                      <Icon className={cn("w-5 h-5", colors.text)} />
                    </div>
                  </div>

                  {/* ── Right cell (desktop) / main content (mobile) ── */}
                  <div className={cn("pl-16 md:pl-0", isRight ? "md:flex md:justify-start" : "md:flex md:justify-end")}>
                    {/* Mobile: always show full card */}
                    <div className="md:hidden">
                      <TimelineCard exp={exp} colors={colors} />
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block">
                      {isRight && <TimelineCard exp={exp} colors={colors} />}
                      {!isRight && (
                        <span className={cn("font-mono text-2xl font-bold", colors.text)}>
                          {exp.year}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Card sub-component ─── */
function TimelineCard({
  exp,
  colors,
}: {
  exp: (typeof experiences)[number];
  colors: { text: string; border: string; bg: string };
}) {
  return (
    <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all max-w-sm">
      <span className={cn("font-mono text-xl font-bold block mb-2", colors.text)}>
        {exp.year}
      </span>
      <h3 className="font-bold text-white mb-1 text-sm">{exp.title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{exp.description}</p>
    </div>
  );
}
