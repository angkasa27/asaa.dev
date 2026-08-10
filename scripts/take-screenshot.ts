import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const artifactPath = "/Users/angkasa/.gemini/antigravity/brain/c6e52e2b-574e-4e73-9d4d-04c1be7c8539/resume_preview.png";
const distDir = "/Users/angkasa/Projects/asaa.dev/dist";

const mimeTypes: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url || "/";
  if (reqUrl.endsWith("/")) reqUrl += "index.html";
  const filePath = path.join(distDir, reqUrl);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const main = async () => {
  server.listen(4321, async () => {
    console.log("Static server running on http://localhost:4321");
    const browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: 1200, height: 1600 },
      deviceScaleFactor: 2,
    });

    try {
      await page.goto("http://localhost:4321/resume/", { waitUntil: "networkidle" });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: artifactPath, fullPage: true });
      console.log("Screenshot saved to", artifactPath);
    } catch (err) {
      console.error("Screenshot error:", err);
    } finally {
      await browser.close();
      server.close();
    }
  });
};

main();
