import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const affigere = localFont({
  src: "../fonts/Affigere-Regular.otf",
  variable: "--font-display",
  weight: "400",
});

const fluxischElse = localFont({
  src: "../fonts/FluxischElse-Regular.otf",
  variable: "--font-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fuga Mediante — Indie is Dead, God Bless Fuga Mediante",
  description:
    "Nuevo disco de Fuga Mediante: Indie is Dead, God Bless Fuga Mediante. Mirá el videoclip de 'No Te Confundas Más'.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${affigere.variable} ${fluxischElse.variable} h-full`}
    >
      <body className="min-h-full bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
