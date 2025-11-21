"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TextReveal from "./TextReveal";

export default function ContactSection() {
  useGSAP(() => {
    gsap.from(".contact-title", {
      y: 120,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: { trigger: ".contact-section", start: "top 70%" },
    });

    gsap.from(".contact-input", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: { trigger: ".contact-form", start: "top 80%" },
    });

    gsap.from(".contact-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      delay: 0.6,
      ease: "back.out(1.4)",
      scrollTrigger: { trigger: ".contact-form", start: "top 80%" },
    });
  }, []);

  return (
    <section id="contact" className="contact-section py-40 px-8 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        {/* Titre animé */}
        <h2 className="contact-title text-6xl md:text-8xl lg:text-9xl font-black text-amber-500 mb-12">
          Soyez les premiers
        </h2>

        <TextReveal className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed">
          Inscrivez-vous pour être averti du lancement officiel et bénéficier d’une offre exclusive réservée à nos premiers clients.
        </TextReveal>

        {/* Formulaire */}
        <form className="contact-form space-y-10">
          <input
            type="text"
            placeholder="Votre nom / Entreprise"
            className="contact-input w-full px-10 py-7 bg-white/5 border border-amber-500/30 rounded-full text-white placeholder-gray-500 text-lg focus:outline-none focus:border-amber-500 focus:bg-amber-500/5 transition-all duration-500"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="contact-input w-full px-10 py-7 bg-white/5 border border-amber-500/30 rounded-full text-white placeholder-gray-500 text-lg focus:outline-none focus:border-amber-500 focus:bg-amber-500/5 transition-all duration-500"
          />

          <button
            type="submit"
            className="contact-btn w-full py-7 bg-amber-500 text-black font-bold text-xl md:text-2xl rounded-full hover:bg-amber-400 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-amber-500/30"
          >
            Rester informé du lancement
          </button>
        </form>

        <p className="mt-10 text-gray-600 text-sm">
          Zero spam. Juste la bonne nouvelle quand on lance.
        </p>
      </div>
    </section>
  );
}