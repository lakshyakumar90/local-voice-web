import type { Metadata } from "next";
import { Document } from "@/components/document";
import { DownloadLink } from "@/components/chrome";
import { apk, release } from "@/lib/site";
export const metadata: Metadata = {
  title: "Release notes & download verification",
  description:
    "Local Voice 0.4.2 signed ARM64 APK, file checksum, supported Android versions and installation notes.",
};
export default function Releases() {
  return (
    <Document
      title="A smaller app. The same local heart."
      intro="Local Voice 0.4.2 formats spoken lists by themselves — announce “it’s a list” and your items become a clean bulleted list, no spoken colon needed. It keeps 0.4.1’s on-device Qwen cleanup, provider model discovery, ChatGPT plan sign-in, dictionary and snippets. Speech recognition stays on-device."
      dated
    >
      <div className="document-download">
        <DownloadLink>Download localvoice.apk</DownloadLink>
      </div>
      <dl className="release-facts">
        <div>
          <dt>Version</dt>
          <dd>
            {release.version} (build {release.versionCode})
          </dd>
        </div>
        <div>
          <dt>File size</dt>
          <dd>
            {apk.size} · {release.bytes.toLocaleString("en-US")} bytes
          </dd>
        </div>
        <div>
          <dt>Android</dt>
          <dd>Android 8 / API 26 or later</dd>
        </div>
        <div>
          <dt>Architecture</dt>
          <dd>ARM64 phones</dd>
        </div>
        <div>
          <dt>Package</dt>
          <dd>{release.package}</dd>
        </div>
        <div>
          <dt>Build</dt>
          <dd>Signed, optimized release</dd>
        </div>
      </dl>
      <section>
        <h2>What’s new.</h2>
        <ul>
          <li>
            Spoken lists format by themselves: “it’s a list”, “here’s a list
            of”, “make a list” and plain “a list of …” become a heading with
            bulleted items — no spoken colon required. Leading articles drop (“a
            pen” → “Pen”) and endings like “and many more” stay on their own
            line.
          </li>
          <li>
            AI cleanup backends may now add list structure the rules missed,
            only for announced lists and only under strict validator limits;
            structure is never invented for ordinary comma sentences and is
            never removed.
          </li>
          <li>
            List formatting works offline in the rules layer; the optional
            Qwen2.5-0.5B local model and cloud providers refine wording within
            lines. A 66-case golden set guards all of it, including narratives
            that must stay sentences.
          </li>
          <li>
            Carries 0.4.1: optional bring-your-own-key cleanup for OpenAI, Groq,
            OpenRouter, Anthropic, Gemini and compatible HTTPS endpoints (keys
            encrypted on-device, cloud off until consented), verified Qwen local
            cleanup with cloud → local → rules fallback, dictionary, protected
            snippets, per-app privacy rules and history.
          </li>
          <li>
            ChatGPT plan sign-in is implemented; real-account and Android device
            validation remain outstanding.
          </li>
          <li>
            Guided first-run permissions, compact AI settings with info dialogs,
            and ChatGPT sign-in in your device browser with a return-to-app
            link.
          </li>
        </ul>
        <p>
          Local models, language controls, smart formatting, field-mic controls,
          history and optional saved audio remain part of the app. Models are
          downloaded separately.
        </p>
      </section>
      <section>
        <h2>Coming from a debug build?</h2>
        <p>
          This release uses its own package and release-signing identity. It
          installs alongside the debug app, so your earlier models and history
          stay in that installation. Set up the release’s model and permissions
          again. Disable the previous field mic before enabling the new one.
          Export important entries before uninstalling an old version.
        </p>
      </section>
      <section>
        <h2>Verify your download.</h2>
        <p>
          The download is named <strong>localvoice.apk</strong>. Its SHA-256 is:
        </p>
        <p className="checksum">{release.sha256}</p>
        <p>
          <a href="/localvoice.apk.sha256" download="localvoice.apk.sha256">
            Download the checksum file
          </a>
          .
        </p>
        <h3>Release certificate SHA-256</h3>
        <p className="checksum">{release.certificateSha256}</p>
        <p>
          Signing uses a dedicated RSA-4096 key and APK Signature Scheme v2.
          Future release updates should keep this certificate.
        </p>
      </section>
      <section>
        <h2>What was checked.</h2>
        <p>
          The release build, 107 JVM tests, signature verification, ARM64
          contents and 16 KB ZIP/native alignment checks pass. Release lint has
          zero errors. The pinned on-device cleanup model was replayed over the
          production prompts: 62 of 65 final outputs match the expected text
          exactly. This is not a claim that every Android editor or device has
          been tested.
        </p>
        <p>
          No phone was connected for the minified-release build verification.
          After installing, try a short recording, insertion into an empty
          field, another append, cancellation, saved-audio playback and the
          launcher shortcut before removing your earlier app.
        </p>
      </section>
    </Document>
  );
}
