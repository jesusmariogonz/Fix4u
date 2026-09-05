"use client";

import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_NUMBER } from "@/lib/translations";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/80 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-2xl font-extrabold text-white">Fix</span>
            <span className="text-2xl font-extrabold text-gold">4U</span>
          </div>
          <p className="mt-3 text-sm max-w-xs">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">{t.footer.contactTitle}</h3>
          <p className="text-sm">Oscar Mario Bendimez Murguia</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("phone_click", { location: "footer" })}
            className="text-sm text-gold hover:underline"
          >
            +52 844 444 8342 (WhatsApp)
          </a>
          <p className="text-sm mt-2">México</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">{t.footer.followUs}</h3>
          {/* Placeholder social links — update hrefs once official profiles exist. */}
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-white/10 text-xs text-white/50 space-y-2">
        <p>{t.footer.privacy}</p>
        <p>
          © {year} Fix4U. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
