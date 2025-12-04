// src/components/project/ObjectivesGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Heart, Layers, Sparkles, ArrowUpRight } from "lucide-react";

const objectives = [
  { icon: Target, title: "Repositionner la marque" },
  { icon: Heart, title: "Engager le public" },
  { icon: Layers, title: "Cohérence visuelle" },
  { icon: Sparkles, title: "Expérience mémorable" },
];

export default function ObjectivesGrid() {
  return (
    <section  id="objetifs" className="py-32 bg-neutral-50" >
      <div className="max-w-7xl mx-auto px-8">
        {/* TITRE – lettre par lettre + ligne verte */}
        <div className="text-center mb-24">
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {"Objectifs".split("").map((char, i) => (
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
            whileInView={{ width: "12rem" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="h-2 bg-[#558B2F] rounded-full mx-auto mt-6"
          />
        </div>

        {/* CARTES – sans fond icône */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -20 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-12 text-center shadow-xl hover:shadow-2xl hover:shadow-[#558B2F]/25 transition-all duration-500">
                {/* ICÔNE SANS FOND – juste flottante */}
                <motion.div
                  className="mb-8 inline-block"
                  whileHover={{ scale: 1.25, rotate: 15 }}
                  transition={{ duration: 0.6 }}
                >
                  <obj.icon className="w-16 h-16 text-[#558B2F]" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  {obj.title}
                </h3>

                {/* Flèche qui monte au hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8"
                >
                  <ArrowUpRight className="w-7 h-7 mx-auto text-[#558B2F]" />
                </motion.div>
              </div>

              {/* Ombre verte douce qui apparaît au hover */}
              <motion.div
                className="absolute inset-x-6 -bottom-6 h-12 bg-[#558B2F]/20 blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 -z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}