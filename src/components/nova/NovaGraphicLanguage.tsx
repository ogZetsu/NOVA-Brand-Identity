import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Cloud, Star, Leaf, Moon, Sun, Circle, ArrowRight } from "lucide-react";

export function NovaGraphicLanguage() {
  const progression = [
    {
      step: "01 / INDIVIDUAL MOTIF",
      title: "Soft Cloud Symbol",
      desc: "Hand-drawn organic arc with rounded line terminals.",
      visual: (
        <div className="w-12 h-12 rounded-xl bg-powder-100 flex items-center justify-center text-powder-600">
          <Cloud className="w-7 h-7" />
        </div>
      ),
    },
    {
      step: "02 / MOTIF COMBINATION",
      title: "Cloud & Sky Geometry",
      desc: "Pairing clouds with subtle dot accents and floating arcs.",
      visual: (
        <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center text-charcoal-900 gap-1">
          <Cloud className="w-5 h-5 text-powder-600" />
          <Circle className="w-3 h-3 fill-peach-500 text-peach-500" />
        </div>
      ),
    },
    {
      step: "03 / PRODUCT APPLICATION",
      title: "Little Clouds Pattern",
      desc: "Seamless repeating textile graphic on organic cotton rompers.",
      visual: (
        <div className="w-12 h-12 rounded-xl bg-charcoal-900 text-cream-100 flex items-center justify-center font-mono text-[10px] font-bold">
          ROMPER
        </div>
      ),
    },
  ];

  const motifs = [
    { name: "SOFT CLOUD", usage: "Everyday essentials, swaddle blanket repeats", icon: Cloud, color: "text-powder-600 bg-powder-100" },
    { name: "FOUR-POINT STAR", usage: "Celestial sleepwear & dream night collections", icon: Star, color: "text-lavender-600 bg-lavender-100" },
    { name: "SPROUTED LEAF", usage: "Botanical garden prints & organic cotton bibs", icon: Leaf, color: "text-sage-600 bg-sage-100" },
    { name: "CRESCENT MOON", usage: "Bedtime collections & packaging tissue seals", icon: Moon, color: "text-lavender-600 bg-lavender-100" },
    { name: "WARM SUNBURST", usage: "Morning playwear & bright accessories", icon: Sun, color: "text-peach-600 bg-peach-100" },
    { name: "TACTILE PEBBLE", usage: "Pattern accents & woven label stitching", icon: Circle, color: "text-charcoal-900 bg-cream-200" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="space-y-3">
        <Badge variant="cyan" className="uppercase font-mono text-[10px]">
          GRAPHIC MOTIF SYSTEM & PROGRESSION
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          Visual Motif Vocabulary
        </h2>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Tracing how individual organic vector shapes progress into combined graphics and full apparel applications.
        </p>
      </div>

      {/* Progression Steps (Motif -> Combination -> Application) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {progression.map((p) => (
          <div key={p.step} className="card-cream p-6 rounded-2xl space-y-4 border border-charcoal-500/10">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-peach-600 uppercase">
                {p.step}
              </span>
              {p.visual}
            </div>
            <div>
              <h3 className="font-serif-editorial text-lg font-bold text-charcoal-900">
                {p.title}
              </h3>
              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Motif Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {motifs.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.name} className="card-cream p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${m.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-charcoal-500 uppercase">
                  VECTOR MOTIF
                </span>
              </div>
              <div>
                <h3 className="font-serif-editorial text-base font-bold text-charcoal-900">
                  {m.name}
                </h3>
                <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                  {m.usage}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
