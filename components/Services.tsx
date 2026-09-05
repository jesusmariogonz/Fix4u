"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { serviceIcons, serviceImages, serviceGradients } from "./icons";

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
            const photo = serviceImages[service.key];
            const gradient = serviceGradients[service.key];

            return (
              <div
                key={service.key}
                className="group relative overflow-hidden rounded-xl min-h-[320px] shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                style={!photo ? { background: gradient } : undefined}
              >
                {photo && (
                  <Image
                    src={photo}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                )}

                {/* Dark gradient overlay keeps overlaid white text legible on
                    both photo and gradient cards. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {Icon && (
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-gold ring-1 ring-white/20">
                    <Icon className="h-4 w-4" />
                  </div>
                )}

                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <h3 className="font-bold text-lg text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                    {service.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-white/90 flex gap-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
                      >
                        <span className="text-gold font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
