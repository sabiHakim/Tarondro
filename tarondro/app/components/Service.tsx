// components/Services.tsx
"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Direction Artistique", desc: "Identité visuelle & storytelling" },
  { title: "Web Design", desc: "Interfaces uniques et immersives" },
  { title: "Développement", desc: "Next.js, Three.js, GSAP" },
  { title: "Motion Design", desc: "Animations sur mesure" },
];

export default function Services() {
  return (
    <section className="py-32 px-8 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold text-center mb-24"
        >
          Ce que nous faisons
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-4 transition">
                {service.title}
              </h3>
              <p className="text-lg opacity-60">{service.desc}</p>
              <div className="mt-8 w-0 group-hover:w-full h-px bg-white/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}