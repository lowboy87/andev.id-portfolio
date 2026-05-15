"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIcons = { Monitor, Server, Wrench };

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative section-padding">
      {/* BG accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4"></div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient-static">Skills</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun produk digital
            berkualitas tinggi.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => {
            const Icon = categoryIcons[cat.icon as keyof typeof categoryIcons];
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all",
                  activeCategory === i
                    ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-400"
                    : "glass border border-white/8 text-white/50 hover:text-white hover:border-white/15",
                )}
              >
                <Icon className="w-4 h-4" />
                {cat.category}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-2xl p-5 border border-white/5 hover:border-white/10 group transition-all cursor-default"
            >
              {/* Skill header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    {skill.name.substring(0, 2)}
                  </div>
                  <span className="font-medium text-white/80 text-sm group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                    boxShadow: `0 0 8px ${skill.color}60`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
