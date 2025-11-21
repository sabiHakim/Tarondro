"use client";
import TextReveal from "./TextReveal";

export default function AboutSection() {
  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-6xl md:text-8xl font-black text-amber-500">
          Une nouvelle vision du design malgache
        </h2>

        <TextReveal className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Tarondro Concepte naît de l’envie de proposer un design authentique, moderne et ancré dans la culture malgache.
        </TextReveal>

        <TextReveal className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Le caméléon symbolise l’adaptation, la créativité et la transformation. C’est exactement ce que nous apportons à vos projets.
        </TextReveal>
      </div>
    </section>
  );
}