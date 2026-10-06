"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { NOVA_COLORS, NovaColor } from "@/data/novaData";
import { Sparkles, Check } from "lucide-react";

export function NovaColorSystem() {
  const [selectedColor, setSelectedColor] = useState<NovaColor>(NOVA_COLORS[0]);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            07 / COLOR SYSTEM & PALETTE SWATCHES
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Harmonious Pastel & Earth Palette
          </h2>
        </div>
        <p className="text-sm text-charcoal-500 max-w-md">
          A restrained color science built around a warm cream foundation, structured charcoal typography, and subtle pastel accents inspired by nature.
        </p>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NOVA_COLORS.map((color) => (
          <div
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={`card-cream rounded-2xl p-6 cursor-pointer space-y-4 transition-all ${
              selectedColor.name === color.name ? "ring-2 ring-charcoal-900 shadow-lg" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif-editorial text-lg font-bold text-charcoal-900">
                {color.name}
              </span>
              <span className="font-mono text-xs text-charcoal-500">{color.hex}</span>
            </div>

            {/* Visual Swatch */}
            <div
              className="w-full h-24 rounded-xl shadow-inner border border-charcoal-500/10"
              style={{ backgroundColor: color.hex }}
            />

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-500 font-bold">
                ROLE: {color.role}
              </span>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                {color.usage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Color Application Previewer */}
      <div className="card-dark rounded-3xl p-8 md:p-12 space-y-6">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <span className="text-xs font-mono uppercase text-peach-300 font-bold">
            INTERACTIVE PALETTE PREVIEW
          </span>
          <span className="text-xs font-mono text-gray-400">
            Active Selection: {selectedColor.name} ({selectedColor.hex})
          </span>
        </div>

        <div
          className="p-8 rounded-2xl transition-colors duration-500 border border-white/10 flex flex-col items-center text-center space-y-4"
          style={{ backgroundColor: selectedColor.hex, color: selectedColor.hex === "#242424" ? "#F8F4EC" : "#242424" }}
        >
          <Sparkles className="w-8 h-8" />
          <h3 className="font-serif-editorial text-3xl font-bold tracking-wider uppercase">
            N O V A
          </h3>
          <p className="font-serif-editorial italic text-sm max-w-md">
            “Soft beginnings. Designed with intention.”
          </p>
          <div className="text-[10px] font-mono tracking-widest uppercase opacity-80 pt-2">
            Applied Palette Spec — {selectedColor.role}
          </div>
        </div>
      </div>
    </section>
  );
}
