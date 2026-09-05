"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_NUMBER } from "@/lib/translations";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hola, quiero información sobre sus servicios"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappFloat.label}
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
