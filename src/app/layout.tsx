import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { copy } from "../../content/copy";
import { SITE_CONFIG } from "@/lib/constants";
import MetaPixel from "@/components/analytics/MetaPixel";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: copy.meta.title,
  description: copy.meta.description,
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [{ url: copy.meta.ogImage, width: 1200, height: 630 }],
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
    images: [copy.meta.ogImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
