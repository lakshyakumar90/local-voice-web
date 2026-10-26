"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  AudioLines,
  Check,
  ChevronDown,
  FileText,
  Headphones,
  Languages,
  LockKeyhole,
  Mic,
  Play,
  ShieldCheck,
  Smartphone,
  Square,
  WandSparkles,
  WifiOff,
} from "lucide-react";
import { DownloadLink } from "./chrome";
import { apk, release } from "@/lib/site";

const examples = [
  {
    label: "English",
    input: "I want these features: UI, front end, back end, database.",
    intro: "I want these features:",
    items: ["UI", "Front end", "Back end", "Database."],
    lang: "en",
  },
  {
    label: "Hindi",
    input: "मुझे ये चीज़ें चाहिए: दूध, चाय, चीनी।",
    intro: "मुझे ये चीज़ें चाहिए:",
    items: ["दूध", "चाय", "चीनी।"],
    lang: "hi",
  },
  {
    label: "Roman Hindi",
    input: "मुझे ये चीज़ें चाहिए: दूध, चाय, चीनी।",
    intro: "Mujhe ye cheezein chahiye:",
    items: ["Doodh", "Chai", "Cheeni."],
    lang: "hi-Latn",
  },
];
const faqs = [
  [
    "Does it really work offline?",
    "Yes. Once you have downloaded a model, speech recognition and formatting run on your phone. Internet access is used for model downloads you choose to start. There is no cloud transcription account to sign into.",
  ],
  [
    "Can I use it in other apps?",
    "The optional field mic appears when you focus a supported, editable text field. Tap it, speak, then stop. Local Voice inserts the final text after checking that the original field has not changed. Password fields are excluded, and some editors may require copying the result.",
  ],
  [
    "What about Hindi and Roman Hindi?",
    "Choose Hindi script to keep Hindi in Devanagari, or English + Roman Hindi to romanize recognized Hindi words. Choose English for English-only speech. Model recognition can make mistakes, especially with mixed-language speech; review important text.",
  ],
  [
    "Are my recordings saved?",
    "Automatic history and recording retention are off by default. You can explicitly save a transcript, or opt into history and audio retention in settings. Retained text and audio are encrypted locally. History older than seven days is pruned when the app starts.",
  ],
  [
    "Is there a recording limit?",
    "Each recording can be up to ten minutes. Longer recordings and larger models need more processing time and memory. You can stop or cancel at any point.",
  ],
  [
    "Will this replace my earlier debug installation?",
    "This signed release installs separately from earlier debug builds so their data remains intact. Download a model and grant permissions in the release app. Disable the old app’s floating mic before enabling the new one. Export anything important before uninstalling the debug app.",
  ],
  [
    "Why does Android restrict Accessibility access?",
    "Android can restrict sensitive permissions for sideloaded apps. Local Voice uses Accessibility only for the optional field mic and guarded insertion. Read the in-app disclosure and Android’s permission screen. Release signing does not bypass your phone’s restrictions.",
  ],
];

function Wave({ active = false }: { active?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <div className="wave" aria-hidden="true">
      {[20, 34, 50, 34, 20].map((h, i) => (
        <motion.span
          key={i}
          style={{ height: h }}
          animate={
            active && !reduced ? { scaleY: [0.4, 1, 0.55] } : { scaleY: 1 }
          }
          transition={
            active && !reduced
              ? {
                  duration: 0.6,
                  delay: i * 0.075,
                  repeat: 2,
                  ease: "easeInOut",
                }
              : { duration: 0.15 }
          }
        />
      ))}
    </div>
  );
}
function Demo() {
  const [mode, setMode] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  const example = examples[mode];
  function switchMode(index: number) {
    if (timeout.current) clearTimeout(timeout.current);
    setPlaying(false);
    setMode(index);
  }
  function play() {
    if (timeout.current) clearTimeout(timeout.current);
    if (playing) {
      setPlaying(false);
      return;
    }
    setPlaying(true);
    timeout.current = setTimeout(() => setPlaying(false), 1800);
  }
  return (
    <div className="demo">
      <div className="demo-toolbar">
        <div className="demo-tabs" role="tablist" aria-label="Example language">
          {examples.map((e, i) => (
            <button
              id={`example-tab-${i}`}
              type="button"
              key={e.label}
              role="tab"
              aria-selected={mode === i}
              aria-controls="example-panel"
              tabIndex={mode === i ? 0 : -1}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  const next =
                    (mode + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                  switchMode(next);
                  document.getElementById(`example-tab-${next}`)?.focus();
                }
              }}
              onClick={() => switchMode(i)}
            >
              {mode === i && (
                <motion.span
                  className="tab-indicator"
                  layoutId="demo-tab"
                  transition={{ type: "spring", stiffness: 400, damping: 36 }}
                />
              )}
              <span>{e.label}</span>
            </button>
          ))}
        </div>
        <span className="demo-note">Illustrative formatting example</span>
      </div>
      <div
        className="demo-panels"
        id="example-panel"
        role="tabpanel"
        aria-labelledby={`example-tab-${mode}`}
      >
        <div className="speech-panel">
          <div className="panel-label">
            <Mic size={16} aria-hidden="true" />
            You say
          </div>
          <p lang={mode ? "hi" : "en"}>“{example.input}”</p>
          <button
            className="demo-play"
            onClick={play}
            aria-label={
              playing ? "Stop formatting example" : "Play formatting example"
            }
          >
            {playing ? (
              <Square size={14} fill="currentColor" aria-hidden="true" />
            ) : (
              <Play size={14} fill="currentColor" aria-hidden="true" />
            )}
            {playing ? "Stop example" : "Play example"}
          </button>
        </div>
        <div className="result-panel">
          <div className="panel-label">
            <WandSparkles size={16} aria-hidden="true" />
            Ready to use
          </div>
          <div className="result-content" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={false}>
              {playing ? (
                <motion.div
                  key="listening"
                  className="demo-listening"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Wave active />
                  <span>Turning speech into structure…</span>
                </motion.div>
              ) : (
                <motion.div
                  key={mode}
                  initial={{ opacity: 0.6, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  lang={example.lang}
                >
                  <p>{example.intro}</p>
                  <ul>
                    {example.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="result-status">
            <Check size={14} aria-hidden="true" />
            Your words, with a little structure.
          </span>
        </div>
      </div>
      <p className="demo-disclosure">
        A visual example, not a live recorder. Smart formatting uses local
        rules; recognition and Roman Hindi spelling can vary.
      </p>
    </div>
  );
}

export function Home() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [modelLanguage, setModelLanguage] = useState("English");
  useEffect(() => {
    if (reduced || !root.current) return;
    let disposed = false;
    let revert = () => {};
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          const media = gsap.matchMedia();
          media.add(
            "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
            () => {
              gsap.fromTo(
                ".privacy-art",
                { y: 26 },
                {
                  y: -26,
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".privacy-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            },
          );
        }, root);
        revert = () => ctx.revert();
      },
    );
    return () => {
      disposed = true;
      revert();
    };
  }, [reduced]);
  return (
    <main id="main" ref={root}>
      <section className="hero container">
        <div className="hero-copy">
          <h1>
            Your thoughts.
            <br />
            Already written.
          </h1>
          <p>
            For the messages, ideas, and little things you’d rather say out
            loud. Meet voice typing that stays on your Android phone.
          </p>
          <div className="hero-actions">
            <DownloadLink />
            <Link href="#how-it-works" className="text-link">
              See how it works
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="release-line">
            <span className="status-dot" />
            Android 8+<span aria-hidden="true">/</span>
            {apk.size}
            <span aria-hidden="true">/</span>v{release.version}
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/brand/illustrations/voice-material.webp"
            width={1536}
            height={1024}
            alt=""
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
            className="hero-art"
          />
          <div className="hero-caption">
            <span className="caption-icon">
              <WifiOff size={19} aria-hidden="true" />
            </span>
            <span>
              Big thoughts.
              <br />
              <strong>Small digital footprint.</strong>
            </span>
            <Image
              src="/brand/logos/mark-teal.svg"
              width={40}
              height={40}
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="benefit-strip">
        <div className="container">
          <span>
            <Smartphone size={19} aria-hidden="true" />
            Made for Android
          </span>
          <span>
            <WifiOff size={19} aria-hidden="true" />
            Offline after model download
          </span>
          <span>
            <Languages size={19} aria-hidden="true" />
            English, Hindi & Roman Hindi
          </span>
          <span>
            <LockKeyhole size={19} aria-hidden="true" />
            No cloud transcription
          </span>
        </div>
      </div>

      <section className="section container" id="how-it-works">
        <div className="section-intro">
          <h2>
            Say it your way.
            <br />
            Give it a little shape.
          </h2>
          <p>
            A thought doesn’t always arrive in neat paragraphs. Speak naturally.
            Local Voice helps with lists, line breaks, and the little pauses in
            between.
          </p>
        </div>
        <Demo />
        <div className="steps">
          <article>
            <span>1</span>
            <div>
              <h3>Find your words.</h3>
              <p>
                Tap the mic in a supported text field, or start a recording in
                the app.
              </p>
            </div>
          </article>
          <article>
            <span>2</span>
            <div>
              <h3>Let them flow.</h3>
              <p>
                Speak for up to ten minutes. Stop when you’re done, or cancel to
                discard.
              </p>
            </div>
          </article>
          <article>
            <span>3</span>
            <div>
              <h3>Keep going.</h3>
              <p>
                Your final text goes into the original field. It never presses
                Send.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="features-section section" id="features">
        <div className="container">
          <div className="section-intro">
            <h2>
              A little helper.
              <br />
              For a lot of your day.
            </h2>
            <p>
              From a quick reply to the idea you don’t want to lose. Familiar
              tools, without a subscription to a cloud transcription service.
            </p>
          </div>
          <div className="feature-composition">
            <article className="feature-main">
              <div>
                <AudioLines size={28} strokeWidth={1.6} aria-hidden="true" />
                <h3>
                  Talk where
                  <br />
                  you already type.
                </h3>
                <p>
                  The optional field mic stays close to your words. Record,
                  stop, and return to what you were doing.
                </p>
                <Link href="/guide#field-mic" className="text-link">
                  Set up the field mic
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <div
                className="field-illustration"
                aria-label="Illustrative text field with a listening mic"
              >
                <div className="illustration-caption">An idea for later</div>
                <p>
                  Let’s build something
                  <br />
                  worth talking about.
                  <span className="illustration-caret" aria-hidden="true" />
                </p>
                <div className="illustration-recording">
                  <Wave />
                  <span>Listening illustration</span>
                  <Mic size={18} aria-hidden="true" />
                </div>
              </div>
            </article>
            <div className="feature-side">
              <article>
                <div className="feature-icon">
                  <Languages size={24} aria-hidden="true" />
                </div>
                <h3>Words that feel like you.</h3>
                <p>
                  English, Hindi script, or English + Roman Hindi. Choose how
                  your thoughts come through.
                </p>
              </article>
              <article>
                <div className="feature-icon">
                  <FileText size={24} aria-hidden="true" />
                </div>
                <h3>Keep the good bits.</h3>
                <p>
                  Save a transcript. Opt into recording retention to listen
                  back, then copy or export when you need it.
                </p>
                <span className="inline-detail">
                  <Headphones size={15} aria-hidden="true" />
                  Saved audio playback, built in.
                </span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="container privacy-inner">
          <div className="privacy-copy">
            <ShieldCheck size={38} strokeWidth={1.4} aria-hidden="true" />
            <h2>
              Your voice.
              <br />
              Your phone.
              <br />
              Your business.
            </h2>
            <p>
              Recognition happens on your device. No cloud transcription. No
              account. Just a model you choose to download, and your own voice.
            </p>
            <ul>
              <li>
                <Check size={18} aria-hidden="true" />
                History and audio retention are opt-in.
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                Retained text and audio are encrypted locally.
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                You choose what to save, export, or delete.
              </li>
            </ul>
            <Link href="/privacy" className="text-link">
              A clearer look at privacy
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="privacy-art">
            <Image
              src="/brand/illustrations/local-processing.svg"
              width={960}
              height={560}
              alt="Illustration of speech processing inside a phone"
              sizes="(max-width: 800px) 90vw, 46vw"
            />
            <div className="privacy-art-note">
              <LockKeyhole size={18} aria-hidden="true" />
              <span>
                Offline recognition.
                <br />
                <strong>After your model download.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="models">
        <div className="section-intro">
          <h2>
            A voice model.
            <br />
            Not a one-size-fits-all.
          </h2>
          <p>
            Download once inside the app, then dictate offline. Start small, or
            choose a larger model when accuracy matters more than download size.
          </p>
        </div>
        <div className="model-picker">
          <div>
            <label htmlFor="language-choice">I mainly speak</label>
            <select
              id="language-choice"
              value={modelLanguage}
              onChange={(e) => setModelLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Hindi / Roman Hindi</option>
            </select>
          </div>
          <p aria-live="polite">
            {modelLanguage === "English" ? (
              <>
                <strong>Whisper Base</strong> is a practical starting point. Try
                Moonshine for English-only partial previews.
              </>
            ) : (
              <>
                <strong>Whisper Small</strong> is worth trying for Hindi.
                Recognition can still make mistakes; it is not a guarantee of
                accuracy.
              </>
            )}
          </p>
        </div>
        <div className="model-table-wrap">
          <table className="model-table">
            <caption className="sr-only">
              Available local speech recognition models
            </caption>
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">A good fit for</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Whisper Tiny",
                  "A smaller multilingual starting point",
                  "~32 MB",
                ],
                ["Whisper Base", "Everyday multilingual dictation", "~60 MB"],
                [
                  "Whisper Small",
                  "A larger option for multilingual speech",
                  "~190 MB",
                ],
                [
                  "Moonshine Tiny Streaming",
                  "English-only partial previews",
                  "~45 MB",
                ],
              ].map(([name, fit, size]) => (
                <tr
                  key={name}
                  className={
                    (
                      modelLanguage === "English"
                        ? name === "Whisper Base"
                        : name === "Whisper Small"
                    )
                      ? "model-recommended"
                      : ""
                  }
                >
                  <th scope="row">
                    {name}
                    {(modelLanguage === "English"
                      ? name === "Whisper Base"
                      : name === "Whisper Small") && (
                      <span className="model-badge">Start here</span>
                    )}
                  </th>
                  <td>{fit}</td>
                  <td>{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small-note">
          Models are separate from the {apk.size} app download. Optional Silero
          VAD is under 1 MB. Speed, memory use, and accuracy depend on your
          phone and speech.
        </p>
      </section>

      <section className="faq-section section">
        <div className="container faq-grid">
          <div>
            <h2>
              A few things
              <br />
              you might wonder.
            </h2>
            <p>
              It’s your mic, your text, and your phone.
              <br />
              You should know what’s happening.
            </p>
            <Link href="/guide" className="text-link">
              Read the full guide
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="download-section">
        <div className="container download-inner">
          <Image
            src="/brand/icons/app-icon-192.png"
            width={88}
            height={88}
            alt="Local Voice app icon"
          />
          <h2>
            Your next thought
            <br />
            is a download away.
          </h2>
          <p>Less time on the keyboard. More room for what’s on your mind.</p>
          <DownloadLink>Download localvoice.apk</DownloadLink>
          <div className="download-meta">
            Version {release.version}
            <span aria-hidden="true">/</span>
            {apk.size}
            <span aria-hidden="true">/</span>Android 8+ · ARM64
          </div>
          <div className="download-extra">
            <Link href="/guide">Installation guide</Link>
            <Link href="/releases">Release notes & checksum</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
