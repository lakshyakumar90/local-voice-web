import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const receipt = JSON.parse(
  readFileSync(new URL("../lib/release.json", import.meta.url)),
);
for (const route of [
  "/",
  "/guide",
  "/privacy",
  "/terms",
  "/releases",
  "/robots.txt",
  "/sitemap.xml",
  "/brand/illustrations/voice-material.webp",
  "/brand/illustrations/local-processing.svg",
  "/brand/logos/wordmark-ink.svg",
  "/brand/logos/wordmark-white.svg",
  "/brand/fonts/Manrope.woff2",
  "/og.png",
]) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, route);
  await response.arrayBuffer();
}
assert.equal((await fetch(new URL("/not-a-real-page", base))).status, 404);
const apk = await fetch(new URL("/localvoice.apk", base));
assert.equal(apk.status, 200);
assert.equal(
  apk.headers.get("content-type"),
  "application/vnd.android.package-archive",
);
assert.equal(
  apk.headers.get("content-disposition"),
  'attachment; filename="localvoice.apk"',
);
const bytes = Buffer.from(await apk.arrayBuffer());
assert.equal(bytes.length, receipt.bytes);
assert.equal(createHash("sha256").update(bytes).digest("hex"), receipt.sha256);
const range = await fetch(new URL("/localvoice.apk", base), {
  headers: { Range: "bytes=0-63" },
});
assert.equal(range.status, 206);
assert.deepEqual(Buffer.from(await range.arrayBuffer()), bytes.subarray(0, 64));
const checksum = await fetch(new URL("/localvoice.apk.sha256", base));
assert.equal(
  (await checksum.text()).trim(),
  `${receipt.sha256}  localvoice.apk`,
);
console.log(
  "PASS: 13 routes/assets, custom 404, APK filename/type/byte count/SHA-256, range download and checksum file.",
);
