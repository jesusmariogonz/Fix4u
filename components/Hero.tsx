"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_NUMBER } from "@/lib/translations";
import { trackEvent } from "@/lib/analytics";

// Real client-supplied warehouse/steel-coil facility photo, wide enough to
// hold up as a hero background. Keep `priority` on the <Image> so LCP stays
// fast.
const heroImage = "/images/gallery/project-img-017.jpg";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative flex items-center min-h-[92vh] pt-16 overflow-hidden bg-dark">
      <Image
        src={heroImage}
        alt={t.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-white">
            <span className="block">{t.hero.headlineLine1}</span>
            <span className="block text-gold">{t.hero.headlineLine2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-white/80">{t.hero.subtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hola, quiero información sobre sus servicios"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              className="inline-flex items-center justify-center min-h-[44px] px-7 rounded-full bg-red-accent hover:bg-red-accent-dark text-white font-semibold transition-colors"
            >
              {t.hero.ctaWhatsapp}
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center min-h-[44px] px-7 rounded-full border border-white/40 text-white hover:bg-white/10 font-semibold transition-colors backdrop-blur-sm"
            >
              {t.hero.ctaServices}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
