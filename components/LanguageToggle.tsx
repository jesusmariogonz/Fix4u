"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-white/30 text-xs font-semibold overflow-hidden">
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
        className={`px-3 py-2 min-h-[44px] transition-colors ${
          locale === "es" ? "bg-gold text-dark" : "text-white/80 hover:text-white"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-3 py-2 min-h-[44px] transition-colors ${
          locale === "en" ? "bg-gold text-dark" : "text-white/80 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
