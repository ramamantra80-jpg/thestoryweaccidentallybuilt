"use client";

import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

// Loads Google Analytics 4 (gtag.js). The per-scene virtual page views are
// fired from lib/analytics `pageview()`; here we just bootstrap gtag and let
// it send the initial landing view.
export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
