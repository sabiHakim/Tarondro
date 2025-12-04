// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { ArrowDown, Sparkles } from "lucide-react";

// export default function HeroSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Parallaxe douce sur le titre
//   const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-emerald-50"
//     >
//       {/* Fond animé subtil avec grain + blob vert très doux */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-tr from-[#558B2F]/5 via-transparent to-[#558B2F]/10" />
//         <div className="absolute top-20 -left-40 w-96 h-96 bg-[#558B2F]/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#558B2F]/15 rounded-full blur-3xl animate-pulse delay-1000" />

//         {/* Grain texture (très tendance 2025) */}
//         <div className="absolute inset-0 opacity-40 mix-blend-soft-light">
//           <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
//         </div>
//       </div>

//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto"
//       >

//         {/* Titre principal – énorme et impactant */}
//         {/* <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//           className="text-6xl md:text-8xl lg:text-8xl font-black tracking-tighter text-neutral-900 leading-none mt-10"
//         >
//           TARONDRO
//           <span> </span>
//           <span className="text-[#558B2F] gap-x-10">CONCEPT</span>
//         </motion.h1> */}
//         <motion.h1
//           className="text-6xl md:text-6xl lg:text-7xl font-black tracking-tighter text-neutral-900 leading-none inline-flex flex-wrap justify-center mt-15"
//           aria-label="TARONDRO CONCEPT"
//         >
//           {"TARONDRO".split("").map((letter, i) => (
//             <motion.span
//               key={i}
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.5 + i * 0.08,
//                 ease: "easeOut",
//               }}
//               className="inline-block"
//             >
//               {letter === " " ? "\u00A0" : letter}
//             </motion.span>
//           ))}
//           <span className="w-4 md:w-10 lg:w-6" /> {/* espacement propre */}
//           {"CONCEPT".split("").map((letter, i) => (
//             <motion.span
//               key={i + 10}
//               initial={{ opacity: 0, y: 100, color: "#a0aec0" }}
//               animate={{ opacity: 1, y: 0, color: "#558B2F" }}
//               transition={{
//                 duration: 0.9,
//                 delay: 1.1 + i * 0.1,
//                 ease: "easeOut",
//               }}
//               className="inline-block"
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </motion.h1>
//         {/* Sous-titre qui claque */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="mt-8 text-2xl md:text-4xl font-light text-neutral-700"
//         >
//           Refonte de l’identité visuelle
//         </motion.h2>

//         {/* Description élégante */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1.2 }}
//           className="mt-10 max-w-4xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed font-light"
//         >
//           Refonte complète de l’identité visuelle de Tarondro Concept, une
//           start-up basée à Antananarivo désirant moderniser son image en 2024.
//           <br className="hidden md:block" />
//           L’objectif : créer une identité{" "}
//           <span className="font-semibold text-neutral-800">
//             contemporaine, chaleureuse et authentique
//           </span>{" "}
//           tout en préservant l’héritage artistique du visuel.
//         </motion.p>

//         {/* CTA + flèche qui descend doucement */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.6 }}
//           className="mt-5 flex flex-col items-center gap-8"
//         >
//           <a
//             href="#projet"
//             className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#558B2F] text-white font-semibold text-lg rounded-full hover:bg-[#446b23] transition-all duration-300 shadow-2xl hover:shadow-[#558B2F]/30"
//           >
//             DÉCOUVRIR LE PROJET
//             <ArrowDown className="w-rotate-90 group-hover:rotate-0 transition-transform duration-500" />
//           </a>

//           {/* Flèche qui pulse pour inciter au scroll */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//             className="text-[#558B2F]/60"
//           >
//             <ArrowDown className="w-8 h-8" />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Scroll indicator en bas */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.8 }}
//           className="text-neutral-400 text-sm tracking-widest"
//         >
//           SCROLL
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// src/components/HeroSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection({
  title = "TARONDRO",
  subtitle = "Refonte de l’identité visuelle",
  description = "Refonte complète de l’identité visuelle de Tarondro Concept...",
}: {
  title?: string;
  subtitle?: string;
  description?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
 const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-emerald-50">
      {/* Fond grain + blobs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#558B2F]/5 via-transparent to-[#558B2F]/10" />
        <div className="absolute top-20 -left-40 w-96 h-96 bg-[#558B2F]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#558B2F]/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light">
          <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto">
        {/* Titre animé lettre par lettre */}
        <motion.h1 className="text-6xl md:text-6xl lg:text-6xl font-black tracking-tighter text-neutral-900 leading-none inline-flex flex-wrap justify-center gap-x-4 mt-35 ">
          {title.split("").map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.07 }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
          {"CONCEPT".split("").map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, color: "#a0aec0" }}
              animate={{ opacity: 1, y: 0, color: "#558B2F" }}
              transition={{ duration: 0.9, delay: 1.2 + i * 0.1 }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-10 text-2xl md:text-4xl font-light text-neutral-700">
          {subtitle}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 1.2 }} className="mt-10 max-w-4xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed">
          {description}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-20">
          <a href="#projet" className="inline-flex items-center gap-4 px-10 py-5 bg-[#558B2F] text-white font-bold text-lg rounded-full hover:bg-[#446b23] shadow-2xl">
            DÉCOUVRIR <ArrowDown className="group-hover:translate-y-1 transition" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}