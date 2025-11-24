// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          AGENCE
        </Link>

        <div className="flex gap-12 text-sm tracking-wider">
          <Link href="#works" className="hover:text-white/60 transition">
            TRAVAUX
          </Link>
          <Link href="#about" className="hover:text-white/60 transition">
            À PROPOS
          </Link>
          <Link href="#contact" className="hover:text-white/60 transition">
            CONTACT
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}