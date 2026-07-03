import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaxonwallace.com"),
  title: "Jaxon Wallace | BMS Engineer",
  description:
    "Jaxon Wallace — Adelaide BMS Engineer working with smart buildings, HVAC controls, Home Assistant services, GitHub projects, and social links.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Jaxon Wallace | BMS Engineer",
    description:
      "Adelaide BMS Engineer focused on smart building controls, HVAC automation, Home Assistant services, and useful web projects.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaxon Wallace — BMS Engineer in Adelaide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaxon Wallace | BMS Engineer",
    description: "Smart buildings, HVAC controls, Home Assistant services, GitHub projects, and links.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
