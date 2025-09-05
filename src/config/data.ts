export const EXPERIENCES = [
  {
    period: '2023 — PRESENT',
    title: 'Software Engineer',
    company: 'Allstate Sales Group',
    companyUrl: '#',
    description: 'Built and maintained enterprise HR systems for 500+ employees. Designed 30+ custom validation rules to cut data entry errors by 78% and improve form efficiency by 40%. Integrated 12+ third-party APIs to automate workflows and eliminate manual handling. Increased system uptime from 97.3% → 99.8% with a replica database and staging pipeline. Delivered a KPI dashboard that improved productivity tracking across 8+ departments.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'PowerBI'],
  },
  {
    period: '2022 — 2022',
    title: 'Frontend Developer',
    company: 'Frontend Simplified',
    companyUrl: '#',
    description: 'Taught 1,000+ students frontend development best practices including responsive design, API requests, debugging, and version control. Enhanced comprehension of advanced JavaScript concepts through live coding and examples. Improved student project quality by building interactive React interfaces with animations and transitions.',
    technologies: ['JavaScript', 'React', 'Git', 'GitHub', 'HTML', 'CSS'],
  },
  {
    period: '2021 — 2022',
    title: 'Project Lead',
    company: 'Empor',
    companyUrl: 'https://empor.ca',
    description: 'Led the development of a full-stack marketplace app for 1,000+ university students. Built with Next.js, TypeScript, Prisma, and Supabase for the frontend and database, and Spring Boot for backend services. Oversaw design, deployment, and integration of authentication and marketplace features.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'Spring Boot'],
  },
  {
    period: '2021 — 2022',
    title: 'Full-Stack Developer',
    company: 'McGill Scheduler',
    companyUrl: 'https://mcgillscheduler.vercel.app',
    description: 'Developed a web app that streamlined academic planning for 1,000+ McGill students. Built with React and Spring Boot, with PostgreSQL for persistence. Deployed production-ready systems with a RESTful backend and responsive UI.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
  },
] as const;

export const PROJECTS = [] as const;

export const ABOUT_SECTIONS = [
  "I'm a software engineer focused on creating digital systems that combine solid engineering with thoughtful design. My work has centered on building enterprise HR portals, automation tools, and full-stack applications that save teams hundreds of hours and reduce costly errors.",
  "At Allstate Sales Group, I engineered a centralized HR portal used by 500+ employees, cutting access management time by 65% and boosting uptime from 97.3% to 99.8%. I've also taught frontend development to 1,000+ students at Frontend Simplified, helping them master responsive design, debugging, and modern React workflows.",
  "Beyond client work, I've led development of full-stack platforms like McGill Scheduler and Empor, serving 1,000+ university students. My toolkit spans React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS, with experience integrating 12+ third-party APIs to streamline business processes."
] as const;

export type Experience = typeof EXPERIENCES[number];
export type Project = typeof PROJECTS[number];