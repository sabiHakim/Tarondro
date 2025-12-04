"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hovering) return;
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 100) setHidden(true);
    else setHidden(false);
  });

  // Scroll fluide uniquement pour les sections internes
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-[#7CB342]/95 border-b border-white/10"
// className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl 
// bg-gradient-to-r from-white/10 via-[#7CB342]/30 to-white/10 
// border-b border-white/10"
className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl 
bg-gradient-to-r from-[#7CB342]/10 via-[#558B2F]/50 to-[#33691E]/95 
border-b border-white/10"


    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/tarondro_logo.png"
            alt="Tarondro Concept"
            width={100}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16 text-white text-sm tracking-widest font-medium">
          {/* Scroll fluide dans la même page */}
          <NavItem label="À PROPOS" id="about" onClick={scrollToSection} />
          <NavItem label="OBJECTIFS" id="objetifs" onClick={scrollToSection} />

          {/* Va directement à la page /contact */}
          <Link href="/contact" className="group relative block py-2">
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="block text-white"
                initial={{ rotateX: 0 }}
                whileHover={{ rotateX: 360 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                CONTACT
              </motion.span>

              <motion.span
                className="absolute inset-0 text-white/20"
                initial={{ rotateX: -180 }}
                whileHover={{ rotateX: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{
                  transform: "rotateX(180deg)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                CONTACT
              </motion.span>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-1/2 w-0 h-px bg-white"
              initial={{ width: 0, x: "-50%" }}
              whileHover={{ width: "100%", x: "-50%" }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="pointer-events-none absolute -inset-4 rounded-full bg-[#558B2F]/20 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-700 -z-10"
              whileHover={{ scale: 1.4 }}
            />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

// Garde NavItem pour les liens internes uniquement
function NavItem({
  label,
  id,
  onClick,
}: {
  label: string;
  id: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => onClick(e, id)}
      className="group relative block py-2"
    >
      <motion.div
        className="relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="block text-white"
          initial={{ rotateX: 0 }}
          whileHover={{ rotateX: 360 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {label}
        </motion.span>

        <motion.span
          className="absolute inset-0 text-white/20"
          initial={{ rotateX: -180 }}
          whileHover={{ rotateX: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            transform: "rotateX(180deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {label}
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 w-0 h-px bg-white"
        initial={{ width: 0, x: "-50%" }}
        whileHover={{ width: "100%", x: "-50%" }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="pointer-events-none absolute -inset-4 rounded-full bg-[#558B2F]/20 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-700 -z-10"
        whileHover={{ scale: 1.4 }}
      />
    </a>
  );
}
