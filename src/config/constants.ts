export const NAVIGATION_OFFSET = 96;
export const SCROLL_THRESHOLD = 96;

export const NAVIGATION_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
] as const;

export const SOCIAL_LINKS = [
  { 
    name: 'github',
    href: 'https://github.com/chowdhuryrz', 
    label: 'GitHub' 
  },
  { 
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/rohancho/', 
    label: 'LinkedIn' 
  },
  { 
    name: 'resume',
    href: '/resume.pdf', 
    label: 'Resume' 
  },
] as const;

export const CONTACT = {
  email: 'rmc.2917@gmail.com',
  name: 'Rohan Chowdhury',
  title: 'Software Engineer',
  tagline: 'I build reliable, data-driven web apps and automations.',
} as const;

export const RESUME_URL = `mailto:${CONTACT.email}`;

export type NavigationItem = typeof NAVIGATION_ITEMS[number];
export type SocialLink = typeof SOCIAL_LINKS[number];