"use client";

import { useLanguage } from "@/lib/language-context";
import { aboutIcons } from "./icons";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">{t.about.title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-dark/70">{t.about.text}</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {t.about.points.map((point, i) => {
            const Icon = aboutIcons[i % aboutIcons.length];
            return (
              <div key={point.title} className="flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-dark text-lg">{point.title}</h3>
                <p className="text-dark/70">{point.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
