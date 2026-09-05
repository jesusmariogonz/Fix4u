// Generates a simple gradient SVG data URI to use as a stand-in image where
// the client has not yet supplied real photography. Swap any usage of this
// helper for a real photo via next/image's `src` prop once available —
// each call site is commented "REPLACE WITH REAL PHOTO".
export function placeholderDataUrl(width: number, height: number, seed = 0): string {
  const hues = ["#0B4C8C", "#083A6B", "#1A1A1A", "#D4AF37"];
  const c1 = hues[seed % hues.length];
  const c2 = hues[(seed + 1) % hues.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${c1}'/>
        <stop offset='100%' stop-color='${c2}'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
