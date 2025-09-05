import { describe, it, expect } from 'vitest';
import { NAVIGATION_ITEMS, SOCIAL_LINKS, CONTACT, NAVIGATION_OFFSET } from '../constants';

describe('constants', () => {
  it('should have correct navigation items', () => {
    expect(NAVIGATION_ITEMS).toEqual([
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
    ]);
  });

  it('should have correct social links', () => {
    expect(SOCIAL_LINKS).toEqual([
      { name: 'github', href: 'https://github.com/chowdhuryrz', label: 'GitHub' },
      { name: 'linkedin', href: 'https://www.linkedin.com/in/rohancho/', label: 'LinkedIn' },
    ]);
  });

  it('should have contact information', () => {
    expect(CONTACT.name).toBe('Rohan Chowdhury');
    expect(CONTACT.title).toBe('Software Engineer');
    expect(CONTACT.tagline).toBe('I build reliable, data-driven web apps and automations.');
    expect(CONTACT.email).toContain('@');
  });

  it('should have navigation offset as number', () => {
    expect(typeof NAVIGATION_OFFSET).toBe('number');
    expect(NAVIGATION_OFFSET).toBeGreaterThan(0);
  });
});