"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { apk, creator } from "@/lib/site";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function DownloadLink({
  className = "",
  children = "Download for Android",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.a
      href={apk.href}
      download={apk.name}
      className={`button button-primary ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.16 }}
    >
      {children}
      <ArrowDown size={18} aria-hidden="true" />
    </motion.a>
  );
}
const nav = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#models", label: "Models" },
  { href: "/guide", label: "Setup guide" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Local Voice home">
          <Image
            src="/brand/logos/wordmark-ink.svg"
            width={177}
            height={43}
            alt="Local Voice"
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((n) => (
            <Link href={n.href} key={n.label}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link className="header-download" href="/#download">
          Get the app
          <ArrowDown size={15} aria-hidden="true" />
        </Link>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {nav.map((n) => (
              <Link key={n.label} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
            <a
              href={apk.href}
              download={apk.name}
              onClick={() => setOpen(false)}
            >
              Download APK
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
function TwitterIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.6-8.7L.8 2h6.4l4.4 6.6L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
    </svg>
  );
}
export function Footer() {
  const socials = [
    { label: "Portfolio", href: creator.portfolio, icon: ArrowUpRight },
    { label: "LinkedIn", href: creator.linkedin, icon: Linkedin },
    { label: "X / Twitter", href: creator.twitter, icon: TwitterIcon },
    { label: "GitHub", href: creator.github, icon: Github },
  ];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Image
              src="/brand/logos/wordmark-white.svg"
              width={204}
              height={50}
              alt="Local Voice"
            />
            <p>
              A little less keyboard.
              <br />A little more you.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>Explore</span>
              <Link href="/guide">Setup guide</Link>
              <Link href="/#models">Local models</Link>
              <Link href="/releases">Release notes</Link>
              <Link href="/#download">Download APK</Link>
            </div>
            <div>
              <span>Made by Lakshya</span>
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Local Voice. Made by{" "}
            <a
              href={creator.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lakshya Kumar
            </a>
            .
          </p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href={`mailto:${creator.email}`} aria-label="Email Lakshya">
              <Mail size={16} aria-hidden="true" /> Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
