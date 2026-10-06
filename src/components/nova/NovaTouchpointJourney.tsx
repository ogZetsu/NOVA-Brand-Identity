import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Compass, ShoppingBag, Gift, Heart, Share2 } from "lucide-react";

export function NovaTouchpointJourney() {
  const steps = [
    { title: "DISCOVER", touchpoint: "Social Campaign", desc: "First impression through editorial grid posts and pattern highlights.", icon: Compass },
    { title: "EXPLORE", touchpoint: "Digital Portfolio", desc: "Interactive exploration of design tokens, color science, and apparel specs.", icon: ArrowRight },
    { title: "PURCHASE", touchpoint: "Online & Retail", desc: "Refined digital checkout with custom packaging selection.", icon: ShoppingBag },
    { title: "UNBOX", touchpoint: "Packaging Ecosystem", desc: "Tactile unboxing featuring patterned tissue wraps and debossed hang tags.", icon: Gift },
    { title: "WEAR", touchpoint: "Garment Essential", desc: "Soft organic cotton rompers engineered for everyday comfort.", icon: Heart },
    { title: "SHARE", touchpoint: "Community & UGC", desc: "Design-conscious parents sharing stories and brand moments.", icon: Share2 },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="space-y-3">
        <Badge variant="purple" className="uppercase font-mono text-[10px]">
          18 / BRAND TOUCHPOINT JOURNEY
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          The Experience Arc
        </h2>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Mapping how NOVA’s visual identity travels seamlessly across every customer touchpoint from discovery to unboxing.
        </p>
      </div>

      {/* Journey Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="card-cream p-5 rounded-2xl space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-peach-100 flex items-center justify-center text-peach-600">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-charcoal-500 font-bold uppercase block">
                  STEP 0{idx + 1}
                </span>
                <h3 className="font-serif-editorial text-base font-bold text-charcoal-900">
                  {s.title}
                </h3>
                <span className="text-[10px] font-mono text-peach-600 block">
                  {s.touchpoint}
                </span>
              </div>
              <p className="text-[11px] text-charcoal-500 leading-relaxed pt-2 border-t border-charcoal-500/10">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
