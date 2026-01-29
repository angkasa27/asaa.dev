import { IconType } from "react-icons";
// import { FaJava } from "react-icons/fa6";
import {
  SiCloudflare,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGithubcopilot,
  // SiJavascript,
  SiJira,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  // SiPython,
  SiRadixui,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiTailwindcss,
  // SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Stack {
  icon: IconType;
  name: string;
}

const FRONTEND_STACK = [
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

const BACKEND_STACK = [
  {
    icon: SiNestjs,
    name: "NestJS",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  {
    icon: SiExpress,
    name: "Express",
  },
  {
    icon: SiMysql,
    name: "MySQL",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
  },
  {
    icon: SiJsonwebtokens,
    name: "JSON Web Tokens",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
  },
  {
    icon: SiRedis,
    name: "Redis",
  },
];

// const LANGUAGE_STACK = [
//   {
//     icon: FaJava,
//     name: "Java",
//   },
//   {
//     icon: SiJavascript,
//     name: "JavaScript",
//   },
//   {
//     icon: SiPython,
//     name: "Python",
//   },
//   {
//     icon: SiTypescript,
//     name: "TypeScript",
//   },

//   // Repeated

//   {
//     icon: FaJava,
//     name: "Java",
//   },
//   {
//     icon: SiJavascript,
//     name: "JavaScript",
//   },
//   {
//     icon: SiPython,
//     name: "Python",
//   },
//   {
//     icon: SiTypescript,
//     name: "TypeScript",
//   },
// ];

// const LIBRARY_STACK = [
//   {
//     icon: SiReact,
//     name: "React",
//   },
//   {
//     icon: SiNextdotjs,
//     name: "Next.js",
//   },
//   {
//     icon: SiTailwindcss,
//     name: "Tailwind CSS",
//   },
//   {
//     icon: SiShadcnui,
//     name: "Shadcn UI",
//   },
//   {
//     icon: SiMui,
//     name: "Material UI",
//   },
//   {
//     icon: SiRadixui,
//     name: "Radix UI",
//   },
//   {
//     icon: SiNestjs,
//     name: "NestJS",
//   },
//   {
//     icon: SiNodedotjs,
//     name: "Node.js",
//   },
//   {
//     icon: SiExpress,
//     name: "Express",
//   },
// ];

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
  {
    icon: SiCloudflare,
    name: "Cloudflare",
  },
];

export const STACK = [FRONTEND_STACK, BACKEND_STACK, APP_STACK];
