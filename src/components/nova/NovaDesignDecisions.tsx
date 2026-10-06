import React from "react";
import { Badge } from "@/components/ui/Badge";
import { NOVA_DESIGN_DECISIONS } from "@/data/novaData";

export function NovaDesignDecisions() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="space-y-3">
        <Badge variant="cyan" className="uppercase font-mono text-[10px]">
          19 / CASE STUDY DESIGN DECISIONS
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          Strategic Rationale & Tradeoffs
        </h2>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Detailed documentation of why specific aesthetic choices were made during the visual design process.
        </p>
      </div>

      {/* Decisions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {NOVA_DESIGN_DECISIONS.map((item) => (
          <div key={item.number} className="card-cream p-8 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-charcoal-500/10 pb-4">
                <span className="font-serif-editorial text-3xl font-bold text-peach-600">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono uppercase text-charcoal-500 font-bold">
                  CASE STUDY DECISION
                </span>
              </div>
              <h3 className="font-serif-editorial text-xl font-bold text-charcoal-900">
                {item.title}
              </h3>
            </div>

            <div className="space-y-4 text-xs leading-relaxed">
              <div className="space-y-1 bg-cream-200/80 p-4 rounded-xl">
                <span className="font-mono text-charcoal-500 font-bold uppercase text-[10px] block">WHY:</span>
                <p className="text-charcoal-800">{item.why}</p>
              </div>
              <div className="space-y-1 bg-cream-100 p-4 rounded-xl border border-charcoal-500/10">
                <span className="font-mono text-peach-600 font-bold uppercase text-[10px] block">DESIGN RESPONSE:</span>
                <p className="text-charcoal-900 font-semibold">{item.response}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
