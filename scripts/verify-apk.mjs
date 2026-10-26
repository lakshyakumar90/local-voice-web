import { readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
const release = JSON.parse(
  readFileSync(new URL("../lib/release.json", import.meta.url)),
);
const path = new URL("../public/localvoice.apk", import.meta.url);
const hash = createHash("sha256").update(readFileSync(path)).digest("hex");
if (
  hash !== release.sha256 ||
  statSync(path).size !== release.bytes ||
  release.filename !== "localvoice.apk"
)
  throw new Error("The APK does not match its signed release receipt.");
console.log(
  `localvoice.apk verified: ${release.bytes} bytes / SHA-256 ${hash}`,
);
