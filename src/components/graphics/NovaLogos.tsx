import React from "react";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  accentColor?: string;
  size?: number;
}

// Monogram / Symbol Mark
export function NovaSymbol({
  color = "#242424",
  accentColor = "#F3C7B5",
  className,
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Soft rounded N monogram with organic cloud curve integration */}
      <rect width="100" height="100" rx="28" fill="transparent" />
      <path
        d="M30 72V28C30 28 35 28 42 38L60 64V28"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 28V72C60 72 65 72 70 72"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Soft playful dot accent */}
      <circle cx="70" cy="30" r="5" fill={accentColor} />
      <path
        d="M25 72C25 75.3137 27.6863 78 31 78H45"
        stroke={accentColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Full Wordmark
export function NovaWordmark({
  color = "#242424",
  accentColor = "#F3C7B5",
  className,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <NovaSymbol color={color} accentColor={accentColor} className="w-10 h-10 shrink-0" />
      <div className="flex flex-col">
        <span
          className="font-serif-editorial text-2xl tracking-[0.2em] font-bold uppercase"
          style={{ color }}
        >
          N O V A
        </span>
        <span
          className="text-[9px] tracking-[0.25em] uppercase font-sans font-medium opacity-75"
          style={{ color }}
        >
          Babywear Concept
        </span>
      </div>
    </div>
  );
}

// Primary Stacked Logo Presentation
export function NovaPrimaryLogo({
  color = "#242424",
  accentColor = "#F3C7B5",
  className,
}: LogoProps) {
  return (
    <div className={`flex flex-col items-center text-center gap-4 ${className}`}>
      <NovaSymbol color={color} accentColor={accentColor} className="w-20 h-20" />
      <div className="space-y-1">
        <h2
          className="font-serif-editorial text-4xl tracking-[0.3em] font-bold uppercase"
          style={{ color }}
        >
          N O V A
        </h2>
        <p
          className="text-xs tracking-[0.3em] font-sans uppercase font-medium"
          style={{ color, opacity: 0.8 }}
        >
          Soft beginnings. Designed with intention.
        </p>
      </div>
    </div>
  );
}

// Logo Construction Grid SVG
export function NovaLogoConstruction({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      {/* Grid lines */}
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#242424" strokeWidth="0.5" strokeOpacity="0.1" />
      </pattern>
      <rect width="300" height="200" fill="url(#grid)" />

      {/* Outer bounding box */}
      <rect x="50" y="30" width="200" height="140" fill="none" stroke="#242424" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
      <circle cx="150" cy="100" r="65" stroke="#C9DDEA" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Center symbol in grid */}
      <g transform="translate(110, 60) scale(0.8)">
        <path
          d="M30 72V28C30 28 35 28 42 38L60 64V28"
          stroke="#242424"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 28V72C60 72 65 72 70 72"
          stroke="#242424"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="70" cy="30" r="5" fill="#F3C7B5" />
      </g>

      {/* Measurement annotations */}
      <line x1="50" y1="180" x2="250" y2="180" stroke="#F3C7B5" strokeWidth="1.5" />
      <text x="150" y="193" textAnchor="middle" fill="#242424" fontSize="10" fontFamily="monospace">
        X = 200px (Clear Space 1.5X)
      </text>
    </svg>
  );
}
