export const EXPERIENCES = [
  {
    period: 'Jan 2023 — Present',
    title: 'Software Engineer',
    company: 'Allstate Sales Group',
    companyUrl: '#',
    description: 'Built HR systems and data pipelines used across the organization. Reduced access management time 65% by building a centralized HR portal and admin console for 500+ users. Cut data-entry errors 78% and improved form efficiency 40% via 30+ validation rules. Integrated 12+ third-party APIs to eliminate manual handoffs.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Azure', 'Docker', 'PowerBI'],
  },
  {
    period: 'Jun 2022 — Nov 2022',
    title: 'Frontend Developer',
    company: 'Frontend Simplified',
    companyUrl: '#',
    description: 'Taught modern frontend and led hands-on builds. Helped 1,000+ students ship projects faster through live coding and debugging sessions. Taught responsive design, API requests, Promises/async patterns.',
    technologies: ['React', 'JavaScript', 'Git', 'Chrome DevTools'],
  },
] as const;

export const PROJECTS = [
  {
    title: 'McGill Scheduler',
    description: 'Full-stack scheduling app used by 1,000+ students. React UI, Spring Boot REST API, PostgreSQL.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    links: {
      external: 'https://mcgillscheduler.vercel.app/',
      github: 'https://github.com/Erik-Cupsa/McGill-Scheduler',
    },
  },
  {
    title: 'Empor',
    description: 'Led marketplace for 1,000+ students with modern stack and typed data layer.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'Spring Boot'],
    links: {
      external: 'https://empor.ca/',
      github: null,
    },
  },
] as const;

export const ABOUT_SECTIONS = [
  "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
  "Currently, I'm a Software Engineer at Allstate Sales Group, specializing in full-stack development. I contribute to the creation and maintenance of scalable applications, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
  "In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.",
  "In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds."
] as const;

export type Experience = typeof EXPERIENCES[number];
export type Project = typeof PROJECTS[number];