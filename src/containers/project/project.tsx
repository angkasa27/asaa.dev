import { ProjectCard } from "@/components/fragments/project-card";
import { PROJECTS } from "@/constants/projects";

export const ProjectContainer = () => {
  return (
    <main className="space-y-12 min-h-[calc(100dvh-var(--spacing)*66)]">
      <div className="sm:pt-12">
        <h2 className="text-center">{"Stuff i'm working on"}</h2>
        <p className="text-pretty font-sans text-sm sm:text-base leading-6 text-muted-foreground text-center">
          I love building seamless and visually engaging web experiences. Here
          are some of my projects that showcase my skills and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
};
