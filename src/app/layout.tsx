import type { Metadata } from "next";
import { Figtree, Montserrat } from "next/font/google";
import "./globals.css";
import LoadingOverlay from "@/components/LoadingOverlay";
import CookieBanner from "@/components/CookieBanner";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Coach Giulia Vettor",
  description: "Train like a pro",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#4A2F78",
  },
};

// Next.js recommends exporting viewport separately for theme color
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#543585" },
    { media: "(prefers-color-scheme: dark)", color: "#4A2F78" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${montserrat.variable} antialiased relative`}
      >
        <LoadingOverlay />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
