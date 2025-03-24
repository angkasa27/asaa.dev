import { ProjectContainer } from "@/containers/project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore my Projects",
  description:
    "I'm Dimas Angkasa, a software engineer 👨‍💻 from Jakarta, Indonesia 🇮🇩",
};

export default function Project() {
  return <ProjectContainer />;
}
