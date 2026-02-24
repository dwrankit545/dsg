import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface INewsletterSection {
  /** The content of the section */
  textContent?: ISanityPortableText;
  /** The optional link label of the section */
  ctaLabel?: string;
}
