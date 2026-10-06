import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-nova-500/50 disabled:opacity-50 disabled:pointer-events-none rounded-xl";

    const variants = {
      primary:
        "bg-nova-600 hover:bg-nova-500 text-white shadow-lg shadow-nova-600/25 hover:shadow-nova-500/35 border border-nova-400/30",
      secondary:
        "bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/10",
      outline:
        "bg-transparent hover:bg-white/5 text-gray-200 border border-gray-700 hover:border-gray-500",
      ghost:
        "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white",
      accent:
        "bg-gradient-to-r from-accent-cyan via-nova-500 to-accent-purple hover:brightness-110 text-white shadow-lg shadow-nova-500/30 font-semibold",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-6 py-3.5 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
