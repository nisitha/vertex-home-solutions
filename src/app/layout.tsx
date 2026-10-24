import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vertex Home Solutions | High-Efficiency Solar & Smart Energy",
  description:
    "Vertex Home Solutions delivers state-of-the-art residential solar energy, battery storage, and smart home power management systems for clean, reliable power.",
  keywords: [
    "Solar Energy",
    "Vertex Home Solutions",
    "Residential Solar Panels",
    "Battery Storage",
    "Clean Energy",
    "Smart Home Power",
  ],
  authors: [{ name: "Vertex Home Solutions" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-charcoal antialiased selection:bg-lime selection:text-charcoal relative">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
