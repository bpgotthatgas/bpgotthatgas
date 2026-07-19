# Brandon Porter — Portfolio Site

Minimal black/platinum portfolio for a Chicago-based recording, mixing, and mastering engineer. React + Vite + TypeScript, CSS Modules, no UI library.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start local dev server (http://localhost:5173)
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build locally
npm run lint      # run oxlint
```

## Placeholders to fill in before launch

Nothing below is required for the site to build or run — everything degrades gracefully (buttons disable, links show "(add link)", images fall back to a solid panel) until you fill it in.

| What | Where | Notes |
| --- | --- | --- |
| Hero portrait (optional) | `public/images/hero-portrait.jpg` | The left hero panel is a plain charcoal block by default. Drop a photo at this exact path and it fills the panel automatically — no code change needed. |
| Instagram URL | `src/components/Footer/Footer.tsx` — `INSTAGRAM_URL` constant | Powers the footer "Instagram" link. Not set yet. |

Already filled in: featured work artwork (`public/images/*.png`), contact email (`bpgotthatgas@gmail.com`, in both `ContactForm.tsx` and `Footer.tsx`), and the Apple Music playlist (embed + link, in `ListeningPanel.tsx`). If you ever want to swap the Formspree endpoint in instead of the mailto fallback, that constant is at the top of `src/components/ContactForm/ContactForm.tsx`.

## Structure

```
src/
  assets/
  components/       # Header, Hero, FeaturedWork, Discography, CreditRow, ListeningPanel, BookingSection, ContactForm, Footer
  data/              # projects.ts, credits.ts — edit these to add/remove credits and featured work
  styles/global.css  # design tokens, font import, resets
  utils/scroll.ts    # shared smooth-scroll helpers
```

Build verified clean with `npm run build` (TypeScript + Vite, no errors).
