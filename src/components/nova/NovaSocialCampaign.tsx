"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { NOVA_SOCIAL_POSTS, NovaSocialPost } from "@/data/novaData";
import { NovaPatternSVG } from "@/components/graphics/NovaPatterns";
import { NovaSymbol } from "@/components/graphics/NovaLogos";
import { Grid, ChevronLeft, ChevronRight, X, Heart, MessageCircle, Send } from "lucide-react";

export function NovaSocialCampaign() {
  const [viewMode, setViewMode] = useState<"grid" | "single">("grid");
  const [activePostIndex, setActivePostIndex] = useState(0);

  const activePost = NOVA_SOCIAL_POSTS[activePostIndex];

  const handlePrev = () => {
    setActivePostIndex((prev) => (prev === 0 ? NOVA_SOCIAL_POSTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePostIndex((prev) => (prev === NOVA_SOCIAL_POSTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="social" className="py-20 px-6 max-w-7xl mx-auto border-b border-charcoal-500/10 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="cyan" className="uppercase font-mono text-[10px]">
            13 / SOCIAL MEDIA CAMPAIGN & DIGITAL TOUCHPOINTS
          </Badge>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-charcoal-900">
            Digital Identity Presence
          </h2>
          <p className="text-sm text-charcoal-500 max-w-xl">
            A cohesive social campaign strategy extending NOVA’s editorial typography, pastel palettes, and pattern highlights across feed posts, stories, and carousel slides.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex bg-cream-200 p-1.5 rounded-2xl border border-charcoal-500/10 gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
              viewMode === "grid" ? "bg-charcoal-900 text-cream-100 shadow-md" : "text-charcoal-500"
            }`}
          >
            GRID VIEW
          </button>
          <button
            onClick={() => setViewMode("single")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
              viewMode === "single" ? "bg-charcoal-900 text-cream-100 shadow-md" : "text-charcoal-500"
            }`}
          >
            SINGLE POST VIEW
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOVA_SOCIAL_POSTS.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => {
                setActivePostIndex(idx);
                setViewMode("single");
              }}
              className="card-cream rounded-2xl overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
            >
              {/* Post Visual Card */}
              <div className="aspect-square bg-cream-200 relative p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-30 group-hover:scale-105 transition-transform duration-500">
                  <NovaPatternSVG patternId={idx % 2 === 0 ? "clouds" : "garden"} mode="original" />
                </div>
                <span className="relative z-10 self-start text-[10px] font-mono uppercase bg-cream-100/90 px-3 py-1 rounded-full border border-charcoal-500/10 font-bold">
                  {post.type}
                </span>
                <div className="relative z-10 text-center bg-cream-100/90 backdrop-blur-md p-4 rounded-xl border border-charcoal-500/10">
                  <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-serif-editorial text-sm font-bold block text-charcoal-900">
                    {post.title}
                  </span>
                </div>
              </div>

              {/* Post Meta Footer */}
              <div className="p-4 space-y-2">
                <span className="text-[10px] font-mono text-peach-600 font-bold uppercase block">
                  {post.format}
                </span>
                <p className="text-xs text-charcoal-500 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Single Post Interactive View Mode */}
      {viewMode === "single" && (
        <div className="card-cream rounded-3xl p-8 max-w-xl mx-auto space-y-6 relative border border-charcoal-500/10 shadow-2xl">
          <div className="flex items-center justify-between border-b border-charcoal-500/10 pb-4">
            <span className="text-xs font-mono font-bold uppercase text-charcoal-900">
              POST {activePostIndex + 1} OF {NOVA_SOCIAL_POSTS.length}: {activePost.title}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 bg-cream-200 hover:bg-cream-300 rounded-lg text-charcoal-900"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-cream-200 hover:bg-cream-300 rounded-lg text-charcoal-900"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Mockup Frame */}
          <div className="aspect-square bg-cream-200 rounded-2xl relative p-8 flex flex-col justify-between overflow-hidden border border-charcoal-500/10">
            <div className="absolute inset-0 opacity-40">
              <NovaPatternSVG patternId="moon" mode="original" />
            </div>
            <div className="relative z-10 flex items-center gap-3">
              <NovaSymbol color="#242424" accentColor="#F3C7B5" className="w-6 h-6" />
              <span className="font-serif-editorial text-sm font-bold text-charcoal-900">nova.babywear</span>
            </div>
            <div className="relative z-10 text-center bg-cream-100/95 p-6 rounded-2xl shadow-lg border border-charcoal-500/10 space-y-2">
              <h4 className="font-serif-editorial text-xl font-bold text-charcoal-900">
                {activePost.title}
              </h4>
              <p className="text-xs text-charcoal-500 font-serif-editorial italic">
                “Soft beginnings. Designed with intention.”
              </p>
            </div>
            <div className="relative z-10 flex gap-4 text-charcoal-900">
              <Heart className="w-5 h-5 text-peach-600 fill-peach-600" />
              <MessageCircle className="w-5 h-5" />
              <Send className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-charcoal-900 font-semibold leading-relaxed">
              <span className="font-bold">nova.babywear</span> {activePost.caption}
            </p>
            <span className="text-[10px] font-mono text-charcoal-400 block uppercase">
              {activePost.concept}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
