import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Five Clues: World Race",
  description: "Race friends to guess a country from five clues. 10 rounds, 2–8 players, niche regional foods, and 5-to-1 scoring.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
