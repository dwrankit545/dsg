import { getRelativeURL } from '@/lib/routes';
import { IHeader } from './interface';

export const headerProps: IHeader = {
  menuLinks: [
    {
      label: 'Home',
      href: getRelativeURL('homePage'),
      disabled: false,
    },
    {
      label: 'Potpourri',
      href: getRelativeURL('potpourriPage'),
      disabled: false,
    },
  ],
  cta: {
    label: 'Contact Us',
    href: '/',
    disabled: false,
  },
};
