// src/components/project/FinalCTA.tsx
"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-4xl mx-auto text-center px-8">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black mb-10">
          Prêt à transformer votre marque ?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-neutral-600 mb-12">
          Chez <strong>Tarondro Concept</strong>, chaque projet est une opportunité de raconter une histoire unique.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-6 bg-[#558B2F] text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-[#558B2F]/40"
        >
          Démarrer votre projet
        </motion.a>
      </div>
    </section>
  );
}