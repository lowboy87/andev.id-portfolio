"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/data/index";
import { formatDate } from "@/lib/utils";

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="relative section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Latest <span className="text-gradient-static">Articles</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Artikel, tutorial, dan tips seputar web development dan teknologi modern.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl border border-white/5 hover:border-cyan-500/20 overflow-hidden group transition-all cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="h-44 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center text-5xl group-hover:from-cyan-500/15 group-hover:to-violet-500/15 transition-all">
                📝
              </div>

              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-white/30 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </span>
                </div>

                {/* Category */}
                <span className="text-xs font-mono text-cyan-400 glass border border-cyan-500/20 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>

                <h3 className="font-bold text-white mt-3 mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-white/50 line-clamp-2 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-white/30 flex items-center gap-0.5">
                      <Tag className="w-2.5 h-2.5" />{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-sm text-cyan-400 font-medium group/link">
                  Baca selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <button className="px-6 py-3 glass border border-white/10 text-white/70 font-semibold rounded-xl hover:text-white hover:border-white/20 transition-all text-sm">
            Lihat Semua Artikel
          </button>
        </motion.div>
      </div>
    </section>
  );
}
