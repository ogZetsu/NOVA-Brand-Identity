"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { NOVA_PATTERNS, NovaPattern } from "@/data/novaData";
import { Sparkles, Layers } from "lucide-react";

export function NovaPatternGallery() {
  const [activePattern, setActivePattern] = useState<NovaPattern>(NOVA_PATTERNS[0]);
  const [activeMode, setActiveMode] = useState<"original" | "alternate" | "monochrome">("original");

  return (
    <section id="patterns" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="purple" className="uppercase font-mono text-[10px]">
            10 / PATTERN COLLECTION & INTERACTIVE SWITCHER
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Textile Pattern System
          </h2>
          <p className="text-sm text-charcoal-500 max-w-xl">
            Four signature repeating SVG pattern collections engineered to maintain visual clarity across diverse fabric scales and packaging materials.
          </p>
        </div>

        {/* Pattern Mode Controls */}
        <div className="flex flex-wrap gap-2 bg-cream-200 p-1.5 rounded-2xl border border-charcoal-500/10">
          {(["original", "alternate", "monochrome"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                activeMode === mode
                  ? "bg-charcoal-900 text-cream-100 shadow-md"
                  : "text-charcoal-500 hover:text-charcoal-900"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {NOVA_PATTERNS.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePattern(p)}
            className={`p-4 rounded-2xl text-left border transition-all ${
              activePattern.id === p.id
                ? "bg-charcoal-900 text-cream-100 border-charcoal-900 shadow-lg"
                : "bg-cream-100 text-charcoal-900 border-charcoal-500/10 hover:bg-cream-200"
            }`}
          >
            <span className="text-[10px] font-mono opacity-60 uppercase block">{p.name.split("/")[0]}</span>
            <span className="font-serif-editorial text-base font-bold block">{p.name.split("/")[1]}</span>
          </button>
        ))}
      </div>

      {/* Large Featured Pattern Display Hero */}
      <div className="card-cream rounded-3xl overflow-hidden border border-charcoal-500/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Left Interactive Pattern Preview Tile */}
        <div className="lg:col-span-7 relative min-h-[300px] border-b lg:border-b-0 lg:border-r border-charcoal-500/10">
          <NovaPatternSVG
            patternId={activePattern.id as any}
            mode={activeMode}
            className="w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-cream-100/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-charcoal-500/10 text-xs font-mono text-charcoal-900 font-bold">
            Vector SVG Repeat Tile Preview
          </div>
        </div>

        {/* Right Pattern Concept Details */}
        <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono text-peach-600 font-bold uppercase tracking-wider">
              {activePattern.name}
            </span>
            <h3 className="font-serif-editorial text-3xl font-bold text-charcoal-900">
              {activePattern.concept}
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              {activePattern.description}
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-charcoal-500/10 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-charcoal-500">COLORWAY</span>
              <span className="font-bold text-charcoal-900">{activePattern.colorway}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">KEY MOTIFS</span>
              <span className="font-bold text-charcoal-900">{activePattern.motifs.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
