// app/contact/page.tsx   ← crée ce fichier
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Option 1 : Formspree (le plus simple – gratuit)
    try {
      const res = await fetch("https://formspree.io/f/xldqlena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* HERO CONTACT */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* === FOND IMAGE OPTIMISÉ + OVERLAY === */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/contact.jpeg" // ← Ton chemin d'image
            alt="Fond hero contact - Paysage professionnel pour contacter l'équipe"
            fill
            className="object-cover object-center"
            priority={true} // Charge en premier pour LCP optimal
            sizes="100vw" // Optimise pour full viewport
            quality={85} // Équilibre qualité/taille (défaut 75)
          />
          <div
            className="absolute inset-0 bg-neutral-900/60 z-10"
            aria-hidden="true"
          />
        </div>

        {/* === CONTENU (inchangé) === */}
        <div className="relative z-20 text-center px-8 max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-5xl lg:text-7xl font-black text-white drop-shadow-2xl inline-flex items-baseline flex-wrap leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {/* Lettres de "CONTACT" */}
            {"CONTACT".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 120 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 100 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {/* "NOUS" en vert */}
            <motion.span
              className="inline-block text-[#8BC34A] ml-6 md:ml-10 lg:ml-16 drop-shadow-lg"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            >
              NOUS
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-12 text-xl md:text-2xl lg:text-2xl text-white/90 font-light tracking-wide max-w-3xl mx-auto drop-shadow-md"
          >
            Parlons de votre projet. On vous répond en moins de 24h.
          </motion.p>
        </div>
      </section>

      {/* FORMULAIRE + INFOS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20">
          {/* FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-4xl font-black">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Votre nom"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-6 py-5 rounded-2xl border border-neutral-200 focus:border-[#558B2F] focus:outline-none transition text-lg"
              />
              <input
                type="email"
                placeholder="Votre email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-6 py-5 rounded-2xl border border-neutral-200 focus:border-[#558B2F] focus:outline-none transition text-lg"
              />
              <textarea
                placeholder="Votre message..."
                rows={6}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-6 py-5 rounded-2xl border border-neutral-200 focus:border-[#558B2F] focus:outline-none transition text-lg resize-none"
              />
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-6 bg-[#558B2F] text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-[#558B2F]/30 flex items-center justify-center gap-3 transition"
              >
                {status === "sending"
                  ? "Envoi en cours..."
                  : "Envoyer le message"}
                <Send className="w-6 h-6" />
              </motion.button>

              {status === "success" && (
                <p className="text-green-600 text-center font-bold text-xl">
                  Message envoyé ! On vous répond très vite
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-bold">
                  Erreur, réessayez
                </p>
              )}
            </form>
          </motion.div>

          {/* INFOS CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.4, // beaucoup plus long
              ease: [0.22, 1, 0.36, 1], // ease-out-cubic ultra smooth (très utilisé dans le luxe)
              delay: 0.2,
            }}
            className="space-y-16 md:space-y-20"
          >
            {/* Titre qui arrive lentement */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
              className="text-4xl md:text-4xl lg:text-4xl font-black text-neutral-900"
            >
              On est là pour vous
            </motion.h2>

            <div className="space-y-12 md:space-y-16">
              {/* Chaque bloc contact avec son propre stagger doux */}
              {[
                {
                  icon: <Mail className="w-9 h-9" />,
                  title: "Email",
                  content: (
                    <a
                      href="mailto:hello@tarondro.mg"
                      className="text-neutral-900 hover:text-[#558B2F] transition-colors duration-300"
                    >
                      hello@tarondro.mg
                    </a>
                  ),
                },
                {
                  icon: <Phone className="w-9 h-9" />,
                  title: "Téléphone",
                  content: (
                    <a
                      href="tel:+261340512345"
                      className="text-neutral-900 hover:text-[#558B2F] transition-colors duration-300"
                    >
                      +261 34 05 123 45
                    </a>
                  ),
                },
                {
                  icon: <MapPin className="w-9 h-9" />,
                  title: "Adresse",
                  content: (
                    <p className="text-neutral-600 leading-relaxed">
                      Lot IVG 73 Bis Ankadindramamy
                      <br />
                      Antananarivo, Madagascar
                    </p>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.6 + index * 0.25, // stagger très doux
                  }}
                  className="flex items-center gap-8 group"
                >
                  <div
                    className="w-20 h-20 bg-[#558B2F]/10 rounded-3xl flex items-center justify-center flex-shrink-0 
                        transition-all duration-500 group-hover:bg-[#558B2F]/20 
                        group-hover:scale-110"
                  >
                    <div className="text-[#558B2F] transition-transform duration-500 group-hover:scale-125">
                      {item.icon}
                    </div>
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-neutral-800 mb-1">
                      {item.title}
                    </p>
                    <div className="text-lg">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carte Google Maps – arrivée encore plus douce et avec un petit scale */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.2,
              }}
              className="rounded-3xl overflow-hidden shadow-2xl mt-20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.987156927613!2d47.519967614799!3d-18.909068987203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e0c0e6e6e6d%3A0x2d2e2e2e2e2e2e2e!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Notre localisation à Antananarivo"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
