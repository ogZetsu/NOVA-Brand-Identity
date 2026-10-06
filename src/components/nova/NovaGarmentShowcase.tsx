"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { NovaGarmentSVG } from "@/components/graphics/NovaGarmentSVG";
import { NOVA_GARMENTS, NovaGarment } from "@/data/novaData";
import { Sparkles, ArrowRight } from "lucide-react";

export function NovaGarmentShowcase() {
  const [selectedGarment, setSelectedGarment] = useState<NovaGarment | null>(null);

  const garmentsList: Array<{ id: NovaGarment["id"]; type: "romper" | "tshirt" | "hoodie" | "sleepwear" | "bib"; name: string; patternId: "clouds" | "garden" | "moon" | "explorer" }> = [
    { id: "romper", type: "romper", name: "NOVA Cloud Romper", patternId: "clouds" },
    { id: "tshirt", type: "tshirt", name: "NOVA Organic Pocket Tee", patternId: "garden" },
    { id: "hoodie", type: "hoodie", name: "NOVA Fleece Knit Hoodie", patternId: "explorer" },
    { id: "sleepwear", type: "sleepwear", name: "NOVA Dream Two-Piece Set", patternId: "moon" },
    { id: "bib", type: "bib", name: "NOVA Organic Cotton Bib", patternId: "garden" },
  ];

  return (
    <section id="garments" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            11 / BABYWEAR APPAREL APPLICATIONS
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Vector Garment Mockup System
          </h2>
          <p className="text-sm text-charcoal-500 max-w-xl">
            Translating digital pattern systems onto physical babywear silhouettes with meticulous attention to seam scale, pattern density, and trim placements.
          </p>
        </div>
      </div>

      {/* Garments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {garmentsList.map((item) => {
          const garSpec = NOVA_GARMENTS.find((g) => g.id === item.id) || NOVA_GARMENTS[0];
          return (
            <div key={item.id} className="space-y-4">
              <NovaGarmentSVG
                type={item.type}
                patternId={item.patternId}
                onViewDetail={() => setSelectedGarment(garSpec)}
              />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-editorial text-lg font-bold text-charcoal-900">
                    {item.name}
                  </h3>
                  <span className="text-xs font-mono text-charcoal-500">
                    Pattern: {garSpec.pattern}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedGarment(garSpec)}
                  className="text-xs font-mono text-peach-600 font-bold hover:underline flex items-center gap-1"
                >
                  Specs <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Garment Detail Spec Modal */}
      <Modal
        isOpen={!!selectedGarment}
        onClose={() => setSelectedGarment(null)}
        title={selectedGarment?.name || "Garment Specification"}
      >
        {selectedGarment && (
          <div className="space-y-6 text-sm">
            <div className="grid grid-cols-2 gap-4 bg-cream-200 p-4 rounded-2xl font-mono text-xs">
              <div>
                <span className="text-charcoal-500 block">TYPE</span>
                <span className="font-bold text-charcoal-900">{selectedGarment.type}</span>
              </div>
              <div>
                <span className="text-charcoal-500 block">PATTERN</span>
                <span className="font-bold text-charcoal-900">{selectedGarment.pattern}</span>
              </div>
              <div>
                <span className="text-charcoal-500 block">COLORWAY</span>
                <span className="font-bold text-charcoal-900">{selectedGarment.colorway}</span>
              </div>
              <div>
                <span className="text-charcoal-500 block">APPLICATION</span>
                <span className="font-bold text-charcoal-900">{selectedGarment.application}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-editorial text-lg font-bold text-charcoal-900">
                Design & Scale Notes
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {selectedGarment.notes}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
