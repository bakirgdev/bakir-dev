export type CredentialTag =
  | "GitHub"
  | "HubSpot"
  | "Anthropic"
  | "Anthropic (Partners)"
  | "TotalTypescript"
  | "AI Hero"
  | "Google Cloud";

export interface Credential {
  name: string;
  description: string;
  image: string;
  verify: string;
  tags: CredentialTag[];
  // Free courses without a verifiable completion record: `verify` links to the course page.
  course?: boolean;
}

export const myCredentials: Credential[] = [
  // ANTHROPIC PARTNERS
  {
    name: "Claude Partner Badge (Claude Code)",
    description:
      "Partner-exclusive badge for end-to-end governance of Claude Code in teams and enterprises.",
    image:
      "/static/images/credentials/anthropic_partners/claude-partner-badge-claude-code.png",
    verify:
      "https://www.credly.com/badges/6cec1cf5-f8be-4bb0-999a-e1295e8fd5bc/public_url",
    tags: ["Anthropic (Partners)"],
  },
  // ANTHROPIC
  {
    name: "Claude 101",
    description:
      "Using Claude for everyday tasks, its core features and resources for advanced topics.",
    image: "/static/images/credentials/anthropic/claude-101.png",
    verify: "https://verify.skilljar.com/c/xjfd44kpivr4",
    tags: ["Anthropic"],
  },
  {
    name: "Claude Code 101",
    description:
      "Using Claude Code effectively in a daily development workflow and core coding tasks.",
    image: "/static/images/credentials/anthropic/claude-code-101.png",
    verify: "https://verify.skilljar.com/c/j5d7y276kvjk",
    tags: ["Anthropic"],
  },
  {
    name: "Claude Platform 101",
    description:
      "Building on the Claude Developer Platform from the ground up.",
    image: "/static/images/credentials/anthropic/claude-platform-101.png",
    verify: "https://verify.skilljar.com/c/v9xkz7z35kzp",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to Claude Cowork",
    description:
      "Working with Claude on real files, the Cowork loop and steering multi-step work responsibly.",
    image:
      "/static/images/credentials/anthropic/introduction-to-claude-cowork.png",
    verify: "https://verify.skilljar.com/c/yi9qnjmjpd6n",
    tags: ["Anthropic"],
  },
  {
    name: "Claude Code in Action",
    description:
      "Integrating Claude Code into a development workflow through practical coding tasks.",
    image: "/static/images/credentials/anthropic/claude-code-in-action.png",
    verify: "https://verify.skilljar.com/c/d8dr8asiyoi7",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency: Framework & Foundations",
    description:
      "Collaborating with AI effectively, efficiently, ethically and safely in real work.",
    image:
      "/static/images/credentials/anthropic/ai-fluency-framework-and-foundations.png",
    verify: "https://verify.skilljar.com/c/9ydycggexgs4",
    tags: ["Anthropic"],
  },
  {
    name: "Building with the Anthropic API",
    description: "Integrating Claude into applications with the Anthropic API.",
    image:
      "/static/images/credentials/anthropic/building-with-the-anthropic-api.png",
    verify: "https://verify.skilljar.com/c/z8bmfny2qvov",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to Model Context Protocol",
    description:
      "Building MCP servers and clients in Python with the core primitives that connect Claude to services.",
    image:
      "/static/images/credentials/anthropic/introduction-to-model-context-protocol.png",
    verify: "https://verify.skilljar.com/c/8ce3xgsqzw9t",
    tags: ["Anthropic"],
  },
  {
    name: "Model Context Protocol: Advanced Topics",
    description:
      "Production MCP patterns: sampling, notifications, file access and transports.",
    image:
      "/static/images/credentials/anthropic/model-context-protocol-advanced-topics.png",
    verify: "https://verify.skilljar.com/c/p2q8sgfvk9gs",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to Agent Skills",
    description:
      "Building, configuring and sharing Claude Code skills across teams and workflows.",
    image:
      "/static/images/credentials/anthropic/introduction-to-agent-skills.png",
    verify: "https://verify.skilljar.com/c/y5wcgv42x472",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to Subagents",
    description:
      "Using and creating Claude Code subagents to delegate tasks and manage context.",
    image: "/static/images/credentials/anthropic/introduction-to-subagents.png",
    verify: "https://verify.skilljar.com/c/ma82hiuzmwjv",
    tags: ["Anthropic"],
  },
  {
    name: "AI Capabilities and Limitations",
    description:
      "How AI works, where its core capabilities are strong and where its limits appear.",
    image:
      "/static/images/credentials/anthropic/ai-capabilities-and-limitations.png",
    verify: "https://verify.skilljar.com/c/hbfffkhj7qof",
    tags: ["Anthropic"],
  },
  {
    name: "Teaching AI Fluency",
    description:
      "Teaching and assessing AI fluency in instructor-led settings.",
    image: "/static/images/credentials/anthropic/teaching-ai-fluency.png",
    verify: "https://verify.skilljar.com/c/sbk47p5oahb7",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for Educators",
    description:
      "Applying AI fluency to teaching practice and institutional strategy.",
    image: "/static/images/credentials/anthropic/ai-fluency-for-educators.png",
    verify: "https://verify.skilljar.com/c/akngyteyhdaz",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for Students",
    description:
      "Responsible AI use for learning, career planning and academic work.",
    image: "/static/images/credentials/anthropic/ai-fluency-for-students.png",
    verify: "https://verify.skilljar.com/c/e7gueh3kxcqf",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for Nonprofits",
    description:
      "Using AI to increase nonprofit impact and efficiency while staying true to the mission.",
    image: "/static/images/credentials/anthropic/ai-fluency-for-nonprofits.png",
    verify: "https://verify.skilljar.com/c/mf259x5krkj8",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for Small Businesses",
    description:
      "Practical AI collaboration skills for small business teams through the 4D Framework.",
    image:
      "/static/images/credentials/anthropic/ai-fluency-for-small-businesses.png",
    verify: "https://verify.skilljar.com/c/5zgm42m3o54q",
    tags: ["Anthropic"],
  },
  // GOOGLE CLOUD
  {
    name: "Introduction to Large Language Models",
    description:
      "What large language models are, where they are useful and how prompt tuning improves them.",
    image: "/static/images/credentials/google/llm-intro.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/18421606",
    tags: ["Google Cloud"],
  },
  {
    name: "Introduction to Responsible AI",
    description:
      "What responsible AI is, why it matters and how Google applies its 7 AI principles.",
    image: "/static/images/credentials/google/intro-responsible-ai.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/18421065",
    tags: ["Google Cloud"],
  },
  {
    name: "Introduction to Generative AI",
    description:
      "What generative AI is, how it is used and how it differs from traditional machine learning.",
    image: "/static/images/credentials/google/intro-gen-ai.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/17719291",
    tags: ["Google Cloud"],
  },
  // GITHUB
  {
    name: "GitHub Foundations",
    description:
      "Foundational GitHub products and concepts for collaborating and contributing on GitHub.",
    image: "/static/images/credentials/github/github-foundations.png",
    verify:
      "https://www.credly.com/badges/6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc",
    tags: ["GitHub"],
  },
  // HUBSPOT
  {
    name: "Digital Marketing",
    description:
      "Applying digital marketing practices with an inbound mindset.",
    image: "/static/images/credentials/hubspot/digital-marketing.png",
    verify:
      "https://app-eu1.hubspot.com/academy/achievements/h7mvzl5k/en/1/bakir-gracic/digital-marketing",
    tags: ["HubSpot"],
  },
  // AI HERO
  {
    name: "LLM Fundamentals",
    description:
      "How large language models work, to use them more effectively.",
    image: "/static/images/credentials/aihero/llm-fundamentals.png",
    verify: "https://www.aihero.dev/llm-fundamentals",
    tags: ["AI Hero"],
    course: true,
  },
  {
    name: "The AI Engineer Roadmap",
    description: "A roadmap for building AI-powered applications.",
    image: "/static/images/credentials/aihero/ai-engineer-roadmap.png",
    verify: "https://www.aihero.dev/ai-engineer-roadmap",
    tags: ["AI Hero"],
    course: true,
  },
  {
    name: "Model Context Protocol Tutorial",
    description:
      "The fundamentals of building with the Model Context Protocol.",
    image: "/static/images/credentials/aihero/mcp-tutorial.png",
    verify: "https://www.aihero.dev/model-context-protocol-tutorial",
    tags: ["AI Hero"],
    course: true,
  },
  {
    name: "Vercel AI SDK Tutorial",
    description:
      "Building LLM apps in TypeScript with the AI SDK: streaming, structured outputs, tool calls and agents.",
    image: "/static/images/credentials/aihero/vercel-ai-sdk-tutorial.png",
    verify: "https://www.aihero.dev/vercel-ai-sdk-tutorial",
    tags: ["AI Hero"],
    course: true,
  },
  // TOTAL TYPESCRIPT
  {
    name: "Beginner's TypeScript",
    description: "Hands-on practice with the foundations of TypeScript.",
    image: "/static/images/credentials/totaltypescript/beginner-s-ts.png",
    verify: "https://www.totaltypescript.com/tutorials/beginners-typescript",
    tags: ["TotalTypescript"],
    course: true,
  },
  {
    name: "Solving TypeScript Errors",
    description:
      "Reading, interpreting and resolving TypeScript error messages.",
    image: "/static/images/credentials/totaltypescript/solving-ts-errors.webp",
    verify:
      "https://www.totaltypescript.com/tutorials/solving-typescript-errors",
    tags: ["TotalTypescript"],
    course: true,
  },
  {
    name: "React with TypeScript",
    description: "Typing React components, hooks and props with TypeScript.",
    image: "/static/images/credentials/totaltypescript/react-with-ts.webp",
    verify: "https://www.totaltypescript.com/tutorials/react-with-typescript",
    tags: ["TotalTypescript"],
    course: true,
  },
  {
    name: "Zod",
    description:
      "Validating data at runtime with Zod and inferring types from schemas.",
    image: "/static/images/credentials/totaltypescript/zod.png",
    verify: "https://www.totaltypescript.com/tutorials/zod",
    tags: ["TotalTypescript"],
    course: true,
  },
];
