export const EXPERIENCES = [
  {
    period: "2023 — PRESENT",
    title: "Software Engineer",
    company: "Allstate Sales Group",
    companyUrl: "#",
    description:
      "Built and maintained enterprise HR systems for 500+ employees. Designed 30+ custom validation rules to cut data entry errors by 78% and improve form efficiency by 40%. Integrated 12+ third-party APIs to automate workflows and eliminate manual handling. Increased system uptime from 97.3% → 99.8% with a replica database and staging pipeline. Delivered a KPI dashboard that improved productivity tracking across 8+ departments.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      ".NET",
      "Azure",
    ],
  },
  {
    period: "2022 — 2022",
    title: "Frontend Developer",
    company: "Frontend Simplified",
    companyUrl: "#",
    description:
      "Taught 1,000+ students frontend development best practices including responsive design, API requests, debugging, and version control. Enhanced comprehension of advanced JavaScript concepts through live coding and examples. Improved student project quality by building interactive React interfaces with animations and transitions.",
    technologies: ["JavaScript", "React", "Git", "GitHub", "HTML", "CSS"],
  },
] as const;

export const PROJECTS = [
  {
    title: "Signalist - Stock Tracker App",
    description:
      "A full-stack stock tracking and market analysis web application with user authentication, real-time stock quotes, personalized watchlists, and price alerts. Features include stock search with Finnhub API integration, interactive TradingView charts, customizable price notifications with daily/weekly cadences, market news aggregation, and investor onboarding with risk tolerance and industry preference profiling.",
    technologies: [
      "React",
      "Node.js",
      "Inngest",
      "MongoDB",
      "Finnhub API",
      "TradingView",
    ],
    image: "/signalist-stock-tracker-app.png",
    links: {
      external: "https://signalist-stock-tracker-app-pink-five.vercel.app/",
      github: "https://github.com/chowdhuryrz/signalist-stock-tracker-app",
    },
  },
  {
    title: "Ephemeral - Self-Destructing Messaging Platform",
    description:
      "A private, self-destructing chat room application built with Next.js and Upstash. Create secure chat rooms with unique identities, send real-time messages, and destroy all conversation history with a single action.",
    technologies: [
      "NextJS",
      "Upstash",
      "Redis",
      "Elysia",
      "Tanstack",
      "WebSockets",
    ],
    image: "/ephemeral.png",
    links: {
      external: "https://ephemeral-murex.vercel.app/",
      github: "https://github.com/chowdhuryrz/ephemeral",
    },
  },
] as const;

export const ABOUT_SECTIONS = [
  "I'm a software engineer who loves building digital systems that actually work well and look good doing it. I've worked on everything from enterprise HR portals to automation platforms, always focusing on making things more efficient and reliable for the people using them.",
  "I've gotten to work in different environments - big enterprise teams, scrappy start-ups, and my own side projects. Each one taught me something new about building software that can grow and adapt. I've also spent time teaching frontend development, which honestly made me a better developer since explaining concepts forces you to really understand them.",
  "My go-to tools are React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS. I really enjoy the puzzle of connecting different systems through APIs to automate workflows that used to be manual headaches. What gets me most excited are projects where good design meets solid engineering.",
  "When I'm not coding, you'll probably find me at the gym or under the hood of a car. Both keep me grounded and remind me that the best solutions usually come from understanding how things actually work, not just how they're supposed to work.",
] as const;

export type Experience = (typeof EXPERIENCES)[number];
export type Project = (typeof PROJECTS)[number];
