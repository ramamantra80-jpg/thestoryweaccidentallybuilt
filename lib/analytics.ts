// Virtual page views for the single-page story. Each part of the story is
// reported as its own "page" to BOTH Vercel Web Analytics and Google Analytics
// 4 — the browser URL never actually changes, so there's no routing / 404 risk.
//
// (We use page views rather than custom events because Vercel custom events
// need a paid plan, while page views work on every plan.)

/** Google Analytics 4 measurement id. Override with NEXT_PUBLIC_GA_ID. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-ERF49D1DZQ";

type Va = (event: "pageview", props: { route: string; path: string }) => void;
type Gtag = (...args: unknown[]) => void;

/** turn a label like "Ch1 cover" into a tidy path like "/ch1-cover" */
export function partPath(label: string): string {
  const slug = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `/${slug}`;
}

/** record a virtual page view for the given path */
export function pageview(path: string): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { va?: Va; gtag?: Gtag };

  // Vercel Web Analytics
  w.va?.("pageview", { route: path, path });

  // Google Analytics 4 (manual page_view for the SPA)
  if (GA_ID) {
    w.gtag?.("event", "page_view", {
      page_location: window.location.origin + path,
      page_path: path,
      page_title: document.title,
    });
  }
}
