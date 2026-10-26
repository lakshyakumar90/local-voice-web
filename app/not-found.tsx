import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <h1>
        This thought
        <br />
        wandered off.
      </h1>
      <p>
        We couldn’t find that page. Head back to Local Voice to find the app,
        setup guide, and download.
      </p>
      <Link href="/" className="button button-primary">
        Back to Local Voice
      </Link>
    </main>
  );
}
