"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Panel */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-cream-100 p-6 md:p-8 shadow-2xl border border-charcoal-500/20 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-charcoal-500/10 pb-4 mb-6">
          {title && <h3 className="font-serif-editorial text-2xl font-bold text-charcoal-900">{title}</h3>}
          <button
            onClick={onClose}
            className="p-2 text-charcoal-500 hover:text-charcoal-900 hover:bg-charcoal-500/10 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
