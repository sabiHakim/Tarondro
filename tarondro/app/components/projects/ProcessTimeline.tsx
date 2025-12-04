// // src/components/project/ProcessTimeline.tsx
// "use client";
// import { motion } from "framer-motion";
// const steps = [
//   { num: "01", title: "Analyse & Recherche", desc: "Immersion, moodboard, étude concurrentielle" },
//   { num: "02", title: "Conceptualisation", desc: "Logo, palette, typographie, motifs" },
//   { num: "03", title: "Développement", desc: "Prototypes, itérations, livrables complets" },
//   { num: "04", title: "Validation & Livraison", desc: "Révisions finales, charte graphique, fichiers sources" },
// ];

// export default function ProcessTimeline() {
//   return (
//     <section className="py-32 bg-white">
//       <div className="max-w-5xl mx-auto px-8">
//         <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-center mb-24">
//           Processus créatif
//         </motion.h2>

//         <div className="space-y-40">
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className={`flex items-center gap-12 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}
//             >
//               <div className="text-8xl font-black text-[#558B2F]/10 leading-none">{step.num}</div>
//               <div className="flex-1">
//                 <h3 className="text-4xl font-bold mb-4">{step.title}</h3>
//                 <p className="text-lg text-neutral-600">{step.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/project/ProcessTimeline.tsx
// src/components/project/ProcessTimeline.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowDown } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Analyse & Recherche",
    desc: "Immersion, moodboard, étude concurrentielle",
  },
  {
    num: "02",
    title: "Conceptualisation",
    desc: "Logo, palette, typographie, motifs",
  },
  {
    num: "03",
    title: "Développement",
    desc: "Prototypes, itérations, livrables complets",
  },
  {
    num: "04",
    title: "Validation & Livraison",
    desc: "Révisions finales, charte graphique, fichiers sources",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-8">
        {/* TITRE */}
        <div className="text-center mb-32">
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
            {"Processus créatif".split("").map((char, i) => (
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
            whileInView={{ width: "14rem" }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="h-2 bg-[#558B2F] rounded-full mx-auto mt-8"
          />
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Ligne centrale */}
          {/* Ligne centrale – CORRIGÉ */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-[#558B2F]/10 rounded-full"
            style={{
              height: "100%",
              transformOrigin: "top", // ← tout dans un seul style
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                className={`relative flex items-center justify-between ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Numéro géant */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 text-9xl font-black opacity-10"
                  initial={{ scale: 0.8, color: "#e5e7eb" }}
                  whileInView={{ scale: 1.1, color: "#558B2F" }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                >
                  {step.num}
                </motion.div>

                {/* Carte */}
                <motion.div
                  className={`w-full max-w-md ${
                    i % 2 === 0 ? "text-left pl-20" : "text-right pr-20"
                  }`}
                
                >
                  <motion.div
                    className="bg-white rounded-3xl p-10 shadow-xl  border-neutral-100 transition-all duration-500 group"
                  
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        className="w-14 h-14 bg-[#558B2F]/10 rounded-2xl flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-8 h-8 text-[#558B2F]" />
                      </motion.div>
                      <span className="text-3xl font-black text-[#558B2F]">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="mt-6"
                    >
                      <ArrowDown className="w-6 h-6 mx-auto text-[#558B2F] group-hover:translate-y-2 transition" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
