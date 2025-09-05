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
    title: 'Build a Spotify Connected App',
    description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
    technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop&auto=format',
    links: {
      external: 'https://buildaspotifyconnectedapp.vercel.app',
      github: 'https://github.com/chowdhuryrz/spotify-connected-app'
    }
  },
  {
    title: 'Spotify Profile',
    description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format',
    stars: 694,
    links: {
      external: 'https://spotify-profile.vercel.app',
      github: 'https://github.com/chowdhuryrz/spotify-profile'
    }
  },
  {
    title: 'Halcyon Theme',
    description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    technologies: ['Gatsby', 'Styled Components', 'Netlify'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&auto=format',
    downloads: '100k+ installs',
    links: {
      external: 'https://halcyon-theme.netlify.app',
      github: 'https://github.com/chowdhuryrz/halcyon-theme'
    }
  },
  {
    title: 'brittanychiang.com (v4)',
    description: 'An old portfolio site built with Gatsby with 8k+ stars and 3k+ forks.',
    technologies: ['Gatsby', 'Styled Components', 'Netlify'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&auto=format',
    stars: 8051,
    links: {
      external: 'https://brittanychiang.com',
      github: 'https://github.com/chowdhuryrz/v4'
    }
  }
] as const;

export const ABOUT_SECTIONS = [
  "I'm a software engineer focused on creating digital systems that combine solid engineering with thoughtful design. My work has centered on building enterprise HR portals, automation tools, and full-stack applications that save teams hundreds of hours and reduce costly errors.",
  "At Allstate Sales Group, I engineered a centralized HR portal used by 500+ employees, cutting access management time by 65% and boosting uptime from 97.3% to 99.8%. I've also taught frontend development to 1,000+ students at Frontend Simplified, helping them master responsive design, debugging, and modern React workflows.",
  "Beyond client work, I've led development of full-stack platforms like McGill Scheduler and Empor, serving 1,000+ university students. My toolkit spans React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS, with experience integrating 12+ third-party APIs to streamline business processes."
] as const;

export type Experience = typeof EXPERIENCES[number];
export type Project = typeof PROJECTS[number];