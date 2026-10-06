"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { NovaSymbol } from "@/components/graphics/NovaLogos";
import { Badge } from "@/components/ui/Badge";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "OVERVIEW", href: "#overview", id: "overview" },
    { label: "IDENTITY", href: "#identity", id: "identity" },
    { label: "PATTERNS", href: "#patterns", id: "patterns" },
    { label: "PACKAGING", href: "#packaging", id: "packaging" },
    { label: "PRINT", href: "#print", id: "print" },
    { label: "SOCIAL", href: "#social", id: "social" },
    { label: "MOCKUPS", href: "#mockups", id: "mockups" },
    { label: "REFLECTION", href: "#reflection", id: "reflection" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sectionElements = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-charcoal-500/10 bg-cream-100/90 backdrop-blur-md transition-all">
      {/* Scroll Progress Bar */}
      <div
        className="h-[3px] bg-charcoal-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-serif-editorial text-xl font-bold tracking-[0.2em] text-charcoal-900">
              NOVA
            </span>
            <span className="text-[9px] uppercase tracking-widest text-charcoal-500 font-mono">
              Concept Brand Case Study
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`text-xs font-semibold tracking-widest transition-all py-1 border-b-2 ${
                  isActive
                    ? "border-charcoal-900 text-charcoal-900 font-bold"
                    : "border-transparent text-charcoal-500 hover:text-charcoal-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Project Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <Badge variant="outline" className="text-[11px] font-mono tracking-wider border-charcoal-500/20 text-charcoal-900">
            <Sparkles className="w-3 h-3 text-peach-600" /> PROJECT 02
          </Badge>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-charcoal-900 hover:bg-charcoal-500/10 rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-6 border-b border-charcoal-500/10 bg-cream-100 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-semibold tracking-wider ${
                activeSection === item.id ? "text-charcoal-900 font-bold" : "text-charcoal-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
