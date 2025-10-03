import type { Metadata } from "next";
import { Footer } from "@/components/fragments/footer";
import { Navigation } from "@/components/fragments/navigation/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://asaa.dev"),
  title: "Dimas Angkasa",
  description:
    "Software Engineer who delivers enterprise systems end-to-end and a front-end creative at heart.",
  openGraph: {
    title: "Dimas Angkasa",
    description:
      "Software Engineer who delivers enterprise systems end-to-end and a front-end creative at heart.",
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
    <Navigation>
      {children}
      <Footer />
    </Navigation>
  );
}
