# Fix4U — Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS landing page for Fix4U,
an industrial/residential installation & maintenance company in Mexico.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in what you have. All are
optional for local dev — the site works without any of them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`). When set, `components/GoogleAnalytics.tsx` loads gtag.js and configures GA4. |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads conversion ID (`AW-XXXXXXXXX`). Loaded the same way, for conversion tracking. |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployment. Used for the canonical tag, Open Graph/Twitter URLs, `app/sitemap.ts`, and `app/robots.ts`. Set this to your Vercel URL (e.g. `https://fix4u.vercel.app`) or your custom domain once connected. |
| `RESEND_API_KEY` / `WEB3FORMS_ACCESS_KEY` (commented out) | Reserved for a future parallel email notification on form submit. Not used yet — see below. |

## Deploying on Vercel

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. In the [Vercel dashboard](https://vercel.com/new), click **Add New → Project** and import the `Fix4U` GitHub repository.
3. Vercel auto-detects Next.js — no build settings need to change.
4. Add the environment variables from the table above under **Project Settings → Environment Variables** (at minimum, set `NEXT_PUBLIC_SITE_URL` to the Vercel-assigned URL after the first deploy, then redeploy).
5. Click **Deploy**. Every subsequent push to this branch (or your default branch, once merged) triggers an automatic redeploy.

### Connecting a custom domain later

1. In the Vercel project, go to **Settings → Domains**.
2. Enter the domain (e.g. `fix4u.mx`) and click **Add**.
3. Follow Vercel's instructions to add the DNS records (usually an `A`/`CNAME` record) at your domain registrar.
4. Once DNS propagates, Vercel issues an SSL certificate automatically.
5. Update `NEXT_PUBLIC_SITE_URL` to the new custom domain and redeploy so canonical tags, Open Graph URLs, and the sitemap reflect it.

## Editing content / translations

All visible copy (nav, hero, services, gallery captions, form labels, footer,
image alt text) lives in **`lib/translations.ts`**, split into `es` (default)
and `en` dictionaries with the same shape. Edit the strings there — no other
file needs to change. The WhatsApp number is defined once, as
`WHATSAPP_NUMBER`, in the same file.

The ES/EN toggle (`components/LanguageToggle.tsx` + `lib/language-context.tsx`)
is a pure client-side state switch — no page reload, no URL change, no
separate `/en` route. Because of that we intentionally do **not** emit
`hreflang` tags (see the comment at the top of `lib/translations.ts` and in
`app/layout.tsx`) — those are meant for distinct, crawlable per-language
URLs, which this site doesn't have.

## Images

No real project photography was available for this build. Every image slot
(hero background, gallery tiles) uses a generated gradient SVG placeholder
from `lib/placeholder.ts`, rendered through `next/image`. Every usage site is
commented `REPLACE WITH REAL PHOTO(S)` — search for that string to find every
spot to swap in real photos once the client supplies them.

## Contact form → WhatsApp

Submitting the contact form (`components/ContactForm.tsx`) validates the
fields client-side, builds a formatted message from them, and opens
`https://wa.me/528444448342?text=<encoded message>` in a new tab. No
email/SMTP backend is required for this to work.

A `sendEmailNotification()` stub sits right next to the WhatsApp redirect,
currently a no-op. To add a parallel email notification later (e.g. via
[Resend](https://resend.com) or [Web3Forms](https://web3forms.com)):

1. Add the relevant API key to `.env.local` / Vercel env vars (see the
   commented-out lines in `.env.local.example`).
2. Implement the API call inside `sendEmailNotification()`.
3. That's it — the submit handler already calls it alongside the WhatsApp
   redirect.

## SEO

- Metadata (title, description, Open Graph, Twitter Card) is set via the
  Next.js Metadata API in `app/layout.tsx`.
- JSON-LD structured data (`schema.org` `HomeAndConstructionBusiness`) is
  rendered by `components/StructuredData.tsx`. **The address in that file is
  a placeholder** — replace `streetAddress`, `addressLocality`,
  `addressRegion`, and `postalCode` with the real business address.
- `app/sitemap.ts` and `app/robots.ts` auto-generate `/sitemap.xml` and
  `/robots.txt`.

## Lighthouse / performance

See [`LIGHTHOUSE.md`](./LIGHTHOUSE.md) — scores should be measured against
the deployed Vercel URL, not the local dev server.
