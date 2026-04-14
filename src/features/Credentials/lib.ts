export type CredentialTag =
  | "GitHub"
  | "Anthropic"
  | "TotalTypescript"
  | "AI Hero"
  | "Google Cloud";

export interface Credential {
  name: string;
  description: string;
  image: string;
  verify: string;
  tags: CredentialTag[];
}

export const myCredentials: Credential[] = [
  // GITHUB
  {
    name: "GitHub Foundations",
    description:
      "Understanding of the foundational topics, products, and concepts of collaborating, contributing, and working on GitHub",
    image: "/static/images/credentials/github/github-foundations.png",
    verify:
      "https://www.credly.com/badges/6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc",
    tags: ["GitHub"],
  },
  // ANTHROPIC
  {
    name: "Claude 101",
    description:
      "Use Claude for everyday tasks, learn core features, and find resources for advanced topics.",
    image: "/static/images/credentials/anthropic/claude-101.png",
    verify: "https://verify.skilljar.com/c/xjfd44kpivr4",
    tags: ["Anthropic"],
  },
  {
    name: "Claude Code 101",
    description:
      "Use Claude Code effectively in your daily development workflow and core coding tasks.",
    image: "/static/images/credentials/anthropic/claude-code-101.png",
    verify: "https://verify.skilljar.com/c/j5d7y276kvjk",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to Claude Cowork",
    description:
      "Work with Claude on real files, learn the Cowork loop, and steer multi-step work responsibly.",
    image:
      "/static/images/credentials/anthropic/introduction-to-claude-cowork.png",
    verify: "https://verify.skilljar.com/c/yi9qnjmjpd6n",
    tags: ["Anthropic"],
  },
  {
    name: "Claude Code in Action",
    description:
      "Integrate Claude Code into your development workflow through practical, real coding tasks.",
    image: "/static/images/credentials/anthropic/claude-code-in-action.png",
    verify: "https://verify.skilljar.com/c/d8dr8asiyoi7",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency: Framework & Foundations",
    description:
      "Collaborate with AI effectively, efficiently, ethically, and safely across real work contexts.",
    image:
      "/static/images/credentials/anthropic/ai-fluency-framework-and-foundations.png",
    verify: "https://verify.skilljar.com/c/9ydycggexgs4",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to Model Context Protocol",
    description:
      "Build MCP servers and clients in Python, using core primitives to connect Claude to services.",
    image:
      "/static/images/credentials/anthropic/introduction-to-model-context-protocol.png",
    verify: "https://verify.skilljar.com/c/8ce3xgsqzw9t",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for educators",
    description:
      "Apply AI Fluency to teaching practice and institutional strategy as faculty and leaders.",
    image: "/static/images/credentials/anthropic/ai-fluency-for-educators.png",
    verify: "https://verify.skilljar.com/c/akngyteyhdaz",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for students",
    description:
      "Develop AI Fluency for learning, career planning, and academic success through responsible AI use.",
    image: "/static/images/credentials/anthropic/ai-fluency-for-students.png",
    verify: "https://verify.skilljar.com/c/e7gueh3kxcqf",
    tags: ["Anthropic"],
  },
  {
    name: "Model Context Protocol: Advanced Topics",
    description:
      "Explore advanced MCP production patterns, including sampling, notifications, file access, and transport.",
    image:
      "/static/images/credentials/anthropic/model-context-protocol-advanced-topics.png",
    verify: "https://verify.skilljar.com/c/p2q8sgfvk9gs",
    tags: ["Anthropic"],
  },
  {
    name: "Teaching AI Fluency",
    description:
      "Teach and assess AI Fluency in instructor-led settings for faculty and instructional designers.",
    image: "/static/images/credentials/anthropic/teaching-ai-fluency.png",
    verify: "https://verify.skilljar.com/c/sbk47p5oahb7",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for nonprofits",
    description:
      "Build AI fluency to increase nonprofit impact and efficiency while staying true to mission values.",
    image: "/static/images/credentials/anthropic/ai-fluency-for-nonprofits.png",
    verify: "https://verify.skilljar.com/c/mf259x5krkj8",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to agent skills",
    description:
      "Build, configure, and share Claude Code Skills, then scale them across teams and workflows.",
    image:
      "/static/images/credentials/anthropic/introduction-to-agent-skills.png",
    verify: "https://verify.skilljar.com/c/y5wcgv42x472",
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to subagents",
    description:
      "Use and create Claude Code subagents to delegate tasks, manage context, and keep chats focused.",
    image: "/static/images/credentials/anthropic/introduction-to-subagents.png",
    verify: "https://verify.skilljar.com/c/ma82hiuzmwjv",
    tags: ["Anthropic"],
  },
  {
    name: "AI Capabilities and Limitations",
    description:
      "Learn how AI works, including where its core capabilities are strong and where limits appear.",
    image:
      "/static/images/credentials/anthropic/ai-capabilities-and-limitations.png",
    verify: "https://verify.skilljar.com/c/hbfffkhj7qof",
    tags: ["Anthropic"],
  },
  // AI HERO
  {
    name: "LLM Fundamentals",
    description:
      "Matt Pocock video tutorial teaching the fundamentals of LLM's so one can use them better",
    image: "/static/images/credentials/aihero/llm-fundamentals.png",
    verify: "https://www.aihero.dev/llm-fundamentals",
    tags: ["AI Hero"],
  },
  {
    name: "The AI Engineer Roadmap",
    description:
      "Want to build AI-powered apps, but don't know where to start? You need a roadmap",
    image: "/static/images/credentials/aihero/ai-engineer-roadmap.png",
    verify: "https://www.aihero.dev/ai-engineer-roadmap",
    tags: ["AI Hero"],
  },
  {
    name: "Model Context Protocol Tutorial",
    description:
      "The Model Context Protocol is driving a new wave of innovation in the world of AI. In this tutorial, I'll break down everything you need to know to get started",
    image: "/static/images/credentials/aihero/mcp-tutorial.png",
    verify: "https://www.aihero.dev/model-context-protocol-tutorial",
    tags: ["AI Hero"],
  },
  {
    name: "Vercel AI SDK Tutorial",
    description:
      "Build any LLM app in TypeScript with Vercel's AI SDK. Learn streaming, structured outputs, tool calls and agents",
    image: "/static/images/credentials/aihero/vercel-ai-sdk-tutorial.png",
    verify: "https://www.aihero.dev/vercel-ai-sdk-tutorial",
    tags: ["AI Hero"],
  },
  // TOTAL TYPESCRIPT
  {
    name: "Solving TypeScript Errors",
    description:
      "Type checking is awesome, but sometimes it gives you error messages that can be challenging to interpret and resolve",
    image: "/static/images/credentials/totaltypescript/solving-ts-errors.webp",
    verify:
      "https://www.totaltypescript.com/tutorials/solving-typescript-errors",
    tags: ["TotalTypescript"],
  },
  {
    name: "React with TypeScript",
    description:
      "TypeScript's features and developer experience make a great combination with React, but it can be confusing to get started",
    image: "/static/images/credentials/totaltypescript/react-with-ts.webp",
    verify: "https://www.totaltypescript.com/tutorials/react-with-typescript",
    tags: ["TotalTypescript"],
  },
  {
    name: "Beginner's TypeScript",
    description:
      "Get hands-on interactive practice with this free TypeScript tutorial and learn the foundational knowledge and skills you need to become a TypeScript Wizard",
    image: "/static/images/credentials/totaltypescript/beginner-s-ts.png",
    verify: "https://www.totaltypescript.com/tutorials/beginners-typescript",
    tags: ["TotalTypescript"],
  },
  {
    name: "Zod",
    description: "TypeScript is great for checking variables at the type level",
    image: "/static/images/credentials/totaltypescript/zod.png",
    verify: "https://www.totaltypescript.com/tutorials/zod",
    tags: ["TotalTypescript"],
  },
  // GOOGLE CLOUD
  {
    name: "Introduction to Large Language Models",
    description:
      "Explores what large language models (LLM) are, the use cases where they can be utilized, and how prompt tuning can enhance LLM performance",
    image: "/static/images/credentials/google/llm-intro.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/18421606",
    tags: ["Google Cloud"],
  },
  {
    name: "Introduction to Responsible AI",
    description:
      "Explains what Responsible AI is, why it's important, and how Google implements Responsible AI in its products, including Google's 7 AI principles",
    image: "/static/images/credentials/google/intro-responsible-ai.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/18421065",
    tags: ["Google Cloud"],
  },
  {
    name: "Introduction to Generative AI",
    description:
      "Explains what Generative AI is, how it is used, and how it differs from traditional machine learning methods",
    image: "/static/images/credentials/google/intro-gen-ai.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/17719291",
    tags: ["Google Cloud"],
  },
];
