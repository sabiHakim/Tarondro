import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/NavBar";
import SmoothScroll from "./lib/lenis";

import {
  Inter,
  Roboto,
  Poppins,
  Montserrat,
  Manrope,
  Space_Grotesk,
  Outfit,
  Sora,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
}); //
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

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
      <body className={`${outfit.className} text-black overflow-x-hidden`}>
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
