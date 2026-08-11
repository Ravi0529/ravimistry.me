# Ravi Mistry Portfolio Website

This repository contains a personal portfolio website built with Astro, React, and Tailwind CSS. It showcases my projects, experience, resume preview and contact details using a custom markdown-style presentation system.

## What’s included

- Astro-based static site architecture
- React integration with `@astrojs/react`
- Tailwind CSS styling via `@tailwindcss/vite`
- Custom markdown editor-style layout in `src/components/markdown-editor`
- Projects and experiences driven from data files in `src/data`
- Responsive desktop and mobile-ready design
- Resume preview with embedded Google Drive iframe
- Project detail pages with GitHub/live links and feature lists

## Project structure

```text
/
├── public/                     # Static assets and images
├── src/
│   ├── components/             # UI components and editor layout
│   ├── data/                   # Project and experience metadata
│   ├── layouts/                # Shared page layout components
│   ├── pages/                  # Astro routes and pages
│   └── styles/                 # Global and markdown styles
├── astro.config.mjs            # Astro integration configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## Core pages

- `/` — Home / About Me
- `/projects` — Projects index
- `/projects/[slug]` — Project detail pages
- `/experience` — Experience overview
- `/experience/[slug]` — Experience detail pages
- `/resume` — Resume preview page
- `/contact` — Contact page

## Main dependencies

- `astro` — Framework for building the site
- `@astrojs/react` — React support inside Astro
- `@tailwindcss/vite` — Tailwind CSS plugin for Vite
- `tailwindcss` — Utility-first CSS framework
- `react`, `react-dom` — React runtime
- `lucide-react` — Icon library
- `@fontsource-variable/inter` and `@fontsource-variable/jetbrains-mono` — Web fonts
- `shadcn`, `radix-ui` — Accessible UI primitives
- `recharts` — Chart rendering utilities
- `sonner` — Toast notifications

## Local development

Use the following commands from the project root:

```sh
pnpm install
pnpm dev
```

Then open the local development server on the port shown in your terminal (typically `http://localhost:4173`).

## Build and preview

```sh
pnpm build
pnpm preview
```

## Customization guide

- Update projects: `src/data/projects.ts`
- Update experiences: `src/data/experience.ts`
- Modify site layout: `src/layouts/MarkdownEditorLayout.astro`
- Change global styles: `src/styles/global.css`
- Adjust markdown styling: `src/styles/markdown-editor.css`
- Edit home page content: `src/pages/index.astro`

## Configuration

The Astro configuration used in this project is:

```js
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## Notes

- Project and experience detail pages are generated statically using `getStaticPaths`.
- Markdown editor-style pages are built with reusable `MdLine` components.
- The site is optimized for both desktop and mobile screens.

## Useful commands

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `pnpm install`         | Install dependencies                 |
| `pnpm dev`             | Run development server               |
| `pnpm build`           | Build the site for production        |
| `pnpm preview`         | Preview the production build locally |
| `pnpm astro -- --help` | Show available Astro CLI options     |

## License

This is a personal portfolio project.
