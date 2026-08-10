export type Experience = {
  slug: string;
  title: string;
  section: string;
  role: string;
  location: string;
  date: string;
  duration: string;
  description: string;
  image?: string;
  github?: string;
  paper?: string;
  bullets: string[];
  techStack: string[];
  phases?: {
    title: string;
    description: string;
    items: string[];
  }[];
};

export const experiences: Experience[] = [
  {
    slug: "isea-internship",
    title: "Information Security Education & Awareness (ISEA)",
    section: "Internships",
    role: "Cyber Security & Generative AI Intern",
    location: "Ahmedabad, Gujarat, India",
    date: "Jan 2026 – Feb 2026",
    duration: "2 Months",
    description:
      "Built an end-to-end cybersecurity pipeline for raw log ingestion, sessionization, hybrid anomaly detection and MITRE ATT&CK mapping using RAG (Retrieval-Augmented Generation) architecture. The pipeline converts raw logs into structured session intelligence and maps suspicious sessions to MITRE ATT&CK techniques, delivering explainable results to security analysts.",
    image: "/isea.png",
    github: "https://github.com/Ravi0529/isea-rag-attack-classification",
    paper:
      "https://drive.google.com/file/d/14JL-GAlhsqsMu4cFh4uNuT4BMBfVN07w/view?usp=sharing",
    techStack: [
      "Python 3.10+",
      "Qdrant (Vector Database)",
      "Hugging Face Embeddings",
      "Isolation Forest / LOF",
      "MITRE ATT&CK STIX",
      "Docker",
      "Jupyter Notebooks",
      "Pandas, NumPy, Scikit-learn",
      "Matplotlib, Seaborn",
    ],
    bullets: [
      "Built a cybersecurity analytics pipeline with hybrid anomaly detection (rule-based + Isolation Forest/LOF) achieving 0.91 weighted F1-score for parsing and sessionizing raw security log data.",
      "Created a RAG-based workflow using Hugging Face embeddings and Qdrant to map suspicious sessions to MITRE ATT&CK techniques and tactics.",
      "Delivered explainable results to analysts including IP-to-technique mapping, confidence-based reporting and visualizations via Jupyter notebooks.",
      "Processed raw security logs through 9-phase pipeline from ingestion to final analyst-facing reports.",
      "Published research paper documenting the methodology and results.",
    ],
    phases: [
      {
        title: "Phase 1-3: Data Processing & Detection",
        description:
          "Raw log ingestion, enrichment, sessionization and hybrid anomaly detection.",
        items: [
          "Ingested raw log files and parsed into structured events using custom parsers",
          "Enriched events with additional context and sessionized with configurable time gaps (600s) and minimum events (2)",
          "Applied rule-based detection combined with Isolation Forest/LOF for anomaly scoring",
          "Achieved 0.91 weighted F1-score using hybrid detection approach",
        ],
      },
      {
        title: "Phase 4-6: RAG & ATT&CK Mapping",
        description:
          "Building ATT&CK knowledge base, indexing with Qdrant and mapping suspicious sessions.",
        items: [
          "Downloaded MITRE ATT&CK STIX data and built structured cache with technique indexes",
          "Created Qdrant vector database with embedded ATT&CK techniques and scored sessions",
          "Implemented semantic retrieval to map suspicious sessions to relevant ATT&CK techniques",
          "Generated session-to-ATT&CK mapping with confidence scores and top-3 technique matches",
        ],
      },
      {
        title: "Phase 7-9: Evaluation & Reporting",
        description:
          "Template generation, evaluation and final analyst-facing reports.",
        items: [
          "Generated manual label templates for detection and mapping evaluation",
          "Evaluated pipeline performance using proxy and labeled modes with detailed metrics",
          "Produced final analyst-facing summaries with source IP to tactic-technique mappings",
          "Created visualizations including top tactics, techniques and embedding model comparisons",
        ],
      },
    ],
  },
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getExperienceSections() {
  const sections = new Map<string, Experience[]>();

  for (const experience of experiences) {
    const list = sections.get(experience.section) ?? [];
    list.push(experience);
    sections.set(experience.section, list);
  }

  return sections;
}
