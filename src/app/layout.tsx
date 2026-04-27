import type { Metadata } from "next";
import "./globals.css";
import { DottedSurface } from "@/components/ui/DottedSurface"

export const metadata: Metadata = {
  title: "Numbers — n8n Automation Agency",
  description:
    "Numbers builds custom n8n automations that take manual, repetitive work off your team's plate. Book a free consultation and find out what you should stop doing by hand.",
  metadataBase: new URL("https://numbers.la"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://numbers.la",
    siteName: "Numbers",
    title: "Numbers — n8n Automation Agency",
    description:
      "Numbers builds custom n8n automations that take manual, repetitive work off your team's plate. Book a free consultation and find out what you should stop doing by hand.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numbers — n8n Automation Agency",
    description:
      "Numbers builds custom n8n automations that take manual, repetitive work off your team's plate. Book a free consultation and find out what you should stop doing by hand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      {/* TODO: Add Vercel Analytics */}
      <body style={{ position: "relative" }}>
        <DottedSurface style={{ zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
