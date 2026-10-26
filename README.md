# Local Voice website

Responsive Next.js App Router / TypeScript website for Local Voice, created in `C:\Lakshya\localvoice-web`.

## Run

```powershell
cd C:\Lakshya\localvoice-web
npm install
npm run dev
```

Open http://127.0.0.1:3000. For production: `npm run build`, then `npm start`.

## Included

- Original Local Voice assets, self-hosted Manrope, responsive layouts and custom 404.
- Motion microinteractions: download feedback, language-tab layout transitions, user-triggered demo and mobile menu. Reduced-motion-aware.
- One lazy-loaded GSAP/ScrollTrigger privacy illustration on desktop, with cleanup; native scrolling.
- Language formatting example (explicitly illustrative), model recommendations, FAQ, guide, privacy, terms and release notes.
- Real creator links sourced from the existing portfolio project.
- Real signed ARM64 APK at `/localvoice.apk`; every download uses exactly `localvoice.apk`, with matching Content-Disposition.
- Checksum download, signature fingerprint and factual installation transition notes.
- No analytics, remote fonts, microphone access, backend account, invented reviews or paid-service claims. Optional BYOK/ChatGPT cloud cleanup, downloaded Qwen local AI, rules fallback, dictionary and snippets are described on the guide and privacy pages. Live-account and Android device verification remain outstanding.

## Verification

```powershell
npm run verify:apk
npm run typecheck
npm run format:check
npm run build
# While production server is running:
npm run test:smoke
```

The smoke check validates routes/assets, custom 404, the APK filename/MIME type/length/SHA-256, partial-download responses, and checksum file. Browser interaction/responsive results and independent design review are recorded in docs. The original unavailable design URL, reference evidence and asset provenance are documented in `docs/RESEARCH.md` and `docs/ASSET_PROVENANCE.json`.

## Before deployment

Set `SITE_URL` to the actual public origin before `npm run build`; until then sitemap is intentionally empty and Next uses localhost for social-image URLs. No public domain or hosting is invented. Confirm hosting-specific privacy/logging facts and owner-review the privacy/terms text before publishing. This task creates a local project, not a deployment.

The installed APK uses `dev.localvoice.app.release` and installs alongside older debug APKs. It starts with separate app data, model downloads and permissions. Never copy Android signing keys into this website. The signing identity remains private in the Android project.

## Update the APK

Copy a new properly signed release to `public/localvoice.apk`; update `lib/release.json` and `public/localvoice.apk.sha256` with its real version, byte count and SHA-256. Preserve the exact filename. Run verification, production build and smoke checks before distributing it. Do not strip/repack the signed APK after signing.

Documentation-only research under `assets/` is not served. Only production assets live in `public/brand/`. The original font license is retained. Asset generator scripts remain in the Android repo.
