import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-orbitron"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://two-trader.com"),
  title: "T2T — Two-Trader | More than a platform. A trading ecosystem.",
  description:
    "T2T is a quantum-ready EVM chain with a canonical decision layer. Powered by the Smart Liquidity Engine (SLE).",
  keywords: [
    "T2T", "Two-Trader", "DEX", "SLE", "Smart Liquidity Engine", "trading", "blockchain", "EVM",
    "quantum-safe", "QPoS", "T2T DEX"
  ],
  openGraph: {
    title: "T2T — Two-Trader",
    description: "More than a platform. A trading ecosystem.",
    url: "https://two-trader.com",
    siteName: "T2T",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "T2T Two-Trader" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "T2T — Two-Trader",
    description: "More than a platform. A trading ecosystem.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
