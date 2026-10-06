import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "active" | "cyan" | "purple" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-gray-300 border-white/10",
    active: "bg-nova-500/20 text-nova-300 border-nova-500/30",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    outline: "bg-transparent text-gray-400 border-gray-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
