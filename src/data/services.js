export const servicesDetails = {
  "web-development": {
    slug: "web-development",
    icon: "💻",
    eyebrow: "Future-ready Web Platforms",
    headline: "Web experiences engineered for speed and storytelling.",
    description:
      "We plan, prototype, and ship modular sites that balance expressive visuals with reliable performance budgets. Design systems, component libraries, and robust dev tooling keep marketing teams shipping without waiting on engineering sprints.",
    overview:
      "From marketing launches to enterprise dashboards, our web work is guided by accessibility, maintainability, and measurable outcomes. We work in tight loops with design to translate motion studies into production-ready React experiences.",
    metrics: [
      { label: "Core Web Vitals", value: "90+ Lighthouse" },
      { label: "Release cadence", value: "Weekly increments" },
      { label: "Accessibility", value: "WCAG 2.1 AA" },
    ],
    tools: [
      {
        title: "Frontend Stack",
        items: ["React 19", "Next.js", "TypeScript", "Vite", "Tailwind CSS"],
      },
      {
        title: "Quality Tooling",
        items: ["Playwright", "Storybook", "Vitest", "ESLint", "Bundle Analyzer"],
      },
      {
        title: "Deployment",
        items: ["Vercel", "Netlify", "Cloudflare Pages", "CI/CD pipelines"],
      },
    ],
    workflow: [
      {
        title: "Discovery & Architecture",
        description:
          "Align on goals, define KPIs, model content, and establish performance budgets with shared diagrams and lightweight proofs of concept.",
      },
      {
        title: "Design System Implementation",
        description:
          "Translate tokens, grids, and motion language into reusable components with Storybook documentation and accessibility baked in.",
      },
      {
        title: "Launch & Optimization",
        description:
          "Instrument analytics, automate QA, and iterate on A/B experiments so the site stays fast and relevant after the first release.",
      },
    ],
    highlights: [
      "Full SSR/SSG strategies tailored to SEO and localization needs.",
      "Edge-rendered experiences with streaming data and optimistic UI patterns.",
      "Content workflows that empower marketing teams with minimal developer lift.",
    ],
    deliverables: [
      "Component library with usage documentation",
      "CI pipeline with automated accessibility checks",
      "Performance audit with actionable backlog",
    ],
    theme: {
      gradient: "from-indigo-600 via-blue-600/90 to-slate-950",
      accent: "text-indigo-200",
      glow: "bg-indigo-500/20",
    },
  },
  "mobile-apps": {
    slug: "mobile-apps",
    icon: "📱",
    eyebrow: "Cross-platform Craft",
    headline: "Mobile apps that feel native on every device.",
    description:
      "We design unified codebases that respect platform expectations. Gesture-rich flows, offline resilience, and accessible interactions are planned alongside build pipelines and store deployment routines.",
    overview:
      "Our mobile teams pair designers and engineers from day one, prototyping motion and navigation in tandem. From MVPs to growth-stage products, we translate product vision into maintainable, testable app ecosystems.",
    metrics: [
      { label: "Target FPS", value: "60fps UI" },
      { label: "Offline coverage", value: "Core journeys cached" },
      { label: "Crash-free", value: "> 99.5%" },
    ],
    tools: [
      {
        title: "Frameworks",
        items: ["React Native", "Expo", "Flutter", "Kotlin", "Swift"],
      },
      {
        title: "Device Testing",
        items: ["BrowserStack", "Firebase Test Lab", "Detox", "Fastlane"],
      },
      {
        title: "Product Analytics",
        items: ["Segment", "Amplitude", "Firebase Analytics", "Sentry"],
      },
    ],
    workflow: [
      {
        title: "Experience Mapping",
        description:
          "Define critical user journeys, device coverage, and motion principles before code is written to avoid rework down the line.",
      },
      {
        title: "Iterative Development",
        description:
          "Ship vertical slices every sprint with automated snapshots, unit tests, and QA scripts to keep feature velocity high.",
      },
      {
        title: "Launch & Growth",
        description:
          "Handle build signing, store submissions, release rollouts, and experimentation frameworks for confident scaling.",
      },
    ],
    highlights: [
      "Shared design language with platform-specific gesture variations.",
      "Modular state architecture with analytics-ready events.",
      "Feature flags and remote config for safer rollouts.",
    ],
    deliverables: [
      "Prototype builds for iOS and Android",
      "Automated build and release pipelines",
      "Instrumentation plan with measurable KPIs",
    ],
    theme: {
      gradient: "from-purple-600 via-pink-600/90 to-slate-950",
      accent: "text-purple-200",
      glow: "bg-purple-500/20",
    },
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    icon: "🎨",
    eyebrow: "Motion-first Product Design",
    headline: "Interfaces that guide, delight, and convert.",
    description:
      "We combine research, prototyping, and motion choreography to design experiences that feel alive while remaining inclusive. Design assets hand off cleanly to engineering with component specs and animation blueprints.",
    overview:
      "Workshops uncover user needs, while collaborative prototyping aligns on interaction vocabulary early. Every deliverable arrives with rationale, ready for co-creation with engineering.",
    metrics: [
      { label: "Research cadence", value: "Bi-weekly" },
      { label: "Prototype fidelity", value: "High-motion" },
      { label: "Design tokens", value: "Figma + code" },
    ],
    tools: [
      {
        title: "Design & Prototyping",
        items: ["Figma", "ProtoPie", "After Effects", "Spline"],
      },
      {
        title: "Collaboration",
        items: ["FigJam", "Notion", "Maze", "Lookback"],
      },
      {
        title: "Hand-off",
        items: ["Design tokens", "Motion specs", "Component docs"],
      },
    ],
    workflow: [
      {
        title: "Insight & Alignment",
        description:
          "Run discovery interviews, map journeys, and define success metrics. Establish guiding principles for narrative, motion, and accessibility.",
      },
      {
        title: "Exploration & Prototyping",
        description:
          "Translate insights into moodboards and motion prototypes. Validate flows with stakeholders and users before polishing.",
      },
      {
        title: "Systems & Delivery",
        description:
          "Create component libraries, motion specs, and developer-ready guidelines that scale with the product roadmap.",
      },
    ],
    highlights: [
      "Accessible patterns with focus, reduced motion, and localization accounted for.",
      "Story-driven art direction that adapts to campaign and product states.",
      "Design ops rituals that keep feedback loops short and collaborative.",
    ],
    deliverables: [
      "Interactive prototypes with motion cues",
      "Experience maps and storyboards",
      "Design system starter kit",
    ],
    theme: {
      gradient: "from-amber-500 via-rose-500/90 to-slate-950",
      accent: "text-amber-100",
      glow: "bg-amber-400/25",
    },
  },
  "backend-apis": {
    slug: "backend-apis",
    icon: "🛠️",
    eyebrow: "Reliable Platform Foundations",
    headline: "Backend systems designed to scale quietly.",
    description:
      "We architect APIs, services, and data pipelines that keep products resilient. Observability, security, and developer ergonomics guide every decision, so the platform keeps pace with product ambition.",
    overview:
      "From greenfield builds to refactors, we modernize backend stacks with a focus on clean contracts and measurable uptime. Collaboration with frontend teams ensures payloads are purposeful and predictable.",
    metrics: [
      { label: "Uptime targets", value: "> 99.9%" },
      { label: "Latency budget", value: "< 200ms p95" },
      { label: "Security", value: "OWASP aligned" },
    ],
    tools: [
      {
        title: "Languages & Frameworks",
        items: ["Node.js", "Express", "NestJS", "Django", "Go"],
      },
      {
        title: "Infrastructure",
        items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      },
      {
        title: "Observability",
        items: ["OpenTelemetry", "Grafana", "Datadog", "Sentry", "PagerDuty"],
      },
    ],
    workflow: [
      {
        title: "Platform Blueprint",
        description:
          "Audit current systems, chart integration points, and define SLAs with diagrams, sequence charts, and backlog priorities.",
      },
      {
        title: "Service Delivery",
        description:
          "Ship secure endpoints with contract tests, automated deployments, and documentation that keeps downstream teams confident.",
      },
      {
        title: "Operate & Improve",
        description:
          "Implement observability, on-call playbooks, and cost reviews so the platform improves alongside product goals.",
      },
    ],
    highlights: [
      "Event-driven architectures that minimize coupling and improve resilience.",
      "API-first approach with schema governance and documentation automation.",
      "Security reviews covering threat modeling, secrets management, and compliance needs.",
    ],
    deliverables: [
      "API contracts and documentation portal",
      "Infrastructure as code templates",
      "Runbooks with observability dashboards",
    ],
    theme: {
      gradient: "from-cyan-500 via-emerald-500/80 to-slate-950",
      accent: "text-emerald-100",
      glow: "bg-emerald-400/25",
    },
  },
};
