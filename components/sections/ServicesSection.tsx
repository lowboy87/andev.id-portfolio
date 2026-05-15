"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe, Database, Layout, User, Palette, BarChart3, ArrowRight, Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import { formatPrice, cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ElementType> = {
  Globe, Database, Layout, User, Palette, BarChart3,
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToOrder = () =>
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-sm">04.</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient-static">Services</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Layanan jasa digital premium untuk membantu bisnis dan instansi Anda berkembang secara online.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={cn(
                  "relative glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 group transition-all duration-300 overflow-hidden",
                  service.popular && "border-cyan-500/20 hover:border-cyan-500/30"
                )}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-full">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span className="text-xs text-cyan-400 font-medium">Popular</span>
                  </div>
                )}

                {/* Gradient BG on hover */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br", service.color)} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-5 group-hover:border-cyan-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-50 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/50">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <div className="text-xs text-white/30 mb-0.5">Mulai dari</div>
                      <div className="font-bold text-cyan-400 font-mono">
                        {formatPrice(service.startPrice)}
                      </div>
                    </div>
                    <motion.button
                      onClick={scrollToOrder}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-white glass border border-white/10 px-4 py-2 rounded-lg hover:border-cyan-500/30 hover:text-cyan-400 transition-all"
                    >
                      Pesan <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
