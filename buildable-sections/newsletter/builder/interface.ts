import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface ISanityNewsletterSection {
  _type: 'newsletterSection';
  title?: string;
  textContent?: ISanityPortableText;
  formButtonLabel?: string;
}
