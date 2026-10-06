import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Check, X } from "lucide-react";

export function NovaBeforeAfter() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="space-y-3">
        <Badge variant="purple" className="uppercase font-mono text-[10px]">
          20 / DESIGN DIRECTION EXPLORATION
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          Conceptual Transformation Study
        </h2>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Comparing generic, unstructured babywear branding conventions against NOVA’s cohesive, system-driven visual direction.
        </p>
      </div>

      {/* Before / After Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Before Tile */}
        <div className="p-8 rounded-3xl bg-rose-500/5 border border-rose-500/20 space-y-6">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
            <span className="font-mono text-xs font-bold text-rose-700 uppercase">
              GENERIC / UNSTRUCTURED DIRECTION
            </span>
            <X className="w-5 h-5 text-rose-600" />
          </div>

          <ul className="space-y-3 text-xs text-charcoal-700 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Overused cartoon figure illustrations diluting brand authority</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Hyper-vibrant primary colors creating visual noise</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Disconnected packaging, hang tag, and website graphics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>No repeating pattern signatures or design token rules</span>
            </li>
          </ul>
        </div>

        {/* After Tile */}
        <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-6">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-700 uppercase">
              NOVA SYSTEMIC DIRECTION
            </span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>

          <ul className="space-y-3 text-xs text-charcoal-800 font-semibold">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Refined Playfair & Inter editorial typography scale</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Restrained warm cream foundation with subtle pastel accents</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Unified vector repeating SVG patterns across all products</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Scalable design system from woven care tags to social feeds</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
