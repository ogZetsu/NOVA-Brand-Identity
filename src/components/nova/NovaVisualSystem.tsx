import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Layers, Grid } from "lucide-react";

export function NovaVisualSystem() {
  const matrix = [
    { touchpoint: "APPAREL", identity: "Woven Monogram Label", color: "Sage & Peach Trims", pattern: "Little Clouds Repeat", print: "Care Tag Spec" },
    { touchpoint: "PACKAGING", identity: "Embossed Blind Stamp", color: "Warm Cream Box", pattern: "Tissue & Box Lining", print: "FSC Uncoated Card" },
    { touchpoint: "SOCIAL", identity: "Avatar & Wordmark", color: "Pastel Feed Backgrounds", pattern: "Carousel Slide Motifs", print: "Digital 1:1 Grid" },
    { touchpoint: "PRINT", identity: "Editorial Hang Tag", color: "Charcoal Ink on Cream", pattern: "Motif Accent Seals", print: "350gsm Cotton Card" },
    { touchpoint: "DIGITAL", identity: "Favicon & Sticky Nav", color: "Dark/Cream Theme Tokens", pattern: "Interactive Pattern Switcher", print: "Responsive Layout" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="space-y-3">
        <Badge variant="purple" className="uppercase font-mono text-[10px]">
          16 / VISUAL DESIGN SYSTEM MATRIX
        </Badge>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
          System Consistency Across Touchpoints
        </h2>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Demonstrating how a single unified brand identity system adapts seamlessly across physical apparel, packaging, print collateral, and digital channels.
        </p>
      </div>

      {/* System Matrix Table */}
      <div className="card-cream rounded-3xl p-8 overflow-x-auto border border-charcoal-500/10 shadow-xl">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-charcoal-500/10 text-[10px] font-mono uppercase text-charcoal-500">
              <th className="py-3 px-4">TOUCHPOINT</th>
              <th className="py-3 px-4">IDENTITY BEHAVIOR</th>
              <th className="py-3 px-4">COLOR USAGE</th>
              <th className="py-3 px-4">PATTERN APPLICATION</th>
              <th className="py-3 px-4">MATERIAL / SPEC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-500/10 text-xs font-sans">
            {matrix.map((row) => (
              <tr key={row.touchpoint} className="hover:bg-cream-200/50 transition-colors">
                <td className="py-4 px-4 font-mono font-bold text-peach-600">{row.touchpoint}</td>
                <td className="py-4 px-4 text-charcoal-900 font-semibold">{row.identity}</td>
                <td className="py-4 px-4 text-charcoal-600">{row.color}</td>
                <td className="py-4 px-4 text-charcoal-600">{row.pattern}</td>
                <td className="py-4 px-4 text-charcoal-500 font-mono">{row.print}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
