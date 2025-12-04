// src/components/project/ProjectLayout.tsx
"use client";
import { ReactNode } from "react";
import HeroSection from "../HeroSection";

export default function ProjectLayout({
  title = "PROJECT",
  subtitle = "Case Study",
  description = "",
  children,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <>
      <HeroSection title={title} subtitle={subtitle} description={description} />
      <main className="relative -mt-20 md:-mt-32 lg:-mt-40">{children}</main>
    </>
  );
}