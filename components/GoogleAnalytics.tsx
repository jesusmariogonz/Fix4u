import Script from "next/script";

// Renders nothing if the env vars are unset, so local dev / preview builds
// without analytics IDs are unaffected.
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const primaryId = gaId || adsId;

  if (!primaryId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${gaId ? `gtag('config', '${gaId}');` : ""}
          ${adsId ? `gtag('config', '${adsId}');` : ""}
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}
