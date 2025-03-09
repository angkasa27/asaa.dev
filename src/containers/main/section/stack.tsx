import { InfiniteSlider } from "@/components/fragments/infinite-slider/infinite-slider";
import { FaJava } from "react-icons/fa6";
import {
  SiFigma,
  SiGithub,
  SiGithubcopilot,
  SiJavascript,
  SiJira,
  SiMui,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiPython,
  SiRadixui,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// TODO: Change stack to colored icon
// TODO: Change stack to front end, back end, and complementary tools

export const StackSection = () => {
  return (
    <section id="stack" className="h-screen">
      <div className="relative">
        <InfiniteSlider speedOnHover={20} speed={50}>
          {LANGUAGE_STACK.map((stack, i) => (
            <div
              key={i}
              className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 mb-4"
            >
              <stack.icon />
              <p>{stack.name}</p>
            </div>
          ))}
        </InfiniteSlider>{" "}
        <InfiniteSlider speedOnHover={20} speed={50} reverse>
          {LIBRARY_STACK.map((stack, i) => (
            <div
              key={i}
              className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 mb-4"
            >
              <stack.icon />
              <p>{stack.name}</p>
            </div>
          ))}
        </InfiniteSlider>{" "}
        <InfiniteSlider speedOnHover={20} speed={50}>
          {APP_STACK.map((stack, i) => (
            <div
              key={i}
              className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50"
            >
              <stack.icon />
              <p>{stack.name}</p>
            </div>
          ))}
        </InfiniteSlider>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};

const LANGUAGE_STACK = [
  {
    icon: FaJava,
    name: "Java",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
  },
  {
    icon: SiPython,
    name: "Python",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },

  // Repeated

  {
    icon: FaJava,
    name: "Java",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
  },
  {
    icon: SiPython,
    name: "Python",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },
];

const LIBRARY_STACK = [
  {
    icon: SiReact,
    name: "React",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  {
    icon: SiShadcnui,
    name: "Shadcn UI",
  },
  {
    icon: SiMui,
    name: "Material UI",
  },
  {
    icon: SiRadixui,
    name: "Radix UI",
  },
];
const APP_STACK = [
  {
    icon: SiFigma,
    name: "Figma",
  },
  {
    icon: SiGithub,
    name: "Github",
  },
  {
    icon: SiPostman,
    name: "Postman",
  },
  {
    icon: SiOpenai,
    name: "ChatGPT",
  },
  {
    icon: SiJira,
    name: "Jira",
  },
  {
    icon: SiGithubcopilot,
    name: "Github Copilot",
  },
  {
    icon: VscVscode,
    name: "VS Code",
  },
];
