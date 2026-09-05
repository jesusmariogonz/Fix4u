"use client";

import { useLanguage } from "@/lib/language-context";
import { serviceIcons } from "./icons";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 bg-dark/[0.02]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">{t.services.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-dark/70">{t.services.subtitle}</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => {
            const Icon = serviceIcons[service.key];
            return (
              <div
                key={service.key}
                className="group rounded-xl border border-dark/10 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white group-hover:bg-gold group-hover:text-dark transition-colors">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-4 font-bold text-lg text-dark">{service.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-dark/70 flex gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
