import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaSymbol } from "@/components/graphics/NovaLogos";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { ArrowDown, Sparkles } from "lucide-react";

export function NovaHero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between py-16 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10">
      {/* Top Editorial Metadata Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal-500/10 pb-6 text-xs font-mono tracking-wider uppercase text-charcoal-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-peach-600 animate-pulse" />
          <span>PROJECT 02 / BRAND IDENTITY & GRAPHIC DESIGN</span>
        </div>
        <Badge variant="outline" className="text-[10px] uppercase font-mono tracking-widest border-charcoal-500/20 text-charcoal-900">
          INDEPENDENT CONCEPT PROJECT
        </Badge>
      </div>

      {/* Main Editorial Hero Layout */}
      <div className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Typography Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-peach-600">
              Visual Case Study
            </span>
            <h1 className="font-serif-editorial text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-charcoal-900 leading-[1.05]">
              N O V A
            </h1>
          </div>

          <p className="font-serif-editorial text-2xl md:text-3xl text-charcoal-800 italic leading-snug">
            “Soft beginnings. Designed with intention.”
          </p>

          <p className="text-base md:text-lg text-charcoal-500 leading-relaxed max-w-2xl">
            A conceptual babywear identity exploring how softness, pattern design, and thoughtful details can become a cohesive visual language across clothing, packaging, and digital touchpoints.
          </p>

          {/* Role & Discipline Metadata Pills */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-charcoal-500/10 text-xs">
            <div>
              <span className="block font-mono uppercase text-charcoal-500 text-[10px] tracking-widest mb-1">
                ROLE
              </span>
              <span className="font-semibold text-charcoal-900">
                Brand Designer / Visual Designer
              </span>
            </div>
            <div>
              <span className="block font-mono uppercase text-charcoal-500 text-[10px] tracking-widest mb-1">
                DISCIPLINES
              </span>
              <span className="font-semibold text-charcoal-900">
                Brand Identity / Graphic Design / Packaging / Pattern Design / Social Media / Art Direction
              </span>
            </div>
          </div>
        </div>

        {/* Right Composite Art Direction Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-200 p-8 border border-charcoal-500/10 shadow-2xl flex flex-col justify-between group">
            {/* Pattern Layer */}
            <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
              <NovaPatternSVG patternId="clouds" mode="original" />
            </div>

            {/* Floating Editorial Badge */}
            <div className="relative z-10 self-start bg-cream-100/90 backdrop-blur-md px-4 py-2 rounded-full border border-charcoal-500/10 shadow-sm flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-peach-600" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-charcoal-900">
                Brand Exploration v1.0
              </span>
            </div>

            {/* Center Logo Showcase */}
            <div className="relative z-10 text-center bg-cream-100/95 backdrop-blur-md p-8 rounded-2xl border border-charcoal-500/10 shadow-lg">
              <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-16 h-16 mx-auto mb-4" />
              <h2 className="font-serif-editorial text-3xl font-bold tracking-[0.2em] text-charcoal-900">
                N O V A
              </h2>
              <span className="text-[10px] uppercase font-mono tracking-widest text-charcoal-500">
                Babywear Concept
              </span>
            </div>

            {/* Bottom Metadata Label */}
            <div className="relative z-10 self-end text-[10px] font-mono uppercase text-charcoal-500 tracking-wider bg-cream-100/90 px-3 py-1.5 rounded-lg border border-charcoal-500/10">
              Tactile Materials & Pattern Systems
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="flex items-center justify-between text-xs text-charcoal-500 font-mono pt-6">
        <span>SCROLL TO EXPLORE CASE STUDY</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
