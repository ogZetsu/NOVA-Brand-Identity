import React from "react";
import Link from "next/link";
import { NovaSymbol } from "@/components/graphics/NovaLogos";

export function Footer() {
  return (
    <footer className="w-full border-t border-charcoal-500/10 bg-cream-100 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-8 h-8" />
              <span className="font-serif-editorial text-2xl font-bold tracking-widest text-charcoal-900">
                N O V A
              </span>
            </div>
            <p className="text-xs text-charcoal-500 font-mono uppercase tracking-wider">
              Independent Concept Project — Saimeen Shaikh
            </p>
            <p className="text-xs text-charcoal-500 leading-relaxed max-w-sm">
              Brand Identity / Graphic Design / Packaging / Pattern Design / Art Direction / Visual Systems
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-3">
              <span className="font-mono text-charcoal-900 font-bold uppercase block text-[10px]">
                CASE STUDY
              </span>
              <ul className="space-y-2 text-charcoal-500 font-medium">
                <li><Link href="#overview" className="hover:text-charcoal-900 transition-colors">Overview</Link></li>
                <li><Link href="#identity" className="hover:text-charcoal-900 transition-colors">Identity</Link></li>
                <li><Link href="#patterns" className="hover:text-charcoal-900 transition-colors">Patterns</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-charcoal-900 font-bold uppercase block text-[10px]">
                TOUCHPOINTS
              </span>
              <ul className="space-y-2 text-charcoal-500 font-medium">
                <li><Link href="#packaging" className="hover:text-charcoal-900 transition-colors">Packaging</Link></li>
                <li><Link href="#social" className="hover:text-charcoal-900 transition-colors">Social</Link></li>
                <li><Link href="#mockups" className="hover:text-charcoal-900 transition-colors">Mockups</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-charcoal-900 font-bold uppercase block text-[10px]">
                PORTFOLIO
              </span>
              <ul className="space-y-2 text-charcoal-500 font-medium">
                <li><Link href="#hero" className="hover:text-charcoal-900 transition-colors">Back to Top</Link></li>
                <li><span className="text-charcoal-400">Project 02 Case Study</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Metadata Line */}
        <div className="pt-8 border-t border-charcoal-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-charcoal-500">
          <span>© 2026 NOVA Concept Project — Designed by Saimeen Shaikh</span>
          <span>Crafted with Next.js, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
