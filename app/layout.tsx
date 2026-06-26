import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display, Crimson_Text, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Story We Accidentally Built",
  description: "A private archive.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/thestoryweaccidentallybuilt.png",
    shortcut: "/thestoryweaccidentallybuilt.png",
    apple: "/thestoryweaccidentallybuilt.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${playfair.variable} ${crimson.variable} ${caveat.variable} h-full`}
    >
      <body className="h-full overflow-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
