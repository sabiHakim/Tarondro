"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  useGSAP(() => {
    gsap.from(".footer-item", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <footer className="py-24 px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo + texte */}
          <div className="footer-item text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-full flex items-center justify-center text-black font-black text-2xl">
                T
              </div>
              <div>
                <p className="text-3xl font-black text-white">TARONDRO</p>
                <p className="text-amber-500 text-xl tracking-wider">CONCEPTE</p>
              </div>
            </div>
            <p className="text-gray-500">Antananarivo • Madagascar • 2025</p>
          </div>

          {/* Liens sociaux */}
          <div className="footer-item flex gap-10">
            <a
              href="https://instagram.com/tarondroconcepte"
              target="_blank"
              className="text-4xl text-gray-400 hover:text-amber-500 transition transform hover:scale-125"
            >
              <Instagram />
            </a>
            <a
              href="https://linkedin.com/company/tarondroconcepte"
              target="_blank"
              className="text-4xl text-gray-400 hover:text-amber-500 transition transform hover:scale-125"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:hello@tarondro.mg"
              className="text-4xl text-gray-400 hover:text-amber-500 transition transform hover:scale-125"
            >
              <Mail />
            </a>
          </div>
        </div>

        <p className="footer-item text-center text-gray-600 mt-16 text-sm">
          © 2025 Tarondro Concepte. Tous droits réservés. Fière d’être malgache.
        </p>
      </div>
    </footer>
  );
}