// Thin wrapper around window.gtag for conversion tracking. Safe to call
// even when gtag.js hasn't loaded (e.g. NEXT_PUBLIC_GA_ID unset in local
// dev) — it just no-ops.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params ?? {});
  }
}
