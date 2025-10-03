import { MainContainer } from "@/containers/main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dimas Angkasa",
  description:
    "I'm Dimas Angkasa, a software engineer 👨‍💻 from Jakarta, Indonesia 🇮🇩",
};

export default function Home() {
  return <MainContainer />;
}
