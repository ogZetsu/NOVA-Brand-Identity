import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

export function NovaReflection() {
  const takeaways = [
    { num: "01", title: "Consistency creates recognition", desc: "A brand becomes memorable when every touchpoint speaks the exact same visual language." },
    { num: "02", title: "Playfulness needs restraint", desc: "Emotional warmth doesn't require visual chaos; soft palettes and quiet motifs carry lasting charm." },
    { num: "03", title: "Patterns can become a brand asset", desc: "Custom SVG pattern repeats extend brand identity far beyond the primary logo mark." },
    { num: "04", title: "A visual identity should scale across touchpoints", desc: "Designing for physical garments and unboxing packaging requires the same precision as digital screens." },
  ];

  return (
    <section id="reflection" className="py-20 px-6 max-w-7xl mx-auto space-y-16">
      <div className="space-y-3">
        <Badge variant="cyan" className="uppercase font-mono text-[10px]">
          21 / DESIGNER REFLECTION
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          What I Learned
        </h2>
        <p className="text-base text-charcoal-500 max-w-3xl leading-relaxed">
          “Designing NOVA helped me think beyond individual visuals and focus on how a brand behaves as a system across physical products, print collateral, and digital media.”
        </p>
      </div>

      {/* 4 Takeaways Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {takeaways.map((item) => (
          <div key={item.num} className="card-cream p-6 rounded-2xl space-y-3 flex flex-col justify-between">
            <div>
              <span className="font-serif-editorial text-3xl font-bold text-peach-600 block mb-2">
                {item.num}
              </span>
              <h3 className="font-serif-editorial text-lg font-bold text-charcoal-900">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-charcoal-500 leading-relaxed pt-2 border-t border-charcoal-500/10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Final Navigation Bar */}
      <div className="card-dark rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[10px] font-mono text-peach-300 uppercase tracking-widest block">
            PROJECT 02
          </span>
          <h3 className="font-serif-editorial text-3xl font-bold text-cream-100">
            NOVA Brand Identity Case Study
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="#hero">
            <Button variant="secondary" size="md" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Top of Case Study
            </Button>
          </Link>
          <div className="px-5 py-2.5 bg-white/10 text-gray-400 text-xs font-mono rounded-xl border border-white/10 cursor-not-allowed">
            MORE WORK / COMING SOON
          </div>
        </div>
      </div>
    </section>
  );
}
