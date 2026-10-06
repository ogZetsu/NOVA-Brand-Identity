"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { NOVA_PACKAGING_ITEMS, NovaPackagingItem } from "@/data/novaData";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { NovaSymbol } from "@/components/graphics/NovaLogos";
import { Package, Tag, Layers, Check } from "lucide-react";

export function NovaPackaging() {
  const [selectedItem, setSelectedItem] = useState<NovaPackagingItem | null>(null);

  const categories = ["Primary", "Secondary", "Inserts", "Labels"] as const;

  return (
    <section id="packaging" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="purple" className="uppercase font-mono text-[10px]">
            12 / PACKAGING ECOSYSTEM & MATERIALS
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Tactile Unboxing Experience
          </h2>
          <p className="text-sm text-charcoal-500 max-w-xl">
            A cohesive packaging architecture constructed with unbleached FSC cardboard, debossed cotton hang tags, pattern-printed tissue paper, and biodegradable seal stickers.
          </p>
        </div>
      </div>

      {/* Major Hero Packaging Composition */}
      <div className="card-cream rounded-3xl p-8 md:p-12 border border-charcoal-500/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden bg-cream-200 border border-charcoal-500/10 flex items-center justify-center p-8 group">
          <div className="absolute inset-0 opacity-20">
            <NovaPatternSVG patternId="explorer" mode="original" />
          </div>
          <div className="relative z-10 text-center bg-cream-100 p-8 rounded-2xl shadow-xl border border-charcoal-500/10 space-y-3">
            <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-12 h-12 mx-auto" />
            <h3 className="font-serif-editorial text-2xl font-bold tracking-widest text-charcoal-900">
              N O V A
            </h3>
            <span className="text-[10px] font-mono text-charcoal-500 uppercase tracking-widest block">
              Rigid Packaging Box & Embossed Seal
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            HERO PRESENTATION
          </Badge>
          <h3 className="font-serif-editorial text-3xl font-bold text-charcoal-900">
            Uncoated Rigid Box System
          </h3>
          <p className="text-sm text-charcoal-500 leading-relaxed">
            Engineered for long-term reusability in nursery storage. The rigid box features a blind-stamped motif on warm cream textured paperboard with custom interior pattern lining.
          </p>
        </div>
      </div>

      {/* Categorized Packaging Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NOVA_PACKAGING_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="card-cream p-6 rounded-2xl cursor-pointer space-y-4 hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-peach-600 font-bold uppercase tracking-widest">
                {item.category} PACKAGING
              </span>
              <Package className="w-4 h-4 text-charcoal-400 group-hover:text-charcoal-900 transition-colors" />
            </div>

            <div>
              <h4 className="font-serif-editorial text-lg font-bold text-charcoal-900 group-hover:text-peach-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-charcoal-500 mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-charcoal-500/10 text-[11px] font-mono text-charcoal-500 truncate">
              {item.material}
            </div>
          </div>
        ))}
      </div>

      {/* Packaging Detail Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || "Packaging Spec"}
      >
        {selectedItem && (
          <div className="space-y-6 text-sm">
            <div className="bg-cream-200 p-4 rounded-2xl space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-charcoal-500">CATEGORY:</span>
                <span className="font-bold text-charcoal-900">{selectedItem.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">MATERIAL:</span>
                <span className="font-bold text-charcoal-900">{selectedItem.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">FINISH:</span>
                <span className="font-bold text-charcoal-900">{selectedItem.finish}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-editorial text-lg font-bold text-charcoal-900">
                Design & Material Purpose
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
