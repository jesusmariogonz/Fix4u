"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_NUMBER } from "@/lib/translations";
import { trackEvent } from "@/lib/analytics";

interface FormState {
  name: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

// Stub for a future parallel email notification (e.g. via Resend or
// Web3Forms) that would deliver form submissions to the client's real
// inbox, ombmyo@gmail.com. Currently a no-op — wire it up alongside the
// WhatsApp redirect below once an email-sending API key is available (see
// .env.local.example).
async function sendEmailNotification(_data: FormState): Promise<void> {
  // no-op for now
  return Promise.resolve();
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = t.contact.errorRequired;
    if (!form.phone.trim()) {
      nextErrors.phone = t.contact.errorRequired;
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      nextErrors.phone = t.contact.errorPhone;
    }
    if (!form.service.trim()) nextErrors.service = t.contact.errorRequired;
    if (!form.message.trim()) nextErrors.message = t.contact.errorRequired;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      "Nueva solicitud de cotización - Fix4U",
      `Nombre: ${form.name}`,
      form.company ? `Empresa: ${form.company}` : null,
      `Teléfono: ${form.phone}`,
      `Servicio: ${form.service}`,
      `Mensaje: ${form.message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    trackEvent("contact_form_submit", { service: form.service });

    // Parallel email notification stub — safe no-op today, easy to enable
    // later without touching the WhatsApp flow below.
    void sendEmailNotification(form);

    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
    setForm(initialState);
  }

  const serviceOptions = [
    "Pisos (epóxico/pulido)",
    "Pintura industrial/comercial",
    "Herrería general",
    "Electricidad de baja tensión",
    "Automatizaciones",
    "Obra civil",
    "Cámaras de seguridad",
    "Mini splits",
    "Carpintería",
    "Paneles solares",
  ];

  const inputClasses =
    "w-full min-h-[44px] rounded-md border border-dark/20 px-4 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <section id="contacto" className="py-24 md:py-32 bg-dark/[0.02]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-dark">{t.contact.title}</h2>
        <p className="mt-4 text-lg text-dark/70">{t.contact.subtitle}</p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5" aria-label={t.contact.title}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-dark mb-1">
              {t.contact.name} *
            </label>
            <input
              id="name"
              type="text"
              className={inputClasses}
              placeholder={t.contact.namePlaceholder}
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="mt-1 text-sm text-red-accent">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-dark mb-1">
              {t.contact.company}
            </label>
            <input
              id="company"
              type="text"
              className={inputClasses}
              placeholder={t.contact.companyPlaceholder}
              value={form.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-1">
              {t.contact.phone} *
            </label>
            <input
              id="phone"
              type="tel"
              className={inputClasses}
              placeholder={t.contact.phonePlaceholder}
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-accent">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-dark mb-1">
              {t.contact.service} *
            </label>
            <select
              id="service"
              className={inputClasses}
              value={form.service}
              onChange={(e) => handleChange("service", e.target.value)}
              aria-invalid={!!errors.service}
            >
              <option value="">{t.contact.servicePlaceholder}</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-sm text-red-accent">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-dark mb-1">
              {t.contact.message} *
            </label>
            <textarea
              id="message"
              rows={4}
              className={inputClasses}
              placeholder={t.contact.messagePlaceholder}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="mt-1 text-sm text-red-accent">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-8 rounded-md bg-red-accent hover:bg-red-accent-dark text-white font-semibold transition-colors"
          >
            {t.contact.submit}
          </button>

          {status === "success" && (
            <p role="status" className="text-sm font-medium text-primary">
              {t.contact.success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
