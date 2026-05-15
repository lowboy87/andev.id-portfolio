"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight, Calendar, Tag } from "lucide-react";
import { projects, projectCategories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  onClick,
  index,
  inView,
}: {
  project: Project;
  onClick: () => void;
  index: number;
  inView: boolean;
}) {
  const statusColors = {
    completed: "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20",
    "in-progress": "text-amber-400 bg-amber-400/10 border border-amber-400/20",
    maintenance: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
  };
  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    maintenance: "Maintenance",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group glass-card rounded-2xl border border-white/5 hover:border-cyan-500/20 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
              e.currentTarget.style.display = 'none';
  }}
/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.demoUrl && (
              <span className="flex items-center gap-1 text-xs text-white bg-white/20 backdrop-blur px-3 py-1.5 rounded-lg">
                <ExternalLink className="w-3 h-3" /> Demo
              </span>
            )}
            {project.githubUrl && (
              <span className="flex items-center gap-1 text-xs text-white bg-white/20 backdrop-blur px-3 py-1.5 rounded-lg">
                <Github className="w-3 h-3" /> GitHub
              </span>
            )}
          </div>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={cn("text-xs font-medium px-2 py-1 rounded-lg", statusColors[project.status])}>
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
        </div>

        <p className="text-sm text-white/50 line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-white/30 mb-4">
          <Calendar className="w-3 h-3" />
          <span>{project.year}</span>
          <span>·</span>
          <Tag className="w-3 h-3" />
          <span>{project.category}</span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 glass border border-white/5 rounded-lg text-white/50 font-mono"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-1 glass border border-white/5 rounded-lg text-white/30 font-mono">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-white/10 rounded-3xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 glass border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner */}
        <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-t-3xl overflow-hidden relative">
          <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
      }}
  />
      </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-cyan-400 glass border border-cyan-500/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="font-mono text-xs text-white/40">{project.year}</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
          <p className="text-white/60 leading-relaxed mb-6">{project.longDescription}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
              Fitur Utama
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
              Teknologi
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 glass border border-white/8 rounded-lg text-white/60 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl text-sm hover:shadow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white font-semibold rounded-xl text-sm hover:border-white/20 transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
  
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient-static">Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Kumpulan project terbaik yang telah saya kerjakan — dari sistem informasi hingga website modern.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {projectCategories.map((cat) => (
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
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Modal — AnimatePresence wraps the conditional so exit animation plays */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
