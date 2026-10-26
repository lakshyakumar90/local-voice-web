import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header, Footer, MotionProvider } from "@/components/chrome";
import "./globals.css";
const manrope = localFont({
  src: "../public/brand/fonts/Manrope.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});
export const metadata: Metadata = {
  ...(process.env.SITE_URL
    ? { metadataBase: new URL(process.env.SITE_URL) }
    : {}),
  title: {
    default: "Local Voice — Your thoughts. Already written.",
    template: "%s · Local Voice",
  },
  description:
    "Offline voice typing for Android. Speak in English, Hindi or Roman Hindi, format your words, and keep your recognition on your phone.",
  applicationName: "Local Voice",
  openGraph: {
    title: "Local Voice — Your thoughts. Already written.",
    description:
      "Less typing. More you. Offline Android dictation by Lakshya Kumar.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Local Voice: your voice, your words, on your phone",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: {
    icon: "/brand/icons/favicon.svg",
    apple: "/brand/icons/app-icon-180.png",
  },
};
export const viewport: Viewport = {
  themeColor: "#F4FAF8",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
