"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function TextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const letters = textRef.current.innerText.split("");
    textRef.current.innerHTML = letters
      .map((letter) => `<span class="inline-block">${letter === " " ? "&nbsp;" : letter}</span>`)
      .join("");

    gsap.fromTo(
      textRef.current.querySelectorAll("span"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <p ref={textRef} className={`overflow-hidden ${className}`}>
      {children}
    </p>
  );
}