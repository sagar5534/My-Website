import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Unified collection for both projects and blog posts. An entry with a `repo`
// links out to GitHub; without one it renders an internal /blog/<slug> page.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(), // URL or /public path; falls back if absent
    repo: z.string().url().optional(), // present => card links to GitHub
    type: z.enum(["project", "blog"]).default("project"), // section grouping
    featured: z.boolean().default(false), // surfaces on the homepage grid
    draft: z.boolean().default(false), // hidden everywhere when true
  }),
});

export const collections = { posts };
