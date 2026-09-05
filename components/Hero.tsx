"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_NUMBER } from "@/lib/translations";
import { placeholderDataUrl } from "@/lib/placeholder";
import { trackEvent } from "@/lib/analytics";

// REPLACE WITH REAL PHOTO: swap this data-URI gradient for a real hero
// photograph (e.g. /images/hero.jpg) once the client provides one. Keep
// `priority` on the <Image> so LCP stays fast.
const heroPlaceholder = placeholderDataUrl(1600, 900, 0);

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative flex items-center min-h-[92vh] pt-16 overflow-hidden bg-dark">
      <Image
        src={heroPlaceholder}
        alt={t.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hola, quiero información sobre sus servicios"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-md bg-red-accent hover:bg-red-accent-dark text-white font-semibold transition-colors"
            >
              {t.hero.ctaWhatsapp}
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-md border-2 border-gold text-gold hover:bg-gold hover:text-dark font-semibold transition-colors"
            >
              {t.hero.ctaServices}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
