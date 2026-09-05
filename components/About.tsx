"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { CONTACT_EMAIL } from "@/lib/translations";
import { trackEvent } from "@/lib/analytics";

// Real client project photo (workers finishing an industrial floor) not
// already used by Hero or Services, chosen for its team/industrial feel.
const whyChooseUsImage = "/images/gallery/project-img-018.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">{t.about.title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-dark/70">{t.about.text}</p>

        <div className="relative mt-12 overflow-hidden rounded-2xl">
          <Image
            src={whyChooseUsImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-10">
            {t.about.points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6 min-h-[44px]"
              >
                <h3 className="font-bold text-white text-lg [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                  {point.title}
                </h3>
                <p className="mt-2 text-white/85">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-dark/70">
          {t.footer.emailLabel}:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={() => trackEvent("email_click", { location: "about" })}
            className="font-semibold text-primary hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
