import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const context = process.env.CONTEXT ?? "";
const publishDir = resolve("dist");
const redirectsPath = resolve(publishDir, "_redirects");

const previewRedirects = ["/ /2019/ 302", "/2019 /2019/ 301"];

if (context === "production") {
  await rm(redirectsPath, { force: true });
  console.log(`Skipped Netlify preview redirects for production context`);
  process.exit(0);
}

await mkdir(publishDir, { recursive: true });
await writeFile(redirectsPath, `${previewRedirects.join("\n")}\n`);

console.log(
  `Wrote ${previewRedirects.length} Netlify redirects for context "${context || "unknown"}" to ${redirectsPath}`,
);
