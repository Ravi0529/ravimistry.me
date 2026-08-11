export type Project = {
  slug: string;
  title: string;
  section: string;
  tech: string;
  date: string;
  description: string;
  image?: string;
  github?: string;
  live?: string;
  bullets: string[];
  features?: string[];
};

export const projects: Project[] = [
  {
    slug: "gitpal",
    title: "gitPal",
    section: "Development Projects",
    tech: "Next.js, PostgreSQL, Pinecone, Inngest, Vercel AI SDK, OpenRouter, GitHub API, Razorpay",
    date: "June 2026",
    description:
      "Production-grade SaaS that automates code reviews on GitHub pull requests using AI. Listens to webhook events, fetches diffs, indexes them into Pinecone vector DB, and uses LLMs to post structured review comments directly to PR threads.",
    image: "/gitpal.svg",
    github: "https://github.com/Ravi0529/gitpal",
    live: "https://gitpal.ravimistry.me",
    bullets: [
      "Built a production-grade SaaS that automates code reviews on GitHub PRs — listens to webhook events, fetches diffs, indexes them into Pinecone vector DB, and uses LLMs to post structured review comments directly to PR threads.",
      "Implemented on-demand codebase-wide sync that indexes up to 200 files per repo into Pinecone, providing the AI reviewer with deeper repository context when analyzing diffs.",
      "Added subscription tiers (Free/Pro) with Razorpay billing, Inngest background jobs for reliable processing, and an intuitive dashboard with PR histories and usage analytics.",
    ],
    features: [
      "Native GitHub App Integration — Install on organizations or accounts with secure file access",
      "Webhook-Triggered PR Reviews — Automatically evaluates changes on opened, synchronized, or reopened PRs",
      "Structured Multi-Dimensional AI Reviews — Checks correctness, security vulnerabilities, performance, reliability, and maintainability",
      "Isolated Vector-Based Context — Each PR has its own Pinecone namespace for semantic search",
      "On-Demand Repository Codebase Sync — Indexes up to 200 files per repo for deeper context",
      "Intuitive SaaS Dashboard — Overview statistics, usage summaries, repository status, and PR histories",
      "Flexible Subscription System — Free (5 reviews/month) and Pro (unlimited reviews) tiers with Razorpay billing",
      "Resilient Background Processing — Inngest handles long-running diff chunking, vector indexing, and LLM completions",
    ],
  },
  {
    slug: "r0",
    title: "r0",
    section: "Development Projects",
    tech: "Next.js, TypeScript, Prisma, PostgreSQL, Inngest AI Agents, E2B Sandbox, Gemini AI, Clerk",
    date: "August 2026",
    description:
      "AI-powered full-stack application that converts natural language prompts into fully functional, sandboxed web applications with live previews and code exploration. The coding agent runs inside an E2B sandbox with Gemini AI orchestrating the generation.",
    image: "/r0.svg",
    github: "https://github.com/Ravi0529/r0",
    live: "https://r0-xi.vercel.app",
    bullets: [
      "Built an AI-powered full-stack application that converts natural language prompts into fully functional, sandboxed web applications with live previews and code exploration.",
      "Implemented an event-driven async generation pipeline using Inngest — spins up isolated E2B sandboxes where AI agents write files, execute terminal commands, and render real-time application previews.",
      "Engineered a side-by-side workspace with file explorer, syntax-highlighted code viewer, project threads for iterative development, and Clerk authentication with persistent project history.",
    ],
    features: [
      "Prompt-first project creation — Start with a single description and create a new project thread automatically",
      "Sandboxed AI generation — Coding agent runs inside E2B sandbox for safe preview of generated apps",
      "Persistent project history — Each prompt and assistant response stored as a message inside a project",
      "Preview and code split view — Resizable two-pane layout for demo and source inspection",
      "File explorer with syntax highlighting — Generated files organized in a tree view with PrismJS rendering",
      "Clickable fragments — Assistant responses attach sandbox URL, generated title, and file map",
      "Auth and onboarding — Clerk handles sign-in with current user sync to PostgreSQL",
      "Background job orchestration — Inngest handles async generation flow keeping UI responsive",
    ],
  },
  {
    slug: "hire-iq",
    title: "Hire IQ",
    section: "Development Projects",
    tech: "Next.js, PostgreSQL, NextAuth, Recharts, Docker, Redis-Stack, LangChain, OpenAI",
    date: "December 2025",
    description:
      "A comprehensive AI-powered interview platform for recruiters and applicants, with intelligent question generation, real-time scoring, and structured feedback.",
    image: "/hire-iq.ico",
    github: "https://github.com/Ravi0529/HireIQ",
    live: "https://hire-iq-blond.vercel.app",
    bullets: [
      "Built an AI-powered interview platform where recruiters post jobs and applicants apply with resumes — questions are generated dynamically from both application and resume context.",
      "Developed real-time assessment dashboards with Recharts showing interview scoring, candidate strengths, and recruiter feedback.",
      "Implemented dual user roles, resume parsing, application workflows, and voice-enabled interview experience with TTS/STT support.",
      "Project details coming soon.",
    ],
    features: [
      "AI-powered interview question generation based on job requirements and applicant resumes",
      "Real-time scoring dashboards for candidate performance and recruiter insights",
      "Role-based workflows for recruiters and applicants",
      "Resume parsing and auto-filled candidate profiles",
      "Secure authentication with NextAuth.js and Google OAuth",
      "Dockerized architecture for local and production-ready deployments",
    ],
  },
  {
    slug: "pulse-board",
    title: "Pulse Board",
    section: "Development Projects",
    tech: "React, TypeScript, Express, Socket.IO, PostgreSQL, Redis, Tailwind CSS",
    date: "June 2026",
    description:
      "A real-time polling and feedback platform for creators, educators, and communities to launch polls, share links, and watch analytics update instantly.",
    image: "/pulse-board.ico",
    github: "https://github.com/Ravi0529/pulse-board",
    live: "https://pulse-board-3r5r.onrender.com",
    bullets: [
      "Built a real-time polling and feedback platform where creators launch polls, share links, and watch analytics evolve live through Socket.IO updates.",
      "Implemented authenticated and anonymous voting modes, auto-expiring polls, shareable links, and live analytics with bar charts and percentage breakdowns.",
      "Designed a Docker-ready stack with Redis caching, PostgreSQL persistence, and a WebSocket-driven analytics dashboard.",
      "Project details coming soon.",
    ],
    features: [
      "Real-time Socket.IO analytics with vote count updates and percentage breakdowns",
      "Authenticated and anonymous voting modes with duplicate protection",
      "Shareable poll links and live results pages",
      "Auto-expiring polls with deadline enforcement",
      "Redis caching for fast counter reads and event distribution",
      "Docker Compose setup with PostgreSQL and Redis for full-stack deployment",
    ],
  },
  {
    slug: "velo-maps",
    title: "Velo Maps",
    section: "Development Projects",
    tech: "React, TypeScript, Vite, Tailwind CSS, Leaflet, Socket.IO, Kafka, PostgreSQL, Drizzle ORM, Google Auth, JWT",
    date: "June 2026",
    description:
      "Velo Maps is a live location tracking web app where authenticated users join a shared map, stream location updates in real time, and view movement trails from other active users.",
    image: "/velo-maps.svg",
    github: "https://github.com/Ravi0529/velo-maps",
    bullets: [
      "Built a live location tracking web app where authenticated users join a shared map, stream updates in real time, and view movements from other active users.",
      "Implemented Google OAuth login and persisted users in PostgreSQL with JWT-protected HTTP and Socket.IO authentication.",
      "Published location events to Kafka and used separate consumers for broadcasting updates and storing location history.",
      "Added presence tracking, last seen handling, deduplication, rate limiting, and stale user cleanup to support sustained real-time usage.",
    ],
    features: [
      "Google OAuth login with persisted user profiles in PostgreSQL",
      "JWT authentication for both REST API and Socket.IO connections",
      "Live location streaming with real-time map updates",
      "Kafka producer for location events and two Kafka consumers for broadcast and persistence",
      "Presence tracking with active user handling and last-seen timestamps",
      "Noise reduction with update deduplication and rate limiting",
      "Stale user cleanup to keep active user state accurate",
      "Movement path drawing on the frontend map for real-time trails",
    ],
  },
  {
    slug: "one-million-checkboxes",
    title: "One Million Checkboxes",
    section: "Development Projects",
    tech: "React, TypeScript, Vite, Node.js, Express, Socket.IO, Redis, ioredis, @socket.io/redis-adapter, react-window, Docker, Python",
    date: "May 2026",
    description:
      "One Million Checkboxes is a real-time multiplayer checkbox wall designed to test scale, synchronization, and state consistency across distributed backend instances.",
    image: "/checkbox.svg",
    github: "https://github.com/Ravi0529/one-million-checkboxes",
    bullets: [
      "Built a real-time multiplayer checkbox wall that syncs state across backend instances and stores checkbox ownership state in Redis.",
      "Used virtualized rendering and chunk-based loading to support a universe of 1,000,000 possible checkboxes with smooth client performance.",
      "Implemented atomic toggle logic with Redis Lua scripts, Redis pub/sub synchronization, and rate limiting to protect the backend.",
      "Added a Python load-testing bot script to simulate hundreds or thousands of concurrent users and validate system behavior.",
    ],
    features: [
      "Support for 1,000,000 checkbox positions with chunk-based data fetching",
      "Virtualized rendering using react-window for efficient browser performance",
      "Redis bitmap storage for compact and fast checkbox state management",
      "Atomic ownership-aware toggle logic via Redis Lua script",
      "Socket.IO + Redis adapter for multi-backend real-time synchronization",
      "Rate limiting and chunk-room subscriptions to reduce spam and fan-out",
      "Active user and checked count stats streamed through Socket.IO",
      "Load-testing script for simulated user traffic and resilience analysis",
    ],
  },
  {
    slug: "stackit",
    title: "StackIt",
    section: "Development Projects",
    tech: "Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, NextAuth, Radix UI, Framer Motion, TipTap",
    date: "July 2025",
    description:
      "StackIt is a modern Q&A platform for collaborative learning, with rich text questions and answers, voting, threaded comments, and community moderation.",
    image: "/stackit.ico",
    github: "https://github.com/Ravi0529/StackIt",
    live: "https://stackit.ravimistry.me",
    bullets: [
      "Built a modern Q&A platform with question creation, rich text answers, voting, commenting, and role-based moderation.",
      "Implemented authentication, user profiles, search, tags, notifications, and an admin dashboard for content management.",
      "Designed a polished responsive UI with dark mode and Framer Motion interactions.",
      "Project details coming soon.",
    ],
    features: [
      "Multi-provider authentication with email/password and Google OAuth",
      "Rich text editor powered by TipTap with markdown-like formatting and code blocks",
      "Question and answer workflows with tags, voting, and threaded comments",
      "User profiles with activity tracking and contribution analytics",
      "Admin dashboard for moderation, content review, and user management",
      "Search and feed system for discovering questions and answers",
      "Responsive design built with Tailwind CSS and Radix UI components",
      "NextAuth.js and Prisma for secure session management and database access",
    ],
  },
  {
    slug: "chess-io",
    title: "chess.io",
    section: "Development Projects",
    tech: "React, TypeScript, Tailwind CSS, Node.js, Express, WebSockets, React Router",
    date: "August 2024",
    description:
      "An online multiplayer chess game built with React, Tailwind, TypeScript, Express, and WebSockets, offering real-time gameplay, private matches, and move history export.",
    image: "/chess.svg",
    github: "https://github.com/Ravi0529/chess.io",
    bullets: [
      "Built an online multiplayer chess game with real-time gameplay, private match invites, and profile management.",
      "Implemented check/checkmate detection, pawn promotion, downloadable move history, and responsive UI for mobile and desktop.",
      "Used WebSocket networking for seamless match connectivity and live state synchronization.",
      "Project details coming soon.",
    ],
    features: [
      "Online matches with private game invites",
      "WebSocket-backed real-time gameplay and move syncing",
      "Player profile management with avatars and account data",
      "Downloadable move history for game review",
      "Check, checkmate, and pawn promotion detection",
      "Responsive UI built with Tailwind CSS for desktop and mobile",
    ],
  },
  {
    slug: "isro-sagarmegh-ai",
    title: "ISRO SagarMegh AI",
    section: "Development Projects",
    tech: "Next.js, FastAPI, PostgreSQL, Qdrant, Google Gemini, JWT, Chrome Extension, SQLAlchemy, BeautifulSoup, PDFMiner",
    date: "November 2025",
    description:
      "A comprehensive AI-powered platform for accessing, analyzing, and downloading ISRO MOSDAC satellite data, with chatbot support and browser extension integration.",
    image: "/sagarmegh.svg",
    github: "https://github.com/Ravi0529/isro-sagarmegh-ai",
    bullets: [
      "Built an AI platform for MOSDAC satellite data access, analysis, downloads, and chatbot interaction with browser extension support.",
      "Implemented RAG with HyDE, semantic search over scraped MOSDAC docs, dataset download management, and JSON-based API workflows.",
      "Used Google Gemini for contextual chat responses and Qdrant for vector retrieval; backend served authenticated downloads and metadata.",
      "Project details coming soon.",
    ],
    features: [
      "Advanced RAG chatbot with HyDE embeddings and MOSDAC domain context",
      "Automated dataset downloads and managed download queue with status tracking",
      "Chrome extension for on-page assistant interaction and MOSDAC integration",
      "Semantic search over scraped documentation using Qdrant vectors",
      "FastAPI backend with JWT authentication and PostgreSQL storage",
      "Multi-format scraping support for HTML, PDF, and XML MOSDAC content",
      "Google Gemini integration for contextual response generation",
    ],
  },
  {
    slug: "isea-rag-attack-classification",
    title: "ISEA RAG Attack Classification",
    section: "ML Projects",
    tech: "Python, Qdrant, Hugging Face Embeddings, Isolation Forest, LOF, MITRE ATT&CK, Docker, Pandas, Snowflake, FastAPI",
    date: "February 2026",
    description:
      "End-to-end cybersecurity pipeline converting raw logs into session intelligence, hybrid detection scores, and MITRE ATT&CK mapping using retrieval-augmented generation.",
    image: "/isea.png",
    github: "https://github.com/Ravi0529/isea-rag-attack-classification",
    bullets: [
      "Built a cybersecurity analytics pipeline with hybrid anomaly detection and sessionization for raw security logs.",
      "Implemented RAG-based ATT&CK mapping using Hugging Face embeddings and Qdrant to connect suspicious sessions to MITRE techniques.",
      "Delivered explainable analyst reports with IP-to-technique mappings, confidence scoring, and visualizations of detection results.",
      "Project details coming soon.",
    ],
    features: [
      "Raw log ingestion and sessionization into structured event timelines",
      "Hybrid anomaly detection using rules plus Isolation Forest or LOF",
      "MITRE ATT&CK knowledge base download, cache build, and vector indexing",
      "Qdrant-powered retrieval to map suspicious sessions to techniques",
      "End-to-end reporting with source IP to tactic-technique summaries",
      "Evaluation pipelines for proxy and labeled modes",
      "CLI-driven phase-based workflow for reproducible analytics",
    ],
  },
  {
    slug: "purchase-prediction-from-ads",
    title: "Purchase Prediction from Ads — Logistic Regression",
    section: "ML Projects",
    tech: "Python, scikit-learn, pandas, matplotlib, seaborn, Logistic Regression, Jupyter",
    date: "October 2025",
    description:
      "Binary classification project using logistic regression to predict purchase behavior from social network ad exposure with detailed EDA and salary-based feature engineering.",
    image: "/ml.svg",
    github: "https://github.com/Ravi0529/purchase-prediction-model",
    bullets: [
      "Built a binary classifier to predict purchase behavior after social network ads using logistic regression and feature engineering.",
      "Performed EDA with distribution checks, correlation analysis, scatter plots, and purchase rate visualizations.",
      "Scaled numeric features, binned EstimatedSalary into quantiles, and applied one-hot encoding to capture non-linear income effects.",
      "Achieved strong generalization with test accuracy improvements from ~0.863 to ~0.950 after salary binning and one-hot encoding.",
    ],
    features: [
      "Exploratory Data Analysis with descriptive statistics and visualization",
      "StandardScaler feature scaling on Age and EstimatedSalary",
      "Logistic Regression baseline modeling with reproducible train/test split",
      "Quantile-based salary binning to capture non-linear purchase behavior",
      "Ordinal and one-hot encoding for engineered salary features",
      "Evaluation using accuracy, confusion matrix, and classification report",
      "Reproducible Jupyter notebook workflow with fixed random seed",
    ],
  },
  {
    slug: "e-commerce-annual-spend-model",
    title: "E-Commerce Customer Spending Prediction Model",
    section: "ML Projects",
    tech: "Python, scikit-learn, pandas, Linear Regression, Excel, Jupyter",
    date: "September 2025",
    description:
      "Linear regression analysis predicting annual ecommerce customer spending from session behavior, app and website usage, and membership duration.",
    image: "/ml.svg",
    github: "https://github.com/Ravi0529/e-commerce-annual-spend-model",
    bullets: [
      "Built a linear regression model to predict annual customer spending from membership, session, and website usage features.",
      "Explored an ecommerce dataset with 500 customers and key features such as Avg. Session Length, Time on App, Time on Website, and Length of Membership.",
      "Analyzed model coefficients to identify feature importance and customer value drivers.",
      "Evaluated performance with MAE, MSE, and RMSE metrics, achieving an RMSE around $10.",
    ],
    features: [
      "Dataset exploration with pandas and summary statistics",
      "Visual analysis of feature relationships and correlations",
      "Linear Regression modeling with train/test split for generalization",
      "Feature importance analysis from model coefficients",
      "Prediction validation using MAE, MSE, and RMSE",
      "Residual analysis with scatter and normality checks",
      "Jupyter notebook walkthrough for reproducible modeling",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSections() {
  const sections = new Map<string, Project[]>();

  for (const project of projects) {
    const list = sections.get(project.section) ?? [];
    list.push(project);
    sections.set(project.section, list);
  }

  return sections;
}
