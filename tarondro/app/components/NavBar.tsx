// components/Navbar.tsx
"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Gestion du scroll (mais seulement si la souris NE flotte PAS dessus)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hovering) return; // empêche la disparition quand la souris est dessus

    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleMouseEnter = () => {
    setHovering(true);
    setHidden(false); // reste visible pendant le hover
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleClick = () => {
    setHidden(false);
  };

  return (
    <motion.nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#7CB342] border-b border-white/10"


    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
      <Link href="/" onClick={handleClick} className="flex items-center">
  <Image
    src="/tarondro_logo.png"        // mets ton image dans /public/logo.png
    alt="Logo Agence"
    width={120}            // ajuste la taille
    height={40}
    className="object-contain"
  />
</Link>


        <div className="flex gap-12 text-sm tracking-wider">
          <Link href="#works" onClick={handleClick} className="hover:text-white/60 transition">
            TRAVAUX
          </Link>
          <Link href="#about" onClick={handleClick} className="hover:text-white/60 transition">
            À PROPOS
          </Link>
          <Link href="#contact" onClick={handleClick} className="hover:text-white/60 transition">
            CONTACT
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
