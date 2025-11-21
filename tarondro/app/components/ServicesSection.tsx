"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const services = [
  "Identité visuelle & Branding",
  "Direction artistique",
  "Packaging & Print",
  "Design digital",
  "Stratégie de marque",
  "Motion design",
];

export default function ServicesSection() {
  useGSAP(() => {
    gsap.from(".service-card", {
      y: 150,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section className="py-32 px-8 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-black text-amber-500 mb-20">
          Ce que nous allons proposer
        </h2>

        <div className="services-grid grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s}
              className="service-card p-12 border border-amber-500/30 rounded-3xl hover:bg-amber-500/5 transition backdrop-blur"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-amber-400">
                {s}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}