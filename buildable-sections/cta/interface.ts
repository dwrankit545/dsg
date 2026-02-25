import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ICustomButton } from '@/components/button/interface';

export interface ICtaSection {
  /** The title of the section */
  title?: string;
  /** The content of the section */
  textContent?: ISanityPortableText;
  /** The optional link of the section */
  ctaLink?: ICustomButton;
}
