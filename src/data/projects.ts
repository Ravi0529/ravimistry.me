export type Project = {
  slug: string
  title: string
  section: string
  tech: string
  date: string
  bullets: string[]
}

export const projects: Project[] = [
  {
    slug: "r0",
    title: "r0",
    section: "Web Dev Projects",
    tech: "Next.js, TypeScript, Prisma, PostgreSQL, Inngest AI Agents, E2B Sandbox, Gemini AI, Clerk",
    date: "August 2026",
    bullets: [
      "Built an AI-powered full-stack application that converts natural language prompts into fully functional, sandboxed web applications with live previews and code exploration.",
      "Implemented an event-driven async generation pipeline using Inngest — spins up isolated E2B sandboxes where AI agents write files, execute terminal commands, and render real-time application previews.",
      "Engineered a side-by-side workspace with file explorer, syntax-highlighted code viewer, project threads for iterative development, and Clerk authentication with persistent project history.",
    ],
  },
  {
    slug: "gitpal",
    title: "gitPal",
    section: "Web Dev Projects",
    tech: "Next.js, PostgreSQL, Pinecone, Inngest, Vercel AI SDK, OpenRouter, GitHub API, Razorpay",
    date: "June 2026",
    bullets: [
      "Built a production-grade SaaS that automates code reviews on GitHub PRs — listens to webhook events, fetches diffs, indexes them into Pinecone vector DB, and uses LLMs to post structured review comments directly to PR threads.",
      "Implemented on-demand codebase-wide sync that indexes up to 200 files per repo into Pinecone, providing the AI reviewer with deeper repository context when analyzing diffs.",
      "Added subscription tiers (Free/Pro) with Razorpay billing, Inngest background jobs for reliable processing, and an intuitive dashboard with PR histories and usage analytics.",
    ],
  },
  {
    slug: "hire-iq",
    title: "Hire IQ",
    section: "Web Dev Projects",
    tech: "Next.js, PostgreSQL, NextAuth, Recharts, Docker, Redis-Stack, LangChain, OpenAI",
    date: "October 2025",
    bullets: [
      "Built an AI-powered interview platform where recruiters post jobs and applicants apply with resumes — questions are dynamically generated from both using LangChain + OpenAI with TTS/STT support.",
      "Developed real-time feedback dashboards with Recharts showing hireability scores, reasoning, and performance analytics for applicants and recruiters.",
      "Containerized the full app with Docker, using Redis-Stack for caching and PostgreSQL + Prisma ORM for scalable data management.",
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getProjectSections() {
  const sections = new Map<string, Project[]>()

  for (const project of projects) {
    const list = sections.get(project.section) ?? []
    list.push(project)
    sections.set(project.section, list)
  }

  return sections
}
