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
] as const;

export const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment processing. Features include responsive design, admin dashboard, and order management system.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format',
    links: {
      external: '#',
      github: '#'
    }
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and progress tracking. Built with modern web technologies for optimal performance and user experience.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format',
    stars: 245,
    links: {
      external: '#',
      github: '#'
    }
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application that displays current conditions, forecasts, and weather maps. Includes geolocation support, favorite locations, and detailed weather analytics.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Weather API', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&auto=format',
    downloads: '10k+ users',
    links: {
      external: '#',
      github: '#'
    }
  }
] as const;

export const ABOUT_SECTIONS = [
  "I'm a software engineer focused on creating digital systems that blend reliable engineering with thoughtful design. My work spans enterprise HR portals, automation platforms, and full-stack applications that make organizations more efficient and resilient.",
  "I've contributed to projects across different environments—enterprise teams, start-ups, and personal ventures—gaining experience in building solutions that scale and adapt to diverse needs. Beyond engineering, I've taught frontend development to aspiring developers, helping them build strong foundations in React and modern web practices.",
  "My toolkit includes React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS, and I enjoy connecting systems through third-party APIs to streamline workflows and eliminate inefficiencies. I'm especially drawn to roles where design and engineering intersect, creating products that are both usable and high-performing.",
  "Outside of coding, I stay sharp by working out and working on cars—two areas that keep me disciplined, detail-oriented, and always learning."
] as const;

export type Experience = typeof EXPERIENCES[number];
export type Project = typeof PROJECTS[number];