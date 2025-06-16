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
  title: "Iniuria - Legit CS2 Cheat",
  description:
    "Iniuria is a trusted CS2 cheat platform focused on legit gameplay. Enjoy advanced features with maximum security.",
  keywords: [
    "iniuria",
    "cs2 cheat",
    "legit cheat",
    "aimbot",
    "iniuria csgo",
    "iniuria cs2",
    "safe cs2 cheat",
  ],
  authors: [{ name: "Iniuria", url: "https://iniuria.us" }],
  creator: "Iniuria Development Team",
  metadataBase: new URL("https://iniuria.us"),
  openGraph: {
    title: "Iniuria - Legit CS2 Cheat",
    description:
      "Trusted cheat for CS2 focused on legit gameplay. Security and performance.",
    url: "https://iniuria.us",
    siteName: "Iniuria",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Iniuria Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iniuria - Legit CS2 Cheat",
    description:
      "Trusted cheat for CS2 focused on legit gameplay. Security and performance.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
