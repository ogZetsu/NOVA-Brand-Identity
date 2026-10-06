import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NovaSymbol } from "@/components/graphics/NovaLogos";

export function NovaLogoExploration() {
  const explorations = [
    {
      num: "01",
      title: "EXPLORING SOFTNESS",
      desc: "Initial sketches testing fluid cloud shapes combined with sans-serif lettering.",
      verdict: "Too cartoonish & loose.",
      svg: (
        <svg viewBox="0 0 80 80" className="w-12 h-12">
          <circle cx="40" cy="40" r="30" fill="#F3C7B5" opacity="0.4" />
          <path d="M25 45 C25 35 35 25 45 35 C55 35 55 45 45 50 Z" fill="#242424" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "TESTING LETTERFORM BALANCE",
      desc: "Standard geometric N monogram with sharp corners and rigid angles.",
      verdict: "Too cold & technical.",
      svg: (
        <svg viewBox="0 0 80 80" className="w-12 h-12">
          <rect x="20" y="20" width="40" height="40" fill="none" stroke="#242424" strokeWidth="4" />
          <path d="M25 55 V25 L55 55 V25" stroke="#242424" strokeWidth="4" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "REDUCING VISUAL COMPLEXITY",
      desc: "Simplifying stroke weights and introducing rounded line terminals.",
      verdict: "Promising structure.",
      svg: (
        <svg viewBox="0 0 80 80" className="w-12 h-12">
          <path d="M25 55 V25 C25 25 35 35 45 45 V25" stroke="#242424" strokeWidth="5" strokeLinecap="round" fill="none" />
          <circle cx="55" cy="25" r="4" fill="#C9DDEA" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "FINDING THE FINAL RHYTHM",
      desc: "Integrating a soft cloud stroke arc into the N-monogram leg.",
      verdict: "Final Selected Direction.",
      svg: <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-12 h-12" />,
    },
  ];

  return (
    <section id="identity" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="space-y-3">
        <Badge variant="cyan" className="uppercase font-mono text-[10px]">
          05 / LOGO DEVELOPMENT STORY
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          Iterative Exploration & Refinement
        </h2>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Tracing how the logo evolved from early soft cloud shapes into a precise, balanced monogram symbol that bridges playfulness with editorial restraint.
        </p>
      </div>

      {/* 4 Explorations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {explorations.map((item) => (
          <div key={item.num} className="card-cream p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-peach-600 font-bold">{item.num}</span>
                <div className="w-14 h-14 rounded-xl bg-cream-200 flex items-center justify-center border border-charcoal-500/10">
                  {item.svg}
                </div>
              </div>
              <h3 className="font-serif-editorial text-lg font-bold text-charcoal-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-charcoal-500/10 text-[11px] font-mono text-charcoal-900 font-bold">
              {item.verdict}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
