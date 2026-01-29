import { ProjectContainer } from "@/containers/project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore my Projects",
  description:
    "Software Engineer who delivers enterprise systems end-to-end and a front-end creative at heart.",
};

export default function Project() {
  return <ProjectContainer />;
}
