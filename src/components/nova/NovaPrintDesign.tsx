import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaSymbol, NovaWordmark } from "@/components/graphics/NovaLogos";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { FileText, Sparkles, Heart } from "lucide-react";

export function NovaPrintDesign() {
  const printItems = [
    {
      title: "Tactile Thank-You Card",
      type: "Packaging Insert",
      stock: "350gsm Heavy Uncoated Cream Stock",
      finish: "Blind Debossed Symbol & Charcoal Typography",
      content: "Thank you for welcoming NOVA into your home. Designed with softness and intention.",
    },
    {
      title: "Apparel Care & Instruction Card",
      type: "Garment Care Collateral",
      stock: "280gsm Recycled Cotton Card",
      finish: "Soy Ink Print with Micro Icon Symbols",
      content: "Machine wash gentle in cold water. Tumble dry low. 100% Organic Cotton.",
    },
    {
      title: "Editorial Hang Tag System",
      type: "Primary Product Label",
      stock: "400gsm Textured FSC Cardstock",
      finish: "Custom Die-Cut Corners with Organic Twine",
      content: "NOVA — Babywear Concept / Size: 0-3M",
    },
    {
      title: "Mini Brand Campaign Poster",
      type: "Retail & Exhibition Collateral",
      stock: "200gsm Matte Editorial Paper",
      finish: "Full-bleed Little Clouds repeat pattern with overlay title",
      content: "SOFT BEGINNINGS. DESIGNED WITH INTENTION.",
    },
  ];

  return (
    <section id="print" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            PRINT DESIGN & PHYSICAL COLLATERAL
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Physical Print System
          </h2>
          <p className="text-sm text-charcoal-500 max-w-xl">
            Demonstrating how NOVA's visual identity translates into tactile print collateral using textured unbleached papers, debossed finishes, and organic twine details.
          </p>
        </div>
      </div>

      {/* Print Collateral Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {printItems.map((item, idx) => (
          <div key={item.title} className="card-cream p-6 rounded-2xl space-y-5 flex flex-col justify-between hover:shadow-xl transition-shadow">
            {/* Visual Mockup Card Tile */}
            <div className="aspect-[4/3] bg-cream-200 rounded-xl relative p-4 flex flex-col justify-between overflow-hidden border border-charcoal-500/10">
              <div className="absolute inset-0 opacity-25">
                <NovaPatternSVG patternId={idx % 2 === 0 ? "clouds" : "garden"} mode="original" />
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-6 h-6" />
                <span className="text-[9px] font-mono uppercase bg-cream-100/90 px-2 py-0.5 rounded text-charcoal-900 font-bold">
                  PRINT 0{idx + 1}
                </span>
              </div>
              <div className="relative z-10 text-center bg-cream-100/95 p-3 rounded-lg border border-charcoal-500/10 space-y-1">
                <span className="font-serif-editorial text-xs font-bold block text-charcoal-900">
                  {item.title}
                </span>
                <span className="text-[9px] font-mono text-charcoal-500 block truncate">
                  {item.stock}
                </span>
              </div>
            </div>

            {/* Spec Info */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-peach-600 font-bold uppercase block">
                {item.type}
              </span>
              <h3 className="font-serif-editorial text-base font-bold text-charcoal-900">
                {item.title}
              </h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                {item.finish}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
