import type { Metadata } from "next";
import { Document } from "@/components/document";
import { creator } from "@/lib/site";
export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Local Voice usage, accuracy, model licensing and support information.",
};
export default function Terms() {
  return (
    <Document
      title="A few clear expectations."
      intro="Please read these usage terms before downloading or using Local Voice."
      dated
    >
      <section>
        <h2>About the app.</h2>
        <p>
          Local Voice is an independent Android dictation app made by{" "}
          {creator.name}. It provides on-device speech recognition, local
          formatting and optional insertion into supported text fields. It is
          not affiliated with Wispr Flow or Handy.
        </p>
      </section>
      <section>
        <h2>Use it with permission.</h2>
        <p>
          Record only audio you have the right and permission to record. Use the
          app in accordance with applicable rules and the requirements of
          services where you insert text. You control the content you record,
          save, export and send.
        </p>
      </section>
      <section>
        <h2>Review important words.</h2>
        <p>
          Speech models can mishear, omit or invent words. Formatting and Roman
          Hindi conversion can also be imperfect. Review transcripts before
          using or sending them, especially when accuracy matters. Supported
          input fields, permission availability, speed and memory use vary by
          device and other apps.
        </p>
      </section>
      <section>
        <h2>Models and other components.</h2>
        <p>
          Local Voice uses third-party software and separately downloaded model
          weights. Those components remain subject to their respective licenses.
          Model downloads are optional and require storage and Internet access.
          This website’s artwork and branding are not a grant of rights to
          third-party research references or third-party trademarks.
        </p>
      </section>
      <section>
        <h2>Updates and support.</h2>
        <p>
          Features and model options may change in future versions. Use the
          release notes to understand changes and installation requirements.
          Keep a copy of any exported files you need before removing an app
          installation. Contact{" "}
          <a href={`mailto:${creator.email}`}>{creator.email}</a> for questions
          or support.
        </p>
      </section>
      <section>
        <h2>Privacy.</h2>
        <p>
          The <a href="/privacy">privacy page</a> explains local storage,
          permissions, downloads and website requests. These usage terms do not
          change any rights you have under applicable law.
        </p>
      </section>
    </Document>
  );
}
