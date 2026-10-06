"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { NovaGarmentSVG } from "@/components/graphics/NovaGarmentSVG";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { NovaSymbol } from "@/components/graphics/NovaLogos";
import { Sparkles, Eye, Layers } from "lucide-react";

export function NovaProductGallery() {
  const [selectedMockup, setSelectedMockup] = useState<{
    title: string;
    category: string;
    pattern: string;
    colorway: string;
    notes: string;
  } | null>(null);

  const mockups = [
    {
      title: "NOVA Cloud Romper",
      category: "Apparel Essential",
      pattern: "Little Clouds",
      colorway: "Warm Cream / Powder Blue",
      notes: "Engineered pattern density for miniature garment scale.",
      colSpan: "lg:col-span-8",
      aspect: "aspect-[16/9]",
    },
    {
      title: "Rigid Packaging Box",
      category: "Packaging System",
      pattern: "Little Explorer",
      colorway: "Cream & Charcoal",
      notes: "Tactile unboxing experience with blind embossed monogram seal.",
      colSpan: "lg:col-span-4",
      aspect: "aspect-square",
    },
    {
      title: "Cotton Hang Tag",
      category: "Print Identity",
      pattern: "Monogram Seal",
      colorway: "Heavy Cream Stock",
      notes: "350gsm heavy cotton cardstock with organic cotton string.",
      colSpan: "lg:col-span-4",
      aspect: "aspect-square",
    },
    {
      title: "NOVA Dream Sleepwear",
      category: "Sleepwear Collection",
      pattern: "Moon & Dream",
      colorway: "Soft Lavender & Powder Blue",
      notes: "Seamless continuous pattern repeat for peaceful bedtime routines.",
      colSpan: "lg:col-span-8",
      aspect: "aspect-[16/9]",
    },
  ];

  return (
    <section id="mockups" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="purple" className="uppercase font-mono text-[10px]">
            14 / MOCKUP SHOWCASE & PRODUCT GALLERY
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Portfolio Visual Gallery
          </h2>
          <p className="text-sm text-charcoal-500 max-w-xl">
            A high-contrast visual hierarchy displaying hero mockups, medium detail compositions, and print identity artifacts.
          </p>
        </div>
      </div>

      {/* Asymmetric Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {mockups.map((item) => (
          <div
            key={item.title}
            onClick={() => setSelectedMockup(item)}
            className={`${item.colSpan} card-cream rounded-3xl overflow-hidden cursor-pointer group relative hover:shadow-2xl transition-all border border-charcoal-500/10`}
          >
            <div className={`w-full ${item.aspect} bg-cream-200 relative p-8 flex flex-col justify-between overflow-hidden`}>
              <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
                <NovaPatternSVG patternId={item.pattern.includes("Clouds") ? "clouds" : item.pattern.includes("Moon") ? "moon" : "explorer"} mode="original" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase bg-cream-100/90 px-3 py-1 rounded-full border border-charcoal-500/10 text-charcoal-900">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-charcoal-900" />
                </div>
              </div>

              <div className="relative z-10 bg-cream-100/95 backdrop-blur-md p-6 rounded-2xl border border-charcoal-500/10 space-y-1 self-start max-w-xs">
                <h3 className="font-serif-editorial text-xl font-bold text-charcoal-900">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-charcoal-500 block">
                  {item.pattern}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      <Modal
        isOpen={!!selectedMockup}
        onClose={() => setSelectedMockup(null)}
        title={selectedMockup?.title || "Mockup Details"}
      >
        {selectedMockup && (
          <div className="space-y-6 text-sm">
            <div className="bg-cream-200 p-4 rounded-2xl space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-charcoal-500">CATEGORY:</span>
                <span className="font-bold text-charcoal-900">{selectedMockup.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">PATTERN REPEAT:</span>
                <span className="font-bold text-charcoal-900">{selectedMockup.pattern}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">COLORWAY:</span>
                <span className="font-bold text-charcoal-900">{selectedMockup.colorway}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-editorial text-lg font-bold text-charcoal-900">
                Design Case Study Notes
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {selectedMockup.notes}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
