import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export function Document({
  title,
  intro,
  children,
  dated = false,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
  dated?: boolean;
}) {
  return (
    <main id="main" className="document container">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Local Voice
      </Link>
      <h1>{title}</h1>
      <p className="document-lede">{intro}</p>
      {dated && <p className="document-date">Last updated 26 October 2026</p>}
      {children}
    </main>
  );
}
