import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { NovaSymbol } from "@/components/graphics/NovaLogos";
import { Sparkles, Sun, Heart, Camera } from "lucide-react";

export function NovaArtDirection() {
  const applications = [
    { title: "APPAREL CAMPAIGN", desc: "Soft organic cotton rompers styled in natural morning light.", tag: "Apparel Application" },
    { title: "PACKAGING UNBOXING", desc: "Tactile cream rigid boxes sealed with patterned tissue paper.", tag: "Packaging Application" },
    { title: "SOCIAL MEDIA STORYTELLING", desc: "Editorial feed grid posts celebrating everyday micro-moments.", tag: "Digital Application" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            ART DIRECTION & CAMPAIGN CONCEPT
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Campaign: “Little Moments”
          </h2>
        </div>
        <p className="text-sm text-charcoal-500 max-w-md">
          A minimalist art direction narrative celebrating quiet morning routines, gentle textures, and thoughtful everyday parenting.
        </p>
      </div>

      {/* Hero Visual Campaign Spread */}
      <div className="card-cream rounded-3xl p-8 md:p-12 border border-charcoal-500/10 shadow-2xl space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-peach-600 font-bold uppercase">
              ART DIRECTION PHILOSOPHY
            </span>
            <h3 className="font-serif-editorial text-3xl font-bold text-charcoal-900">
              Soft, Warm & Tactile Storytelling
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              The “Little Moments” campaign avoids hyper-staged photography in favor of quiet, honest textures. Unbleached cotton weaves, warm sunlight gradients, and generous white space create an authentic connection with modern design-conscious families.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-charcoal-500">
              <span className="px-3 py-1 bg-cream-200 rounded-full">Soft Lighting</span>
              <span className="px-3 py-1 bg-cream-200 rounded-full">Natural Fabrics</span>
              <span className="px-3 py-1 bg-cream-200 rounded-full">Quiet Color Palettes</span>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-video bg-cream-200 rounded-2xl relative p-8 flex flex-col justify-between overflow-hidden border border-charcoal-500/10">
            <div className="absolute inset-0 opacity-30">
              <NovaPatternSVG patternId="garden" mode="original" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-8 h-8" />
              <span className="text-[10px] font-mono uppercase bg-cream-100/90 px-3 py-1 rounded-full text-charcoal-900 font-bold">
                CAMPAIGN SPECIMEN
              </span>
            </div>
            <div className="relative z-10 text-center bg-cream-100/95 p-6 rounded-xl border border-charcoal-500/10">
              <h4 className="font-serif-editorial text-2xl font-bold text-charcoal-900">
                LITTLE MOMENTS.
              </h4>
              <p className="font-serif-editorial italic text-xs text-charcoal-500 mt-1">
                Soft beginnings. Designed with intention.
              </p>
            </div>
          </div>
        </div>

        {/* Campaign Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-charcoal-500/10">
          {applications.map((app) => (
            <div key={app.title} className="p-4 rounded-xl bg-cream-200/60 space-y-2">
              <span className="text-[10px] font-mono text-peach-600 font-bold uppercase block">
                {app.tag}
              </span>
              <h4 className="font-serif-editorial text-base font-bold text-charcoal-900">
                {app.title}
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
