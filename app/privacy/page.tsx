import type { Metadata } from "next";
import { Document } from "@/components/document";
import { creator } from "@/lib/site";
export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Local Voice handles recordings, local models, optional history and website requests.",
};
export default function Privacy() {
  return (
    <Document
      title="Your words deserve a little privacy."
      intro="Here’s what the Android app keeps, what it doesn’t send for recognition, and how this website works."
      dated
    >
      <section>
        <h2>Who makes Local Voice?</h2>
        <p>
          Local Voice is made by {creator.name}. For privacy questions, contact{" "}
          <a href={`mailto:${creator.email}`}>{creator.email}</a>.
        </p>
      </section>
      <section>
        <h2>Speech recognition stays on your phone.</h2>
        <p>
          The app records audio using your microphone and processes speech with
          a model installed on your device. It does not send recordings or
          transcripts to a cloud transcription service. No account is required
          for local recognition; optional ChatGPT sign-in is separate. There is
          no analytics service or telemetry endpoint built into the current app.
        </p>
        <p>
          Internet access is used for model downloads you explicitly request. A
          model host receives the normal network information needed to deliver a
          download, such as your IP address. Downloads are checked against
          pinned sizes and checksums.
        </p>
      </section>
      <section>
        <h2>Cloud text cleanup is an optional setting.</h2>
        <p>
          The app can send the completed transcript text to the AI provider you
          select, but this is off by default and requires a provider API key or
          eligible ChatGPT plan sign-in and a separate consent. The request does
          not include microphone audio, nearby field text, saved history, or the
          app name. Up to ten relevant dictionary spellings and an optional tone
          may accompany the transcript. Provider keys and ChatGPT tokens are
          encrypted with Android Keystore and stored outside Android backups.
        </p>
        <p>
          A provider receives the transcript and handles it under its own
          privacy, retention, and billing terms. Check those terms before
          enabling a provider. If a request fails, the app keeps the transcript
          and tries the optional downloaded Qwen cleanup model, then local
          formatting rules. Model availability and device memory requirements
          apply.
        </p>
      </section>
      <section>
        <h2>Dictionary and correction suggestions stay local.</h2>
        <p>
          Custom spellings, snippets and per-app rules are stored encrypted.
          Correction suggestions are separately opt-in: after insertion, the app
          observes only that inserted span in the same eligible field for up to
          15 seconds and offers a single-word dictionary suggestion. A word is
          saved only when you tap Add. Surrounding field text is neither saved
          nor sent to a provider.
        </p>
        <p>
          Optional ChatGPT sign-in uses OpenAI’s official open-source
          authorization flow. Requests count against an eligible account’s plan
          allowance. Disconnect clears local access, refresh and ID tokens; the
          registration mapping remains for reconnect. Remote revocation may
          require ChatGPT settings when offline.
        </p>
      </section>
      <section>
        <h2>History and recordings are your choice.</h2>
        <p>
          Automatic history and recording retention are off by default. You may
          explicitly save a transcript. Recording retention requires a separate
          opt-in and enables history. Retained transcript text and audio are
          encrypted using Android Keystore-backed AES-GCM. Metadata, including
          dates, duration and model names, is stored separately.
        </p>
        <p>
          History older than seven days is pruned when the app starts. Unsaved
          results expire from app state after five minutes. You can delete
          individual history entries or clear history in settings. Android app
          backup is disabled.
        </p>
        <p>
          Copying uses your Android clipboard. Text and WAV exports create files
          you select through Android’s document picker. Those copies are outside
          the app’s retention and deletion rules.
        </p>
      </section>
      <section>
        <h2>Permissions have a specific job.</h2>
        <ul>
          <li>
            <strong>Microphone:</strong> record audio for dictation.
          </li>
          <li>
            <strong>Accessibility and overlay:</strong> optional field-mic
            controls and guarded insertion into a supported, focused editor.
          </li>
          <li>
            <strong>Notifications and foreground services:</strong> keep
            recording/processing visible to Android and to you.
          </li>
          <li>
            <strong>Internet and network state:</strong> model downloads you
            choose to start, and transcript text only if you enable cloud
            cleanup.
          </li>
        </ul>
        <p>
          Password fields and excluded apps are not eligible for insertion. The
          app checks the original target before inserting final text and does
          not press Send.
        </p>
      </section>
      <section>
        <h2>This website is separate from the app.</h2>
        <p>
          The website does not request microphone access, record your voice,
          create an account, or set analytics or advertising cookies. The
          formatting demonstration is an illustration and does not process your
          speech. Fonts and artwork are served locally with the site.
        </p>
        <p>
          Visiting pages or downloading the APK sends normal HTTP request
          information to the server hosting this site. Hosting providers may
          keep request and security logs according to their own practices. We
          have not added a website analytics service. If website hosting or data
          practices change, this page should be updated to describe them.
        </p>
      </section>
      <section>
        <h2>Links to other places.</h2>
        <p>
          Creator profile links and model hosts are separate services with their
          own privacy practices. Opening an external link or downloading a model
          is your choice.
        </p>
      </section>
    </Document>
  );
}
