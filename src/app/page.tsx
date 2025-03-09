import { MainContainers } from "@/containers/main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello there 👋",
  description:
    "I'm Dimas Angkasa, a software engineer 👨‍💻 from Jakarta, Indonesia 🇮🇩",
};

export default function Home() {
  return <MainContainers />;
}
