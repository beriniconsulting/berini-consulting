import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yacine Berini — Consultant Transformation Digitale & Adoption IA",
  description: "Consultant transformation digitale, AMOA, change management, adoption des outils numériques et IA générative.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
