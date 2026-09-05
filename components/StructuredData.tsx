import { CONTACT_EMAIL, translations, WHATSAPP_NUMBER } from "@/lib/translations";

// schema.org HomeAndConstructionBusiness JSON-LD.
// NOTE: address is a placeholder — the client must replace `streetAddress`,
// `addressLocality`, `addressRegion`, and `postalCode` with the real
// business address once available.
export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fix4u.vercel.app";

  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Fix4U",
    description: translations.es.meta.description,
    url: siteUrl,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: CONTACT_EMAIL,
    areaServed: "MX",
    address: {
      "@type": "PostalAddress",
      // Placeholder address — replace with the real business address.
      streetAddress: "Dirección pendiente",
      addressLocality: "Ciudad",
      addressRegion: "Coahuila",
      postalCode: "00000",
      addressCountry: "MX",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    makesOffer: translations.es.services.items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item.title,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
