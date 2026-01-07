import type { Metadata } from "next";
import { Figtree, Montserrat } from "next/font/google";
import "./globals.css";
import LoadingOverlay from "@/components/LoadingOverlay";
import CookieBanner from "@/components/CookieBanner";
import ClarityAnalytics from "@/components/ClarityAnalytics";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.coachvettor.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Coach Giulia Vettor | Personal Training & Coaching Fitness",
    template: "%s | Coach Giulia Vettor",
  },
  description:
    "Coaching personalizzato per raggiungere i tuoi obiettivi fitness. Programmi di allenamento su misura con Giulia Vettor, personal trainer certificata.",
  keywords: [
    "personal trainer",
    "fitness coach",
    "allenamento personalizzato",
    "coaching fitness",
    "Giulia Vettor",
    "programmi allenamento",
  ],
  authors: [{ name: "Giulia Vettor" }],
  creator: "Giulia Vettor",
  publisher: "Giulia Vettor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Coach Giulia Vettor",
    title: "Coach Giulia Vettor | Personal Training & Coaching Fitness",
    description:
      "Coaching personalizzato per raggiungere i tuoi obiettivi fitness. Programmi di allenamento su misura con Giulia Vettor.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coach Giulia Vettor - Personal Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Giulia Vettor | Personal Training & Coaching Fitness",
    description:
      "Coaching personalizzato per raggiungere i tuoi obiettivi fitness. Programmi di allenamento su misura.",
    images: ["/images/og-image.png"],
  },
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
        <ClarityAnalytics />
        <LoadingOverlay />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
