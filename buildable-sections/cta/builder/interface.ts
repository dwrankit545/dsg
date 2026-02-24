import { ISanityLink } from '@/backend/sanity/fragments/root/link/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface ISanityCtaSection {
  _type: 'ctaSection';
  title?: string;
  textContent?: ISanityPortableText;
  ctaLink?: ISanityLink;
}
