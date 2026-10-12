// Shared site data: navigation, contact details and page links.

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
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Team', href: '/team' },
  { label: 'News', href: '/news' },
];

export const contactLink = { label: 'Contact us', href: '/contact' };

export const secondaryNav = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Research & Development', href: '/research' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
];
