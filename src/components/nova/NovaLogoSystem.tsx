"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  NovaPrimaryLogo,
  NovaWordmark,
  NovaSymbol,
  NovaLogoConstruction,
} from "@/components/graphics/NovaLogos";
import { Check, X } from "lucide-react";

export function NovaLogoSystem() {
  const [activeLogoTab, setActiveLogoTab] = useState<"primary" | "secondary" | "monogram" | "monochrome">("primary");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="purple" className="uppercase font-mono text-[10px]">
            06 / FINAL LOGO SYSTEM & INTERACTIVE SWITCHER
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            The Brand Mark Architecture
          </h2>
        </div>

        {/* Interactive Logo Switcher Controls */}
        <div className="flex flex-wrap gap-2 bg-cream-200 p-1.5 rounded-2xl border border-charcoal-500/10">
          {(["primary", "secondary", "monogram", "monochrome"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveLogoTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                activeLogoTab === tab
                  ? "bg-charcoal-900 text-cream-100 shadow-md"
                  : "text-charcoal-500 hover:text-charcoal-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Display Card */}
      <div className="card-cream rounded-3xl p-12 flex items-center justify-center min-h-[320px] relative overflow-hidden transition-all">
        {activeLogoTab === "primary" && <NovaPrimaryLogo className="scale-110" />}
        {activeLogoTab === "secondary" && <NovaWordmark className="scale-125" />}
        {activeLogoTab === "monogram" && (
          <div className="text-center space-y-3">
            <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-24 h-24 mx-auto" />
            <span className="text-xs font-mono text-charcoal-500 uppercase tracking-widest block">
              Symbol Monogram Mark
            </span>
          </div>
        )}
        {activeLogoTab === "monochrome" && (
          <div className="bg-charcoal-900 text-cream-100 p-12 rounded-2xl w-full max-w-md text-center">
            <NovaPrimaryLogo color="#F8F4EC" accentColor="#F8F4EC" />
          </div>
        )}
      </div>

      {/* Construction Grid & Technical Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 card-cream p-8 rounded-3xl space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500">
            GEOMETRIC CONSTRUCTION GRID
          </span>
          <NovaLogoConstruction />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-serif-editorial text-2xl font-bold text-charcoal-900">
            Logo Application Guidelines
          </h3>
          <p className="text-sm text-charcoal-500 leading-relaxed">
            The NOVA mark requires strict adherence to clear space and scale guidelines to ensure visual legibility across woven labels, tissue wraps, and digital viewports.
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-charcoal-500/10 flex items-center justify-between text-xs">
              <span className="font-mono text-charcoal-500">CLEAR SPACE</span>
              <span className="font-bold text-charcoal-900">Minimum 1.5X height around all borders</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-charcoal-500/10 flex items-center justify-between text-xs">
              <span className="font-mono text-charcoal-500">MINIMUM SIZE (PRINT)</span>
              <span className="font-bold text-charcoal-900">12mm width for apparel hang tags</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-charcoal-500/10 flex items-center justify-between text-xs">
              <span className="font-mono text-charcoal-500">MINIMUM SIZE (DIGITAL)</span>
              <span className="font-bold text-charcoal-900">24px for favicon and app icons</span>
            </div>
          </div>
        </div>
      </div>

      {/* Do / Don't Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <Check className="w-5 h-5" /> DO
          </div>
          <p className="text-xs text-charcoal-800 leading-relaxed">
            Maintain equal clear space, use approved pastel accents on cream or charcoal foundations, and ensure vector crispness.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-3">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
            <X className="w-5 h-5" /> DON'T
          </div>
          <p className="text-xs text-charcoal-800 leading-relaxed">
            Do not stretch or distort letterforms, apply drop shadows, or place the mark on low-contrast patterned backgrounds.
          </p>
        </div>
      </div>
    </section>
  );
}
