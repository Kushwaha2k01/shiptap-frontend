import type { Metadata } from "next";
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
  title: "ShipTap - All-in-One Gaming Platform for Developers, Players & Businesses",
  description: "Discover ShipTap, the ultimate gaming ecosystem. Publish games, host esports tournaments, connect gaming zones, and enjoy exclusive rewards. Join India's gaming revolution.",
  keywords: ["gaming platform", "esports tournaments", "indie game store", "gaming zones", "gaming card", "gaming community", "ShipTap"],
  authors: [{ name: "ShipTap Team" }],
  creator: "ShipTap",
  publisher: "ShipTap",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ShipTap - All-in-One Gaming Platform",
    description: "Join the future of gaming with ShipTap. Publish, play, and compete in India's premier gaming ecosystem.",
    url: "https://shiptap.in",
    siteName: "ShipTap",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ShipTap Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipTap - All-in-One Gaming Platform",
    description: "Join the future of gaming with ShipTap. Publish, play, and compete in India's premier gaming ecosystem.",
    images: ["/logo.png"],
  },
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
  alternates: {
    canonical: "https://shiptap.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ShipTap",
              "url": "https://shiptap.in",
              "logo": "https://shiptap.com/logo.png",
              "description": "All-in-one gaming platform for developers, players, and businesses.",
              "sameAs": [
                "https://twitter.com/shiptap",
                "https://facebook.com/shiptap",
                "https://linkedin.com/company/shiptap"
              ]
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
