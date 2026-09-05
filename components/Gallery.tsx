"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">{t.gallery.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-dark/70">{t.gallery.subtitle}</p>
        {/* Real project photos supplied by the client, selected for variety
            (epoxy/polished floors, warehouse work, metal fabrication). */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.gallery.items.map((item, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-dark/50 italic">{t.gallery.note}</p>
      </div>
    </section>
  );
}
