import { IFooter, SocialPlatformsEnum } from './interface';

export const footerProps: IFooter = {
  address: '690 E Main Street, Little Falls, NY 13365',
  copyrightText: '© 2022 Digital Solution Group, LLC',
  socialLinks: [
    { platform: SocialPlatformsEnum.LinkedIn, href: 'https://linkedin.com' },
    { platform: SocialPlatformsEnum.Twitter, href: 'https://twitter.com' },
    { platform: SocialPlatformsEnum.Facebook, href: 'https://facebook.com' },
  ],
  baseLinks: [
    { label: 'Privacy', href: '#', disabled: false },
    { label: 'Security', href: '#', disabled: false },
    { label: 'Disclaimer', href: '#', disabled: false },
    {
      label: 'Legal & Compliance',
      href: '#',
      disabled: false,
    },
    { label: 'Term of Use', href: '', disabled: false },
  ],
  mainLinks: [
    {
      label: 'Cloud-native Application Development',
      href: '#',
      disabled: false,
    },
    {
      label: 'Agile Methodology Adoption',
      href: '#',
      disabled: false,
    },
    {
      label: 'Software Development LifecycleImprovement',
      href: '#',
      disabled: false,
    },
    {
      label: 'PoCs and Feasibility Studies',
      href: '#',
      disabled: false,
    },
    {
      label: 'Development Solutions',
      href: '#',
      disabled: false,
    },
    {
      label: 'Project Rescue',
      href: '#',
      disabled: false,
    },
  ],
};
