"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_NUMBER } from "@/lib/translations";
import LanguageToggle from "./LanguageToggle";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#inicio", label: t.nav.home },
    { href: "#nosotros", label: t.nav.about },
    { href: "#servicios", label: t.nav.services },
    { href: "#proyectos", label: t.nav.gallery },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-dark/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="#inicio" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/brand/fix4u-logo.png"
            alt="Fix4U"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full"
          />
          <span className="hidden sm:flex items-baseline gap-0.5">
            <span className="text-xl font-extrabold text-white">Fix</span>
            <span className="text-xl font-extrabold text-gold">4U</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, quiero información sobre sus servicios"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-4 rounded-md bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
