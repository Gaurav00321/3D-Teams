"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/hero-section"), {
  ssr: false,
});

export default function ClientHeroWrapper() {
  return <HeroSection />;
}
