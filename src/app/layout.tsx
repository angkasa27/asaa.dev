import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingBar } from "@/components/fragments/floating-bar";
import { Providers } from "@/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// TODO: Add loading screen
// TODO: Add animation on page change

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-dvh bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 transition-colors duration-200 ${inter.variable}`}
      >
        <Providers>
          <FloatingBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
