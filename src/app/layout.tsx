import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import { SWRegister } from "@/components/sw-register";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Dilbilgisi öğren, oyun gibi keyif al. Günde 5 dakika, 7 günde fark.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Grammar Hero · Dilbilgisi öğren, oyun gibi keyif al",
    template: "%s · Grammar Hero",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Grammar Hero",
  authors: [{ name: "Grammar Hero" }],
  keywords: [
    "ingilizce",
    "dilbilgisi",
    "grammar",
    "duolingo",
    "öğrenme",
    "oyunlaştırma",
  ],
  openGraph: {
    title: "Grammar Hero",
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "tr_TR",
    siteName: "Grammar Hero",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grammar Hero",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Grammar Hero",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `try{var t=localStorage.getItem('grammar-hero-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(_){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Grammar Hero",
  description: SITE_DESCRIPTION,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  inLanguage: "tr-TR",
  offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-svh bg-background text-foreground antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          İçeriğe atla
        </a>
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        <Toaster richColors position="top-center" closeButton />
        <SWRegister />
      </body>
    </html>
  );
}
