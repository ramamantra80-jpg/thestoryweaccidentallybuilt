// Virtual page views for the single-page story. We call the Vercel Web
// Analytics global (`window.va('pageview', …)`) directly, so each part of the
// story shows up as its own "page" in the Analytics → Pages view.
//
// Why not custom events? Those need a paid plan. Page views work on every plan.
// The browser URL never actually changes, so there's no routing / 404 risk.

type Va = (event: "pageview", props: { route: string; path: string }) => void;

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
  const va = (window as unknown as { va?: Va }).va;
  va?.("pageview", { route: path, path });
}
