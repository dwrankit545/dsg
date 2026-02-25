import { Raleway } from 'next/font/google';

/**
 * NOTE: Any update to this file also requires an update to the tailwind config
 * file and the root layout file (app/layout.tsx)
 */
export const primary = Raleway({
  subsets: ['latin'],
  variable: '--font-primary',
  style: ['normal'],
  weight: ['400', '500', '700'],
  display: 'optional',
});
