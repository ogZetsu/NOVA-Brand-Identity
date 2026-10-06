import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "NOVA — Brand Identity & Graphic Design | Saimeen Shaikh",
  description:
    "NOVA is an independent conceptual babywear identity exploring branding, graphic design, pattern systems, packaging, social media and art direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#F8F4EC] text-[#242424] antialiased selection:bg-[#242424] selection:text-[#F8F4EC]`}
      >
        {children}
      </body>
    </html>
  );
}
