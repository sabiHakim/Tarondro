// components/Contact.tsx
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-bold mb-16"
        >
          Commençons quelque chose
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:hello@agence.com"
            className="inline-block text-5xl md:text-8xl font-bold tracking-tight hover:scale-105 transition-transform duration-500"
          >
            hello@agence.com
          </a>
        </motion.div>

        <motion.div
          className="mt-24 text-xl opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>Paris • Disponible mondialement</p>
        </motion.div>
      </div>
    </section>
  );
}