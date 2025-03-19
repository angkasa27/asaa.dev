"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { PreviewUrl } from "../preview-url";

// TODO: Add custom animation

export const ProjectCard = ({
  title,
  description,
  stack,
  projectUrl,
  githubUrl,
  className,
}: {
  title: string;
  description: string;
  stack: string[];
  projectUrl: string;
  githubUrl?: string;
  className?: ClassValue;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border transition-transform duration-200 overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="flex justify-center items-center w-full aspect-video bg-neutral-900 text-white">
        <PreviewUrl
          url={projectUrl}
          width={640}
          height={360}
          className="object-cover w-full relative z-10"
          loading="lazy"
          delay={3000}
        />
        <SiGithub className="size-16 absolute" />
      </div>
      <div className="p-2 flex flex-col gap-2 flex-grow">
        <p className="font-semibold tracking-tight text-base">{title}</p>
        <p className="max-w-full text-pretty font-sans text-xs text-muted-foreground text-justify flex-grow">
          {description}
        </p>
        <div className="flex gap-1">
          {stack.map((s, i) => (
            <div
              key={i}
              className="rounded border font-semibold border-transparent bg-secondary text-secondary-foreground px-1 py-0 text-[10px]"
            >
              {s}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <ButtonRedirect href={githubUrl}>
              <SiGithub className="size-3.5" /> Source
            </ButtonRedirect>
          )}
          {projectUrl && (
            <ButtonRedirect href={projectUrl}>
              <LuExternalLink className="size-3.5" /> Live
            </ButtonRedirect>
          )}
        </div>
      </div>
    </div>
  );
};

const ButtonRedirect = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: ClassValue;
}) => (
  <Link
    className={cn(
      "items-center rounded border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-1 text-[10px]",
      className
    )}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);
