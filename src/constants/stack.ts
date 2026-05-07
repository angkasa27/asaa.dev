export interface Stack {
  icon: string;
  label: string;
}

const FRONTEND_STACK: Stack[] = [
  { icon: "logos:react", label: "React" },
  { icon: "logos:nextjs-icon", label: "Next.js" },
  { icon: "logos:svelte-icon", label: "Svelte" },
  { icon: "logos:tailwindcss-icon", label: "Tailwind CSS" },
  { icon: "simple-icons:shadcnui", label: "Shadcn UI" },
  { icon: "logos:material-ui", label: "Material UI" },
  { icon: "simple-icons:radixui", label: "Radix UI" },
];

const BACKEND_STACK: Stack[] = [
  { icon: "logos:nestjs", label: "NestJS" },
  { icon: "logos:nodejs-icon", label: "Node.js" },
  { icon: "simple-icons:express", label: "Express" },
  { icon: "logos:mysql", label: "MySQL" },
  { icon: "logos:postgresql", label: "PostgreSQL" },
  { icon: "simple-icons:jsonwebtokens", label: "JSON Web Tokens" },
  { icon: "logos:mongodb-icon", label: "MongoDB" },
  { icon: "logos:redis", label: "Redis" },
];

const APP_STACK: Stack[] = [
  { icon: "logos:figma", label: "Figma" },
  { icon: "logos:github-icon", label: "Github" },
  { icon: "logos:postman-icon", label: "Postman" },
  { icon: "logos:jira", label: "Jira" },
  { icon: "logos:github-copilot", label: "Github Copilot" },
  { icon: "logos:openai-icon", label: "Codex" },
  { icon: "logos:claude-icon", label: "Claude" },
  { icon: "logos:visual-studio-code", label: "VS Code" },
  { icon: "logos:cloudflare-icon", label: "Cloudflare" },
  { icon: "logos:docker-icon", label: "Docker" },
];

export const STACK = [FRONTEND_STACK, BACKEND_STACK, APP_STACK];
