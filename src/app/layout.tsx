import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, Libre_Franklin, Noto_Sans_Devanagari, Noto_Sans_Gujarati, Noto_Sans_Telugu, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import enTranslations from "../translations/en.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const notoSansGujarati = Noto_Sans_Gujarati({
  variable: "--font-noto-gujarati",
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: enTranslations.metadata.title,
  description: enTranslations.metadata.description,
  keywords: ["migration", "air quality", "AQI", "India", "health", "relocation", "AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${libreFranklin.variable} ${libreBaskerville.variable} ${notoSansDevanagari.variable} ${notoSansGujarati.variable} ${notoSansTelugu.variable} ${notoSansTamil.variable}`} suppressHydrationWarning={true}>
        <LanguageProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
