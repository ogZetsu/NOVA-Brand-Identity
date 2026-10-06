import React from "react";
import { NovaPatternSVG } from "./NovaPatterns";

export interface GarmentSVGProps {
  type: "romper" | "tshirt" | "hoodie" | "sleepwear" | "bib";
  patternId?: "clouds" | "garden" | "moon" | "explorer";
  mode?: "original" | "alternate" | "monochrome";
  className?: string;
  onViewDetail?: () => void;
}

export function NovaGarmentSVG({
  type,
  patternId = "clouds",
  mode = "original",
  className = "w-full h-auto",
  onViewDetail,
}: GarmentSVGProps) {
  const patternMap = {
    romper: "clouds",
    tshirt: "garden",
    hoodie: "explorer",
    sleepwear: "moon",
    bib: "garden",
  } as const;

  const activePattern = patternId || patternMap[type];

  return (
    <div className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-charcoal-500/10 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Background Pattern Mask */}
      <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity">
        <NovaPatternSVG patternId={activePattern} mode={mode} />
      </div>

      {/* Garment Cutout Silhouette Overlay */}
      <div className="relative z-10 flex items-center justify-center p-8">
        <svg
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[180px] drop-shadow-md"
        >
          {type === "romper" && (
            <g>
              {/* Outer Romper Outline */}
              <path
                d="M60 20 C70 30 130 30 140 20 L180 50 L160 80 L145 70 V180 C145 190 135 200 120 200 H110 L100 180 L90 200 H80 C65 200 55 190 55 180 V70 L40 80 L20 50 Z"
                fill="none"
                stroke="#242424"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Collar details */}
              <path d="M70 20 C85 40 115 40 130 20" stroke="#242424" strokeWidth="3" />
              {/* Snap buttons at bottom */}
              <circle cx="85" cy="190" r="2.5" fill="#242424" />
              <circle cx="100" cy="190" r="2.5" fill="#242424" />
              <circle cx="115" cy="190" r="2.5" fill="#242424" />
            </g>
          )}

          {type === "tshirt" && (
            <g>
              {/* T-Shirt Outline */}
              <path
                d="M55 25 C70 35 130 35 145 25 L190 55 L165 95 L145 80 V210 H55 V80 L35 95 L10 55 Z"
                fill="none"
                stroke="#242424"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Neckline */}
              <path d="M65 25 C80 40 120 40 135 25" stroke="#242424" strokeWidth="3" />
              {/* Pocket detail */}
              <rect x="110" y="90" width="25" height="30" rx="3" stroke="#242424" strokeWidth="2.5" fill="none" />
            </g>
          )}

          {type === "hoodie" && (
            <g>
              {/* Hoodie Body & Hood */}
              <path
                d="M60 40 C60 10 140 10 140 40 L185 70 L160 110 L145 95 V215 H55 V95 L40 110 L15 70 Z"
                fill="none"
                stroke="#242424"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Hood opening */}
              <path d="M70 40 C100 65 100 65 130 40" stroke="#242424" strokeWidth="3" />
              {/* Kangaroo pocket */}
              <path d="M65 160 H135 L125 210 H75 Z" stroke="#242424" strokeWidth="2.5" fill="none" />
            </g>
          )}

          {type === "sleepwear" && (
            <g>
              {/* Sleepwear Top */}
              <path
                d="M60 20 C75 30 125 30 140 20 L180 50 L160 80 L145 70 V140 H55 V70 L40 80 L20 50 Z"
                fill="none"
                stroke="#242424"
                strokeWidth="3.5"
              />
              {/* Sleepwear Pants */}
              <path
                d="M60 145 H140 V225 H110 L100 170 L90 225 H60 Z"
                fill="none"
                stroke="#242424"
                strokeWidth="3.5"
              />
            </g>
          )}

          {type === "bib" && (
            <g>
              {/* Bib Silhouette */}
              <path
                d="M70 30 C70 10 130 10 130 30 C150 40 160 80 160 130 C160 180 140 210 100 210 C60 210 40 180 40 130 C40 80 50 40 70 30 Z"
                fill="none"
                stroke="#242424"
                strokeWidth="4"
              />
              {/* Neck strap cutout */}
              <circle cx="100" cy="50" r="25" stroke="#242424" strokeWidth="3" fill="none" />
            </g>
          )}
        </svg>
      </div>

      {/* Hover Action Overlay */}
      {onViewDetail && (
        <div className="absolute inset-0 z-20 bg-charcoal-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-xs">
          <button
            onClick={onViewDetail}
            className="px-5 py-2.5 bg-cream-100 text-charcoal-900 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            View Detail Specs
          </button>
        </div>
      )}
    </div>
  );
}
