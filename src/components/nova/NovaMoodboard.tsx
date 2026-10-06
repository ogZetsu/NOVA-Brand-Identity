import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { Sparkles, Sun, Cloud, Moon, Leaf } from "lucide-react";

export function NovaMoodboard() {
  const moodTiles = [
    {
      title: "SOFT FABRICS & TEXTURE",
      category: "Material Study",
      content: (
        <div className="w-full h-full bg-cream-200 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-peach-300/40 blur-xl absolute -top-5 -left-5" />
          <span className="text-[10px] font-mono uppercase text-charcoal-500 z-10">01 / TACTILE TOUCH</span>
          <div className="z-10 space-y-1">
            <h4 className="font-serif-editorial text-xl font-bold text-charcoal-900">Organic Cotton Knit</h4>
            <p className="text-xs text-charcoal-500">Unbleached natural weaves</p>
          </div>
        </div>
      ),
      colSpan: "lg:col-span-4",
    },
    {
      title: "EDITORIAL TYPOGRAPHY",
      category: "Type & Scale",
      content: (
        <div className="w-full h-full bg-charcoal-900 p-6 text-cream-100 flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase text-peach-300">02 / SPECIMEN</span>
          <div className="space-y-1">
            <span className="font-serif-editorial text-4xl italic font-bold">Nova.</span>
            <p className="text-xs text-gray-400 font-sans">Playfair Display & Inter</p>
          </div>
        </div>
      ),
      colSpan: "lg:col-span-4",
    },
    {
      title: "ORGANIC MOTIF STUDY",
      category: "Graphic Language",
      content: (
        <div className="w-full h-full bg-powder-100 p-6 flex items-center justify-center relative">
          <div className="flex gap-4 items-center">
            <Cloud className="w-8 h-8 text-powder-600 animate-pulse" />
            <Moon className="w-8 h-8 text-lavender-600" />
            <Leaf className="w-8 h-8 text-sage-600" />
            <Sun className="w-8 h-8 text-peach-600" />
          </div>
        </div>
      ),
      colSpan: "lg:col-span-4",
    },
    {
      title: "PASTEL COLOR SCIENCE",
      category: "Palette Exploration",
      content: (
        <div className="w-full h-full grid grid-cols-4 gap-2 p-4 bg-cream-100 border border-charcoal-500/10">
          <div className="bg-[#F8F4EC] rounded-lg p-2 border border-charcoal-500/10 flex flex-col justify-end text-[9px] font-mono text-charcoal-900">CREAM</div>
          <div className="bg-[#F3C7B5] rounded-lg p-2 flex flex-col justify-end text-[9px] font-mono text-charcoal-900">PEACH</div>
          <div className="bg-[#C9DDEA] rounded-lg p-2 flex flex-col justify-end text-[9px] font-mono text-charcoal-900">BLUE</div>
          <div className="bg-[#B8C8B5] rounded-lg p-2 flex flex-col justify-end text-[9px] font-mono text-charcoal-900">SAGE</div>
        </div>
      ),
      colSpan: "lg:col-span-6",
    },
    {
      title: "TEXTILE PATTERN REPEAT",
      category: "Pattern System",
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-xl border border-charcoal-500/10 min-h-[160px]">
          <NovaPatternSVG patternId="explorer" mode="original" />
          <div className="absolute bottom-3 right-3 bg-cream-100/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono text-charcoal-900 font-bold">
            Little Explorer Repeat
          </div>
        </div>
      ),
      colSpan: "lg:col-span-6",
    },
  ];

  return (
    <section id="moodboard" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="purple" className="uppercase font-mono text-[10px]">
            04 / ART DIRECTION MOODBOARD
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Visual Exploration & Aesthetics
          </h2>
        </div>
        <p className="text-sm text-charcoal-500 max-w-md">
          A designer’s curation of tactile surfaces, editorial typography, pastel palettes, and hand-drawn organic shapes that set the tone for NOVA.
        </p>
      </div>

      {/* Moodboard Masonry Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {moodTiles.map((tile, idx) => (
          <div
            key={idx}
            className={`${tile.colSpan} card-cream rounded-2xl overflow-hidden min-h-[180px] flex flex-col justify-between hover:shadow-lg transition-shadow`}
          >
            {tile.content}
          </div>
        ))}
      </div>
    </section>
  );
}
