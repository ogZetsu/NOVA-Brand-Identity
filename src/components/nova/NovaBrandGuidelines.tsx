"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaSymbol, NovaWordmark } from "@/components/graphics/NovaLogos";
import { NOVA_COLORS } from "@/data/novaData";
import { BookOpen, Check, Layers } from "lucide-react";

export function NovaBrandGuidelines() {
  const [activeTab, setActiveTab] = useState<"IDENTITY" | "COLOR" | "TYPE" | "PATTERN" | "APPLICATION">("IDENTITY");

  const tabs = ["IDENTITY", "COLOR", "TYPE", "PATTERN", "APPLICATION"] as const;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            15 / INTERACTIVE BRAND GUIDELINES
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Brand Standards Manual
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 bg-cream-200 p-1.5 rounded-2xl border border-charcoal-500/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                activeTab === tab
                  ? "bg-charcoal-900 text-cream-100 shadow-md"
                  : "text-charcoal-500 hover:text-charcoal-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Display Box */}
      <div className="card-cream rounded-3xl p-8 md:p-12 min-h-[300px] border border-charcoal-500/10 shadow-xl">
        {activeTab === "IDENTITY" && (
          <div className="space-y-6">
            <h3 className="font-serif-editorial text-2xl font-bold text-charcoal-900">
              Logo Standards & Clear Space
            </h3>
            <p className="text-sm text-charcoal-500 leading-relaxed max-w-2xl">
              The primary NOVA mark consists of the rounded N-monogram and editorial serif typography. Clear space of 1.5X must be preserved around all edges.
            </p>
            <div className="pt-4 flex flex-wrap gap-8 items-center">
              <NovaWordmark className="scale-110" />
              <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-16 h-16" />
            </div>
          </div>
        )}

        {activeTab === "COLOR" && (
          <div className="space-y-6">
            <h3 className="font-serif-editorial text-2xl font-bold text-charcoal-900">
              Color Token Rules
            </h3>
            <p className="text-sm text-charcoal-500 leading-relaxed max-w-2xl">
              Warm Cream (#F8F4EC) and Warm Charcoal (#242424) act as the foundational canvas. Pastel accents (Peach, Blue, Sage, Lavender) are reserved for pattern accents and product highlights.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 pt-2">
              {NOVA_COLORS.map((c) => (
                <div key={c.name} className="p-3 rounded-xl border border-charcoal-500/10 text-[10px] font-mono space-y-2">
                  <div className="w-full h-8 rounded-md" style={{ backgroundColor: c.hex }} />
                  <span className="block font-bold text-charcoal-900">{c.name}</span>
                  <span className="text-charcoal-500">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "TYPE" && (
          <div className="space-y-6">
            <h3 className="font-serif-editorial text-2xl font-bold text-charcoal-900">
              Typographic Hierarchy Rules
            </h3>
            <p className="text-sm text-charcoal-500 leading-relaxed max-w-2xl">
              Playfair Display is exclusively used for major editorial headlines and logo wordmarks. Inter sans-serif handles body text, captions, and product metadata.
            </p>
            <div className="p-4 bg-cream-200 rounded-xl font-mono text-xs text-charcoal-900 space-y-1">
              <p>DISPLAY: Playfair Display Bold (Tracking +0.2em)</p>
              <p>HEADINGS: Playfair Display Bold / Italic</p>
              <p>BODY: Inter Regular (Line height 1.6)</p>
              <p>METADATA: Inter Mono Uppercase (Tracking +0.25em)</p>
            </div>
          </div>
        )}

        {activeTab === "PATTERN" && (
          <div className="space-y-6">
            <h3 className="font-serif-editorial text-2xl font-bold text-charcoal-900">
              Pattern Repeat & Scaling Rules
            </h3>
            <p className="text-sm text-charcoal-500 leading-relaxed max-w-2xl">
              Patterns must scale proportionally to the garment or box surface. Never distort repeat tile aspect ratios. Maintain contrast between pattern line art and garment background colors.
            </p>
          </div>
        )}

        {activeTab === "APPLICATION" && (
          <div className="space-y-6">
            <h3 className="font-serif-editorial text-2xl font-bold text-charcoal-900">
              Apparel & Packaging Application Rules
            </h3>
            <p className="text-sm text-charcoal-500 leading-relaxed max-w-2xl">
              Use eco-friendly FSC papers and organic cotton inks. All physical touchpoints must carry the NOVA brand promise and care specifications.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
