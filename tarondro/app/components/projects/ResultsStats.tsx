// src/components/project/ResultsStats.tsx
"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Eye, Trophy } from "lucide-react";

type StatItem = {
  value: number | string;
  suffix?: string;
  label: string;
  icon: React.ElementType;
};
// iconique
const stats: StatItem[] = [
  { value: 35, suffix: "%", label: "d’engagement Instagram", icon: TrendingUp },
  { value: 100, suffix: "%", label: "de cohérence visuelle", icon: Eye },
  { value: "Marque ", label: "à Antananarivo", icon: Trophy },
];

export default function ResultsStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <section ref={ref} className="py-40 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* TITRE */}
        <div className="text-center mb-32">
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {"Résultats".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "16rem" }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="h-2 bg-[#558B2F] rounded-full mx-auto mt-8"
          />
        </div>

        {/* CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, isInView }: { stat: StatItem; index: number; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, typeof stat.value === "number" ? stat.value : 1, {
        duration: 2.5,
        delay: index * 0.3,
        ease: "easeOut",
      });
    }
  }, [isInView, count, index, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: index * 0.2 }} whileHover={{ y: -20 }} className="group relative">
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 hover:border-[#558B2F]/30 transition-all duration-500 h-full flex flex-col justify-center">
        {/* Icône */}
        <motion.div
          className="w-20 h-20 mx-auto mb-8 bg-[#558B2F]/10 rounded-3xl flex items-center justify-center"
          whileHover={{ scale: 1.2, rotate: 12 }}
          transition={{ duration: 0.6 }}
        >
          <stat.icon className="w-10 h-10 text-[#558B2F]" strokeWidth={1.8} />
        </motion.div>

        {/* VALEUR – "Marque iconique" est maintenant plus petit */}
        <div className="mb-6 flex items-end justify-center min-h-32">
          {typeof stat.value === "number" ? (
            <div className="text-7xl md:text-8xl font-black text-[#558B2F] leading-none">
              <motion.span>{rounded}</motion.span>
              <span className="text-6xl md:text-7xl">{stat.suffix}</span>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: index * 0.3 + 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#558B2F] leading-tight px-4"
            >
              {stat.value}
            </motion.div>
          )}
        </div>

        <p className="text-xl opacity-80 leading-relaxed mt-auto">{stat.label}</p>

        {/* Ombre verte au hover */}
        <motion.div className="absolute inset-x-8 -bottom-8 h-16 bg-[#558B2F]/20 blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 -z-10" />
      </div>
    </motion.div>
  );
}