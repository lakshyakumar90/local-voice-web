# Website references and evidence

26 October 2026. The prior Local Voice asset handoff is the visual authority: original teal/citron waveform marks, Manrope, porcelain/forest palette and glass-wave artwork. The website implements that identity; no third-party research artwork is served.

The explicitly requested `https://vibebrand.design` could not be resolved. Agent Reach's Jina backend returned a DNS failure; Exa was rate limited. Firecrawl was then used as the permitted fallback: search found similarly named, unrelated domains, and scraping the exact requested domain also failed DNS. Those other domains were not silently substituted. The implementation does not claim to reproduce or visually audit the unavailable reference.

[Motion's official React documentation](https://motion.dev/docs/react), read through Agent Reach/Jina, confirms the current `motion` package, `motion/react` imports, gesture states, layout transitions and reduced-motion APIs. The implementation uses language-tab layout transitions, user-triggered demo state transitions, small download hover/press feedback, and mobile navigation disclosure. No infinite decorative animation runs by default.

GSAP ScrollTrigger is dynamically imported for one desktop-only scroll-linked illustration. A matchMedia guard excludes reduced-motion and small screens, and the component context is reverted on unmount. Native scrolling is retained; Lenis is optional in the request and unnecessary here.

Next.js, React and Motion versions were verified against the live npm registry before installation. Exact installed versions are captured in package-lock.json. Framework resources remain self-hosted; no analytics, external font fetch, or third-party embed is included.

Creator links are sourced from the user's existing `C:/Lakshya/portfolio-main/components/around-the-web.tsx`, `components/contact-section.tsx`, and sitemap/structured-data source: portfolio lakshyakumar.in, LinkedIn kumar-lakshya, X LakshyaKum67542, GitHub lakshyakumar90, email lakshyakumar5023@gmail.com. They were not guessed from a name search.

The APK is the verified signed 0.3.0 ARM64 artifact from the Android project. It is copied without modifying its bytes to public/localvoice.apk. Its SHA-256 is checked against lib/release.json. Download response headers enforce the exact user-requested filename. No signing keys or credentials are copied to this website.

The existing asset handoff references Dribbble studies and an independently generated hero. Their research remains in the Android project's assets/brand/references; production public/brand contains only original assets and the properly licensed Manrope font. All shipping asset origins/checksums are recorded in ASSET_PROVENANCE.json.
