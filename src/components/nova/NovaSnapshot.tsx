import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Sparkles, Layers, ShieldCheck, Check } from "lucide-react";

export function NovaSnapshot() {
  const metadata = [
    { label: "PROJECT", value: "NOVA" },
    { label: "TYPE", value: "Independent Concept Brand" },
    { label: "ROLE", value: "Brand Designer / Visual Designer" },
    {
      label: "DISCIPLINES",
      value: "Brand Identity, Graphic Design, Packaging, Pattern Design, Print Design, Social Media, Art Direction",
    },
    {
      label: "TOOLS & WORKFLOW",
      value: "Figma, Adobe Illustrator, Adobe InDesign, Photoshop / Mockup Workflows",
    },
  ];

  const principles = [
    {
      num: "01",
      title: "PLAYFUL",
      subtitle: "without becoming childish",
      description:
        "Using rounded organic curves and soft pastel accents that radiate gentle warmth while maintaining refined aesthetic restraint.",
    },
    {
      num: "02",
      title: "PREMIUM",
      subtitle: "without becoming cold",
      description:
        "Grounded in tactile cream paper textures and generous whitespace rather than clinical luxury minimalism.",
    },
    {
      num: "03",
      title: "SCALABLE",
      subtitle: "across physical & digital",
      description:
        "Custom SVG repeating patterns and uniform design tokens extending effortlessly from tiny woven labels to social grid posts.",
    },
  ];

  return (
    <section id="overview" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-20">
      {/* Project Snapshot Card */}
      <div className="card-cream rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-charcoal-500/10 pb-8 mb-8">
          <div>
            <Badge variant="cyan" className="mb-3 uppercase font-mono text-[10px]">
              01 / PROJECT SNAPSHOT
            </Badge>
            <h2 className="font-serif-editorial text-3xl md:text-4xl font-bold text-charcoal-900">
              Project Overview & Specification
            </h2>
          </div>
          <span className="text-xs font-mono text-charcoal-500 uppercase tracking-widest">
            Design Case Study Spec
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metadata.map((item) => (
            <div key={item.label} className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal-500">
                {item.label}
              </span>
              <p className="text-sm font-semibold text-charcoal-900 leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Challenge & 3 Principles */}
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge variant="purple" className="uppercase font-mono text-[10px]">
            02 / BRAND CHALLENGE
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900 leading-tight">
            “Designing a brand that grows with the little moments.”
          </h2>
          <p className="text-base text-charcoal-500 leading-relaxed">
            The core design challenge was creating a visual identity for a babywear concept that balances emotional warmth with sophisticated minimalism. The brand had to stand out in a saturated market often dominated by chaotic, overly childish graphics.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div
              key={p.num}
              className="card-cream p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="space-y-4">
                <span className="text-4xl font-serif-editorial font-bold text-peach-600 block">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-900 tracking-wider">
                    {p.title}
                  </h3>
                  <span className="text-xs font-mono italic text-charcoal-500 block">
                    {p.subtitle}
                  </span>
                </div>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
