import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import SmoothScroll from "./lib/lenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Agence",
  description: "Agence créative digitale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} text-black overflow-x-hidden`}>
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}