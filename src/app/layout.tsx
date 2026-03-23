import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import VideoBackground from "../components/VideoBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirSafe Move - AI-Powered Migration Advisor",
  description: "Make data-driven relocation decisions with AI. Find cities with better air quality, affordable living, and career opportunities tailored to your profile.",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <VideoBackground />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
