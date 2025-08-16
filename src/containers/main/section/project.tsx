import { ProjectCard } from "@/components/fragments/project-card";
import { PROJECTS } from "@/constants/projects";
import Link from "next/link";

// TODO: Add redirect to project page
// TODO: Add custom animation
// TODO: Add animation to "Highlighted"

export const ProjectSection = () => {
  return (
    <section id="project">
      <div className="space-y-2">
        <div className="rounded-md bg-foreground text-background px-2 py-1 text-sm mx-auto w-fit">
          Epic Stuff 🔥
        </div>
        <h2 className="text-center">Highlighted Projects</h2>
        <p className="text-pretty font-sans text-sm sm:text-base leading-6 text-muted-foreground text-center">
          Building seamless and visually engaging web experiences is my passion.
          Explore more of my projects at{" "}
          <Link
            href="/projects"
            className="dark:text-white text-foreground underline"
          >
            projects page
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};
