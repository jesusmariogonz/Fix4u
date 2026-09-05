import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fix4u.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fix4U | Instalaciones y Mantenimiento Industrial y Residencial",
  description:
    "Fix4U es tu socio confiable en soluciones integrales para la industria: pisos epóxicos, pintura industrial, herrería, electricidad, automatización, obra civil, cámaras, mini splits, carpintería y paneles solares.",
  alternates: {
    canonical: siteUrl,
  },
  // Language toggle is a client-side SPA toggle (same URL for ES/EN), so we
  // intentionally omit hreflang alternates — see lib/translations.ts note.
  openGraph: {
    title: "Fix4U | Instalaciones y Mantenimiento Industrial y Residencial",
    description:
      "Tu socio confiable en soluciones integrales para la industria. Residencial, oficinas e industrial.",
    url: siteUrl,
    siteName: "Fix4U",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix4U | Instalaciones y Mantenimiento Industrial y Residencial",
    description:
      "Tu socio confiable en soluciones integrales para la industria. Residencial, oficinas e industrial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://wa.me" />
        <StructuredData />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
