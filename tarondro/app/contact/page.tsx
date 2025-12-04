// app/contact/page.tsx   ← crée ce fichier
"use client";

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
      const res = await fetch("https://formspree.io/f/xblrkglb", {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />

        <div className="relative z-10 text-center px-8">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-neutral-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {"CONTACT".split("").map((char, i) => (
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
            <motion.span
              className="block text-[#558B2F] mt-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              NOUS
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 text-2xl text-neutral-700 max-w-2xl mx-auto"
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
            <h2 className="text-4xl md:text-5xl font-black">
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
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-black">
              On est là pour vous
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#558B2F]/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#558B2F]" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Email</p>
                  <a
                    href="mailto:hello@tarondro.mg"
                    className="text-900 hover:text-[#558B2F] transition"
                  >
                    hello@tarondro.mg
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#558B2F]/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-[#558B2F]" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Téléphone</p>
                  <a
                    href="tel:+261340512345"
                    className="text-neutral-900 hover:text-[#558B2F] transition"
                  >
                    +261 34 05 123 45
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#558B2F]/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[#558B2F]" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Adresse</p>
                  <p className="text-neutral-600">
                    Lot IVG 73 Bis Ankadindramamy
                    <br />
                    Antananarivo, Madagascar
                  </p>
                </div>
              </div>
            </div>

            {/* Carte Google Maps – Antananarivo, Madagascar (centre-ville) */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.987156927613!2d47.519967614799!3d-18.909068987203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e0c0e6e6e6d%3A0x2d2e2e2e2e2e2e2e!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
