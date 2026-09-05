"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { Locale, Translation, translations } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language is Spanish, per spec. Pure client state — no reload,
  // no URL change.
  const [locale, setLocale] = useState<Locale>("es");

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t: translations[locale],
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "es" ? "en" : "es")),
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
