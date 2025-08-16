import { ProjectCard } from "@/components/fragments/project-card";
import { PROJECTS } from "@/constants/projects";

export const ProjectContainer = () => {
  return (
    <main className="space-y-24 min-h-[calc(100dvh-var(--spacing)*66)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
};
