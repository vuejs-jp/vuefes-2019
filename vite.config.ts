import { defineVitestProject } from "@nuxt/test-utils/config";
import { defineConfig } from "vite-plus";
import { nuxtViteConfig } from "./build/nuxt-vite.ts";

const nuxtTestProject = await defineVitestProject({
  test: {
    name: "nuxt",
    include: ["test/nuxt/*.spec.ts"],
    environment: "nuxt",
  },
});

export default defineConfig({
  ...nuxtViteConfig,
  lint: {
    plugins: ["vue", "vitest"],
    env: {
      builtin: true,
      browser: true,
      node: true,
    },
    ignorePatterns: [
      ".nuxt/**",
      ".output/**",
      ".playwright-cli/**",
      "coverage/**",
      "node_modules/**",
      "output/**",
    ],
  },
  fmt: {
    semi: true,
    singleQuote: false,
    printWidth: 80,
    sortPackageJson: true,
    ignorePatterns: [
      ".nuxt/**",
      ".output/**",
      ".playwright-cli/**",
      "coverage/**",
      "node_modules/**",
      "output/**",
    ],
  },
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["test/unit/*.spec.ts"],
          environment: "node",
        },
      },
      nuxtTestProject,
    ],
  },
});
