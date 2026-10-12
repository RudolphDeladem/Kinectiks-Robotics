// Shared site data: navigation, contact details and page links.

/** Prefix an internal path with the site's base path, so links work when hosted in a sub-folder. */
export function link(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path === '/' ? `${base}/` : `${base}${path}`;
}

export const site = {
  name: 'Kinectiks Robotics',
  tagline: 'Putting the world in motion',
  description:
    'Kinectiks Robotics is an African-born robotics and automation company in Accra, Ghana, developing autonomous machines for African agriculture.',
  email: 'hello@kinectiksrobotics.com',
  location: 'Accra, Ghana',
};

/** Primary navigation: exactly these five tabs, in this order. */
export const primaryNav = [
  { label: 'Home', href: link('/') },
  { label: 'About', href: link('/about') },
  { label: 'Products', href: link('/products') },
  { label: 'Team', href: link('/team') },
  { label: 'News', href: link('/news') },
];

export const contactLink = { label: 'Contact us', href: link('/contact') };

export const secondaryNav = [
  { label: 'Solutions', href: link('/solutions') },
  { label: 'Research & Development', href: link('/research') },
  { label: 'Gallery', href: link('/gallery') },
  { label: 'Careers', href: link('/careers') },
  { label: 'Contact', href: link('/contact') },
];

export const legalNav = [
  { label: 'Privacy Policy', href: link('/privacy') },
  { label: 'Terms and Conditions', href: link('/terms') },
];
