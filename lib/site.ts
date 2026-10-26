import release from "./release.json";
export { release };
export const creator = {
  name: "Lakshya Kumar",
  portfolio: "https://lakshyakumar.in",
  linkedin: "https://www.linkedin.com/in/kumar-lakshya",
  twitter: "https://x.com/LakshyaKum67542",
  github: "https://github.com/lakshyakumar90",
  email: "lakshyakumar5023@gmail.com",
};
export const apk = {
  href: "/localvoice.apk",
  name: "localvoice.apk",
  size: `${(release.bytes / 1e6).toFixed(1)} MB`,
};
