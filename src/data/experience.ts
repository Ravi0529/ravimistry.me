export type Experience = {
  slug: string
  title: string
  section: string
  role: string
  location: string
  date: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    slug: "isea-internship",
    title: "Information Security Education and Awareness",
    section: "Internships",
    role: "Cyber Security & Generative AI Intern",
    location: "Ahmedabad, Gujarat",
    date: "Jan 2026 – Feb 2026",
    bullets: [
      "Built a cybersecurity analytics pipeline with hybrid anomaly detection (rule-based + Isolation Forest/LOF) achieving 0.91 weighted F1-score for parsing and sessionizing raw security log data.",
      "Created a RAG-based workflow using Hugging Face embeddings and Qdrant to map suspicious sessions to MITRE ATT&CK techniques and tactics.",
      "Delivered explainable results to analysts including IP-to-technique mapping, confidence-based reporting, and visualizations via Jupyter notebooks.",
    ],
  },
]

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug)
}

export function getExperienceSections() {
  const sections = new Map<string, Experience[]>()

  for (const experience of experiences) {
    const list = sections.get(experience.section) ?? []
    list.push(experience)
    sections.set(experience.section, list)
  }

  return sections
}
