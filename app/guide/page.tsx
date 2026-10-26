import type { Metadata } from "next";
import Link from "next/link";
import { Document } from "@/components/document";
import { DownloadLink } from "@/components/chrome";
export const metadata: Metadata = {
  title: "Setup guide",
  description:
    "Install Local Voice, choose a local model, enable the field mic and start offline Android dictation.",
};
export default function Guide() {
  return (
    <Document
      title="From download to your first words."
      intro="A few small steps, then a little less typing. Here’s how to get Local Voice ready on your Android phone."
    >
      <nav className="guide-nav" aria-label="Guide contents">
        <a href="#install">Install</a>
        <a href="#model">Pick a model</a>
        <a href="#field-mic">Field mic</a>
        <a href="#languages">Languages</a>
        <a href="#history">History & audio</a>
      </nav>
      <section id="install">
        <h2>1. Install the app.</h2>
        <p>
          Download <strong>localvoice.apk</strong> on an ARM64 Android phone
          running Android 8 or later. Open the file and follow Android’s
          installer. Your browser or file manager may ask for permission to
          install an app from this source.
        </p>
        <div className="document-download">
          <DownloadLink>Download localvoice.apk</DownloadLink>
        </div>
        <p>
          Already using a development build? This release installs alongside it
          with separate storage. Keep the old app until you’ve exported anything
          important. The new release uses the teal waveform icon.
        </p>
      </section>
      <section id="model">
        <h2>2. Choose a local model.</h2>
        <p>
          Open Models in the app and choose a download.{" "}
          <strong>Whisper Base</strong> is a practical multilingual starting
          point. <strong>Whisper Small</strong> is worth trying for Hindi if you
          can spare the extra storage and processing time.{" "}
          <strong>Moonshine Tiny Streaming</strong> supports English-only
          partial previews.
        </p>
        <p>
          Model downloads need Internet access. Once a model has downloaded and
          verified, recognition works locally. Models are not included in the
          APK. <Link href="/#models">Compare model download sizes.</Link>
        </p>
      </section>
      <section id="field-mic">
        <h2>3. Make the mic work your way.</h2>
        <p>
          On first launch, the setup guide starts with restricted-settings
          review, then microphone, overlay, accessibility and notifications. You
          can choose Set up later and record in the app with microphone
          permission alone.
        </p>
        <p>
          For dictation inside other apps, read the accessibility disclosure,
          then enable Local Voice’s Accessibility service and
          display-over-other-apps permission. Focus a supported input field and
          tap the mic that appears. The small recording controls let you stop or
          cancel without opening the main app.
        </p>
        <p>
          If Android restricts access for this sideloaded app, follow the
          explanation in the app’s permission help and Android’s app-info
          screen. “Allow restricted settings” may be available in the app-info
          menu. Open App info from Settings → Permissions to target this
          install, rather than an older debug app. Work-managed or
          administrator-restricted phones may prevent access. Release signing
          does not override these restrictions.
        </p>
        <p>
          Disable your previous debug app’s field mic before enabling the
          release’s mic so the two services don’t compete. Android’s separate
          floating Accessibility shortcut is not required.
        </p>
      </section>
      <section>
        <h2>4. Speak, stop, keep writing.</h2>
        <p>
          Speak for up to ten minutes, then tap Stop. Your chosen model
          processes the recording on your phone. If the original input field
          still matches, the final text is inserted there. Local Voice does not
          press Send.
        </p>
        <p>
          If you change fields, edit the text while processing, or use an
          unsupported editor, you may see a safe Copy fallback. Password fields
          are excluded. Larger models and long recordings take more time; keep
          the original field open until processing finishes.
        </p>
      </section>
      <section id="languages">
        <h2>Your language, your script.</h2>
        <ul>
          <li>
            <strong>English:</strong> use for English-only speech.
          </li>
          <li>
            <strong>Hindi script:</strong> keep recognized Hindi in Devanagari.
          </li>
          <li>
            <strong>English + Roman Hindi:</strong> turn recognized Hindi words
            into Roman letters while retaining English words.
          </li>
        </ul>
        <p>
          Recognition can miss words or mishear mixed-language speech. Review
          important text. Model size can help, but does not guarantee an
          accurate transcript.
        </p>
      </section>
      <section>
        <h2>A little structure, when you want it.</h2>
        <p>
          Smart formatting uses local rules for lists, paragraph breaks, spoken
          punctuation and light filler cleanup. Try “first… second…”, “bullet
          point”, “new paragraph”, or “I want these features: UI, front end,
          back end, database.” Choose Original wording to bypass this formatting
          layer.
        </p>
        <p>
          This is not a generative writing assistant. It won’t reliably infer
          every implicit list or rewrite every sentence.
        </p>
      </section>
      <section>
        <h2>Optional cloud cleanup.</h2>
        <p>
          In Settings → AI cleanup, you may save a key for OpenAI, Groq,
          OpenRouter, Anthropic, Gemini, or an OpenAI-compatible HTTPS endpoint.
          Fetch available models or enter an ID, then enable cloud cleanup only
          after reading the consent. This sends the finished transcript text;
          the recording remains on your phone. Provider usage and privacy terms
          apply to your key.
        </p>
        <p>
          Choose Rules, On-device, Cloud or Auto. Download Qwen2.5-0.5B in AI
          cleanup for optional local AI: 491.4 MB, ARM64 and at least 3 GB RAM.
          With Whisper Base the combined model download is 551.1 MB. Cloud
          failures try the downloaded local model, then rules. Auto can try
          local first. The result identifies the backend and any fallback.
        </p>
        <p>
          Eligible ChatGPT Plus or Pro users can choose Continue with ChatGPT in
          Settings. This uses the account’s plan allowance, not an API key.
          Real-account verification and Android performance measurements for
          this release remain outstanding. Manage usage opens ChatGPT settings.
        </p>
        <p>
          Dictionary supports custom spellings and spoken aliases; snippets
          insert protected text blocks. Per-app rules can block cloud and apply
          an optional cloud tone. Correction suggestions are opt-in and always
          require Add. History can show original versus cleaned text.
        </p>
      </section>
      <section>
        <h2>Returning from ChatGPT sign-in.</h2>
        <p>
          Continue with ChatGPT opens your device browser so it can reuse your
          existing login. After authorization, the callback page tries to return
          to Local Voice. If your browser blocks that automatic navigation, tap
          Return to Local Voice. Account verification and model loading have
          separate states; a model-list error can be retried after the account
          connects.
        </p>
      </section>
      <section id="history">
        <h2>Keep what matters. Leave the rest.</h2>
        <p>
          Automatic history and audio retention are off by default. Save a
          transcript explicitly, or enable history in settings. To hear
          recordings later, separately opt into keeping recordings with history.
          Old text-only entries cannot recover audio that wasn’t saved.
        </p>
        <p>
          Saved recording details support playback, pause and seeking. Copy text
          or export text/WAV files through Android’s document picker. Retained
          text and audio are encrypted locally; metadata such as dates and model
          names is separate. History older than seven days is pruned when the
          app starts.
        </p>
        <p>
          You can delete individual entries or clear history. Exported files are
          under your control and outside the app’s retention rules.{" "}
          <Link href="/privacy">Read the privacy details.</Link>
        </p>
      </section>
      <section>
        <h2>Need a hand?</h2>
        <p>
          <a href="mailto:lakshyakumar5023@gmail.com">Email Lakshya</a> with
          your phone model, Android version, selected model and a short
          description of the issue. Please don’t include private recordings or
          transcripts unless you choose to share them.
        </p>
      </section>
    </Document>
  );
}
