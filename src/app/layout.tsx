import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { Footer } from "@/components/fragments/footer";
import { Navigation } from "@/components/fragments/navigation/navigation";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asaa.dev"),
  title: "Dimas Angkasa",
  description:
    "Software Engineer who loves turning ideas into clean, functional, and visually stunning web experiences.",
  openGraph: {
    title: "Dimas Angkasa",
    description:
      "Software Engineer who loves turning ideas into clean, functional, and visually stunning web experiences.",
    url: "https://asaa.dev",
    siteName: "Dimas Angkasa",
    locale: "en_US",
    type: "website",
  },
};

// TODO: Add loading screen
// TODO: Add animation on page changes

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-dvh bg-background font-sans antialiased max-w-2xl mx-auto pb-12 pt-24 px-6 transition-colors duration-200 ${inter.variable}`}
      >
        <Providers>
          <Navigation>
            {children}
            <Footer />
          </Navigation>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
