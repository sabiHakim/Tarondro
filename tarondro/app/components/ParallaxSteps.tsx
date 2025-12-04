"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface ParallaxStepsProps {
  steps: Step[];
}

export default function ParallaxSteps({ steps }: ParallaxStepsProps) {
  return (
    <div className="space-y-32">
      {steps.map((step, i) => (
        <StepCard key={i} step={step} index={i} />
      ))}
    </div>
  );
}

interface StepCardProps {
  step: Step;
  index: number;
}

function StepCard({ step, index }: StepCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  function handleMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(posX);
    y.set(posY);
  }

  function resetMove() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className={`
        relative flex flex-col md:flex-row items-center justify-between
        ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Numéro géant */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
                   -translate-y-1/2 text-[130px] md:text-[200px] 
                   font-black opacity-10 pointer-events-none select-none"
        initial={{ scale: 0.8, color: "#d1d5db" }}
        whileInView={{ scale: 1.1, color: "#558B2F" }}
        transition={{ duration: 1.2 }}
      >
        {step.num}
      </motion.div>

      {/* Carte 3D */}
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={resetMove}
        style={{ rotateX, rotateY }}
        className={`
          w-full max-w-xl bg-white rounded-3xl shadow-2xl 
          p-10 md:p-14 border border-neutral-100 
          transform-gpu transition-all duration-500 
          ${index % 2 === 0 ? "md:pl-20" : "md:pr-20"}
        `}
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className="w-14 h-14 bg-[#558B2F]/10 rounded-2xl 
                       flex items-center justify-center"
          >
            <CheckCircle2 className="w-8 h-8 text-[#558B2F]" />
          </motion.div>

          <span className="text-3xl font-black text-[#558B2F]">
            {step.num}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-neutral-900 mb-3">
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
  );
}
