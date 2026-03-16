import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { PROJECTS } from "@/constants/projects";

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const outputDir = path.resolve(process.cwd(), "src", "assets", "projects");

const main = async () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();

  for (const project of PROJECTS) {
    if (!project.projectUrl) continue;

    const slug = toSlug(project.title);
    const filePath = path.join(outputDir, `${slug}.jpg`);

    const page = await browser.newPage({
      viewport: { width: 1366, height: 768 },
      deviceScaleFactor: 1,
    });

    try {
      console.log(`Capturing ${project.title} -> ${filePath}`);
      await page.goto(project.projectUrl, {
        waitUntil: "networkidle",
        timeout: 45000,
      });
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: filePath,
        type: "jpeg",
        quality: 70,
        fullPage: false,
      });
    } catch (error) {
      console.error(`Failed to capture ${project.title}`, error);
    } finally {
      await page.close();
    }
  }

  await browser.close();
};

main();
