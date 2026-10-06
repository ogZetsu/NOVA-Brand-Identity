import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Heart, Compass, Shield, Sun } from "lucide-react";

export function NovaStrategy() {
  const values = [
    { title: "CURIOUS", desc: "Inviting exploration through gentle micro-details and soft organic shapes.", icon: Compass },
    { title: "GENTLE", desc: "Mindfully designed for delicate skin using peaceful color palettes.", icon: Heart },
    { title: "PLAYFUL", desc: "Subtle joy expressed through custom repeating textile motifs.", icon: Sun },
    { title: "THOUGHTFUL", desc: "Every seam, label, and packaging box carries purpose.", icon: Sparkles },
    { title: "MODERN", desc: "Editorial aesthetic created for contemporary design-conscious families.", icon: Shield },
  ];

  return (
    <section id="strategy" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            03 / BRAND STRATEGY & POSITIONING
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900 leading-tight">
            Strategic Brand Pillars
          </h2>
        </div>
        <p className="text-sm text-charcoal-500 max-w-md">
          “NOVA is a modern babywear concept designed for parents who appreciate thoughtful details, soft aesthetics and playful everyday essentials.”
        </p>
      </div>

      {/* Positioning Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className="card-cream p-6 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-peach-100 flex items-center justify-center text-peach-600">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-editorial text-xl font-bold text-charcoal-900 tracking-wider">
                  {v.title}
                </h3>
                <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Target Audience Visual Matrix */}
      <div className="card-dark rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-peach-300">
              AUDIENCE PROFILE
            </span>
            <h4 className="font-serif-editorial text-2xl font-bold text-cream-100 mt-2">
              Design-Conscious Families
            </h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Parents seeking minimalist, sustainable babywear options that align with modern interior and lifestyle aesthetics.
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-powder-300">
              BRAND PROMISE
            </span>
            <h4 className="font-serif-editorial text-2xl font-bold text-cream-100 mt-2">
              Intention & Softness
            </h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              A commitment to quiet design elegance without sacrificing the playful spirit of early childhood.
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-sage-300">
              VISUAL DIRECTION
            </span>
            <h4 className="font-serif-editorial text-2xl font-bold text-cream-100 mt-2">
              Editorial Lifestyle
            </h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Combining tactile packaging textures, organic repeating patterns, and generous white space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
