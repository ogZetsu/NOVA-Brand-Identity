import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaSymbol } from "@/components/graphics/NovaLogos";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";

export function NovaTypography() {
  const typeScale = [
    { role: "DISPLAY TYPE", font: "Playfair Display Bold", size: "72px / 4.5rem", sample: "SOFT BEGINNINGS." },
    { role: "BODY TYPE", font: "Inter Sans Regular", size: "16px / 1.0rem", sample: "NOVA is a conceptual babywear identity exploring softness and intentional design." },
    { role: "CAPTION & LABEL TYPE", font: "Inter Mono Uppercase", size: "11px / 0.7rem", sample: "100% ORGANIC COTTON / FSC-CERTIFIED PACKAGING" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="space-y-3">
        <Badge variant="purple" className="uppercase font-mono text-[10px]">
          TYPOGRAPHY SYSTEM & APPLIED SPECIMENS
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          Editorial Typography Application
        </h2>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Demonstrating typography as active brand design across high-contrast editorial posters, product hang tags, and digital graphics.
        </p>
      </div>

      {/* Type Scale Specimen Table */}
      <div className="card-cream rounded-3xl p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-charcoal-500/10 pb-4 text-xs font-mono text-charcoal-500 uppercase">
          <span>ROLE / SPECIFICATION</span>
          <span>VISUAL SPECIMEN</span>
        </div>

        <div className="space-y-6 divide-y divide-charcoal-500/10">
          {typeScale.map((item) => (
            <div key={item.role} className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-4 space-y-1">
                <span className="text-xs font-mono font-bold text-peach-600 block">
                  {item.role}
                </span>
                <span className="text-xs text-charcoal-500 block font-mono">
                  {item.font} — {item.size}
                </span>
              </div>
              <div className="md:col-span-8">
                {item.role.includes("DISPLAY") ? (
                  <p className="font-serif-editorial text-3xl md:text-5xl text-charcoal-900 font-bold leading-tight">
                    {item.sample}
                  </p>
                ) : (
                  <p className="font-sans text-sm md:text-base text-charcoal-700 leading-relaxed">
                    {item.sample}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Applied Design Graphics (Editorial Poster, Hang Tag, Social Graphic) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Application 1: Editorial Poster */}
        <div className="card-cream p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden border border-charcoal-500/10 min-h-[340px]">
          <div className="absolute inset-0 opacity-15">
            <NovaPatternSVG patternId="clouds" mode="original" />
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-8 h-8" />
            <span className="text-[9px] font-mono uppercase font-bold text-charcoal-500">
              01 / EDITORIAL POSTER
            </span>
          </div>
          <div className="relative z-10 space-y-3">
            <h3 className="font-serif-editorial text-4xl font-bold text-charcoal-900 leading-tight">
              SOFT<br />BEGINNINGS.
            </h3>
            <p className="font-serif-editorial italic text-xs text-charcoal-600">
              Designed with intention.
            </p>
          </div>
          <div className="relative z-10 text-[9px] font-mono text-charcoal-500 uppercase tracking-widest pt-4 border-t border-charcoal-500/10">
            NOVA BABYWEAR CONCEPT — 2026
          </div>
        </div>

        {/* Application 2: Hang Tag Graphic */}
        <div className="card-cream p-8 rounded-3xl space-y-6 flex flex-col justify-between border border-charcoal-500/10 min-h-[340px]">
          <div className="flex items-center justify-between border-b border-charcoal-500/10 pb-4">
            <span className="text-[9px] font-mono uppercase font-bold text-charcoal-500">
              02 / PRODUCT HANG TAG
            </span>
            <span className="w-3 h-3 rounded-full border border-charcoal-500/30 bg-cream-200" />
          </div>
          <div className="text-center space-y-3 my-auto">
            <span className="font-serif-editorial text-3xl font-bold tracking-widest text-charcoal-900 block">
              N O V A
            </span>
            <span className="text-[10px] font-mono text-peach-600 font-bold uppercase tracking-wider block">
              100% Organic Cotton
            </span>
            <div className="py-2 border-y border-charcoal-500/10 text-[9px] font-mono text-charcoal-500 space-y-0.5">
              <p>SIZE: 0-3 MONTHS</p>
              <p>COLLECTION: LITTLE CLOUDS</p>
            </div>
          </div>
          <div className="text-[9px] font-mono text-charcoal-400 text-center uppercase">
            Designed for sensitive skin
          </div>
        </div>

        {/* Application 3: Social Media Graphic */}
        <div className="card-dark p-8 rounded-3xl space-y-6 flex flex-col justify-between border border-charcoal-500/20 min-h-[340px]">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono uppercase text-peach-300 font-bold">
              03 / SOCIAL GRAPHIC
            </span>
            <span className="text-[9px] font-mono text-gray-400">1:1 SQUARE</span>
          </div>
          <div className="space-y-4 my-auto">
            <NovaSymbol color="#F8F4EC" accentColor="#F3C7B5" className="w-10 h-10" />
            <h4 className="font-serif-editorial text-2xl font-bold text-cream-100 leading-snug">
              Every detail engineered for gentle routines.
            </h4>
          </div>
          <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest pt-4 border-t border-gray-800">
            @nova.babywear
          </div>
        </div>
      </div>
    </section>
  );
}
