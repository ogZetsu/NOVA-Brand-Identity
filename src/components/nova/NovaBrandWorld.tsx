import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaSymbol, NovaWordmark } from "@/components/graphics/NovaLogos";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { NovaGarmentSVG } from "@/components/graphics/NovaGarmentSVG";
import { Sparkles, Package, Tag, Heart } from "lucide-react";

export function NovaBrandWorld() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="purple" className="uppercase font-mono text-[10px]">
          THE COMPLETE BRAND ECOSYSTEM
        </Badge>
        <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-charcoal-900">
          The NOVA Brand World
        </h2>
        <p className="text-sm md:text-base text-charcoal-500 leading-relaxed">
          One unified visual identity seamlessly connecting logo design, custom pattern systems, tactile packaging, physical apparel, print collateral, and digital media.
        </p>
      </div>

      {/* Massive Unifying Visual Spread */}
      <div className="card-dark rounded-3xl p-8 md:p-12 border border-charcoal-500/20 shadow-2xl space-y-8 relative overflow-hidden">
        {/* Background Subtle Grid Accent */}
        <div className="absolute inset-0 opacity-10 bg-dark-grid bg-[size:40px_40px] pointer-events-none" />

        {/* Top Header Badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6 text-xs font-mono text-peach-300">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-peach-400" /> BRAND WORLD SPREAD — COMPREHENSIVE IDENTITY
          </span>
          <span className="text-gray-400">DESIGNED BY SAIMEEN SHAIKH</span>
        </div>

        {/* Grid of Unifying Elements */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Logo Mark */}
          <div className="bg-charcoal-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center space-y-4">
            <span className="text-[10px] font-mono text-gray-400 uppercase">01 / BRAND LOGO</span>
            <NovaSymbol color="#F8F4EC" accentColor="#F3C7B5" className="w-16 h-16" />
            <span className="font-serif-editorial text-xl font-bold text-cream-100 tracking-widest">N O V A</span>
          </div>

          {/* Card 2: Pattern System */}
          <div className="bg-charcoal-900 border border-gray-800 rounded-2xl p-4 relative overflow-hidden min-h-[160px] flex flex-col justify-between">
            <div className="absolute inset-0 opacity-40">
              <NovaPatternSVG patternId="clouds" mode="monochrome" />
            </div>
            <span className="relative z-10 text-[10px] font-mono text-cream-100 uppercase bg-charcoal-900/80 px-2 py-0.5 rounded self-start">
              02 / PATTERN SYSTEM
            </span>
            <span className="relative z-10 font-serif-editorial text-sm text-cream-100 font-bold bg-charcoal-900/80 p-2 rounded">
              Little Clouds Repeat
            </span>
          </div>

          {/* Card 3: Apparel Cutout */}
          <div className="bg-charcoal-900 border border-gray-800 rounded-2xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-gray-400 uppercase">03 / APPAREL APPLICATION</span>
            <NovaGarmentSVG type="romper" patternId="clouds" mode="alternate" className="w-full h-auto p-2" />
            <span className="text-[10px] font-mono text-gray-300 text-center">Cloud Romper</span>
          </div>

          {/* Card 4: Packaging & Print */}
          <div className="bg-charcoal-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between space-y-3">
            <span className="text-[10px] font-mono text-gray-400 uppercase">04 / PACKAGING & PRINT</span>
            <div className="bg-cream-100 text-charcoal-900 p-4 rounded-xl text-center space-y-1">
              <Package className="w-6 h-6 mx-auto text-peach-600" />
              <span className="font-serif-editorial text-xs font-bold block">Uncoated Rigid Box</span>
              <span className="text-[9px] font-mono text-charcoal-500 block">350gsm Cotton Hang Tag</span>
            </div>
          </div>
        </div>

        {/* Bottom Unifying Tagline */}
        <div className="relative z-10 text-center pt-4 border-t border-gray-800">
          <p className="font-serif-editorial text-xl italic text-cream-100">
            “Soft beginnings. Designed with intention.”
          </p>
        </div>
      </div>
    </section>
  );
}
