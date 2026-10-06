import React from "react";

export interface PatternProps {
  patternId: "clouds" | "garden" | "moon" | "explorer";
  mode?: "original" | "alternate" | "monochrome";
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function NovaPatternSVG({
  patternId,
  mode = "original",
  className = "w-full h-full",
}: PatternProps) {
  // Mode-based color schemes
  const getColorScheme = () => {
    if (mode === "monochrome") {
      return {
        bg: "#242424",
        fill: "#F8F4EC",
        stroke: "#F8F4EC",
        accent: "#F8F4EC",
      };
    }
    if (mode === "alternate") {
      return {
        bg: "#F8F4EC",
        fill: "#242424",
        stroke: "#242424",
        accent: "#F3C7B5",
      };
    }

    // Original colors by patternId
    switch (patternId) {
      case "clouds":
        return { bg: "#C9DDEA", fill: "#F8F4EC", stroke: "#A2C3DA", accent: "#F3C7B5" };
      case "garden":
        return { bg: "#B8C8B5", fill: "#F8F4EC", stroke: "#98AC95", accent: "#F3C7B5" };
      case "moon":
        return { bg: "#D8CEE6", fill: "#F8F4EC", stroke: "#B9A5CF", accent: "#C9DDEA" };
      case "explorer":
        return { bg: "#F8F4EC", fill: "#F3C7B5", stroke: "#242424", accent: "#C9DDEA" };
      default:
        return { bg: "#F8F4EC", fill: "#242424", stroke: "#242424", accent: "#F3C7B5" };
    }
  };

  const scheme = getColorScheme();
  const uid = `pattern-${patternId}-${mode}`;

  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {patternId === "clouds" && (
          <pattern id={uid} width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill={scheme.bg} />
            {/* Cloud motif 1 */}
            <path
              d="M10 25C10 22.2 12.2 20 15 20C15.8 20 16.5 20.2 17.1 20.6C18.1 18.5 20.3 17 22.8 17C26 17 28.6 19.4 29 22.5C29.6 22.2 30.3 22 31 22C33.8 22 36 24.2 36 27C36 29.8 33.8 32 31 32H15C12.2 32 10 29.8 10 27Z"
              fill={scheme.fill}
            />
            {/* Cloud motif 2 offset */}
            <path
              d="M40 50C40 48 41.5 46.5 43.5 46.5C44.1 46.5 44.6 46.6 45 46.9C45.8 45.3 47.4 44 49.3 44C51.9 44 54 45.9 54.3 48.4C54.8 48.1 55.4 48 56 48C58.2 48 60 49.8 60 52C60 54.2 58.2 56 56 56H43.5C41.5 56 40 54.5 40 52Z"
              fill={scheme.accent}
            />
            <circle cx="15" cy="50" r="2" fill={scheme.stroke} />
            <circle cx="45" cy="20" r="2.5" fill={scheme.fill} />
          </pattern>
        )}

        {patternId === "garden" && (
          <pattern id={uid} width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill={scheme.bg} />
            {/* Leaf stem motif */}
            <path
              d="M15 35C15 25 25 15 25 15C25 15 35 25 35 35"
              stroke={scheme.fill}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M25 15V38"
              stroke={scheme.fill}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="25" cy="12" r="3" fill={scheme.accent} />
            {/* Small flower dot offset */}
            <circle cx="40" cy="40" r="4" fill={scheme.fill} />
            <circle cx="10" cy="10" r="3" fill={scheme.accent} />
          </pattern>
        )}

        {patternId === "moon" && (
          <pattern id={uid} width="70" height="70" patternUnits="userSpaceOnUse">
            <rect width="70" height="70" fill={scheme.bg} />
            {/* Crescent moon */}
            <path
              d="M25 15C19.5 15 15 19.5 15 25C15 30.5 19.5 35 25 35C22 33 20 29.5 20 25C20 20.5 22 17 25 15Z"
              fill={scheme.fill}
            />
            {/* 4-point star motif */}
            <path
              d="M50 45 L52 50 L57 52 L52 54 L50 59 L48 54 L43 52 L48 50 Z"
              fill={scheme.accent}
            />
            {/* Tiny stars */}
            <circle cx="55" cy="20" r="2" fill={scheme.fill} />
            <circle cx="18" cy="55" r="1.5" fill={scheme.stroke} />
          </pattern>
        )}

        {patternId === "explorer" && (
          <pattern id={uid} width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill={scheme.bg} />
            {/* Geometric arch */}
            <path
              d="M20 50V35C20 26.7 26.7 20 35 20C43.3 20 50 26.7 50 35V50"
              stroke={scheme.fill}
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Pebble shape */}
            <path
              d="M60 25C60 20 68 18 70 23C72 28 66 32 61 30C58 29 60 27 60 25Z"
              fill={scheme.accent}
            />
            <circle cx="35" cy="35" r="4" fill={scheme.stroke} />
            <circle cx="20" cy="70" r="6" fill={scheme.fill} />
            <path d="M60 60 L70 70 M70 60 L60 70" stroke={scheme.accent} strokeWidth="2.5" strokeLinecap="round" />
          </pattern>
        )}
      </defs>

      <rect width="100%" height="100%" fill={`url(#${uid})`} />
    </svg>
  );
}
