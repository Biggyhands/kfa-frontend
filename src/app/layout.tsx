import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";

import "./globals.css";

import type { RootLayoutProps } from "@/utils/types";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kyokushin Fight Academy | KFA Plus",
    template: "%s | KFA Plus",
  },
  description:
    "Fundación Kyokushin Fight Academy — deporte, disciplina y formación marcial.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
