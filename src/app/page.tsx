import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NovaHero } from "@/components/nova/NovaHero";
import { NovaSnapshot } from "@/components/nova/NovaSnapshot";
import { NovaStrategy } from "@/components/nova/NovaStrategy";
import { NovaMoodboard } from "@/components/nova/NovaMoodboard";
import { NovaLogoExploration } from "@/components/nova/NovaLogoExploration";
import { NovaLogoSystem } from "@/components/nova/NovaLogoSystem";
import { NovaColorSystem } from "@/components/nova/NovaColorSystem";
import { NovaTypography } from "@/components/nova/NovaTypography";
import { NovaGraphicLanguage } from "@/components/nova/NovaGraphicLanguage";
import { NovaPatternGallery } from "@/components/nova/NovaPatternGallery";
import { NovaGarmentShowcase } from "@/components/nova/NovaGarmentShowcase";
import { NovaPackaging } from "@/components/nova/NovaPackaging";
import { NovaPrintDesign } from "@/components/nova/NovaPrintDesign";
import { NovaSocialCampaign } from "@/components/nova/NovaSocialCampaign";
import { NovaProductGallery } from "@/components/nova/NovaProductGallery";
import { NovaBrandGuidelines } from "@/components/nova/NovaBrandGuidelines";
import { NovaVisualSystem } from "@/components/nova/NovaVisualSystem";
import { NovaArtDirection } from "@/components/nova/NovaArtDirection";
import { NovaBrandWorld } from "@/components/nova/NovaBrandWorld";
import { NovaTouchpointJourney } from "@/components/nova/NovaTouchpointJourney";
import { NovaDesignDecisions } from "@/components/nova/NovaDesignDecisions";
import { NovaBeforeAfter } from "@/components/nova/NovaBeforeAfter";
import { NovaReflection } from "@/components/nova/NovaReflection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F4EC] text-[#242424] bg-cream-grid bg-[size:60px_60px] antialiased">
      <Navbar />

      <main className="space-y-0">
        <NovaHero />
        <NovaSnapshot />
        <NovaStrategy />
        <NovaMoodboard />
        <NovaLogoExploration />
        <NovaLogoSystem />
        <NovaColorSystem />
        <NovaTypography />
        <NovaGraphicLanguage />
        <NovaPatternGallery />
        <NovaGarmentShowcase />
        <NovaPackaging />
        <NovaPrintDesign />
        <NovaSocialCampaign />
        <NovaProductGallery />
        <NovaBrandGuidelines />
        <NovaVisualSystem />
        <NovaArtDirection />
        <NovaBrandWorld />
        <NovaTouchpointJourney />
        <NovaDesignDecisions />
        <NovaBeforeAfter />
        <NovaReflection />
      </main>

      <Footer />
    </div>
  );
}
