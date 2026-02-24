import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface IRichTextSection {
  /** The optional title of the section */
  title?: string;
  /** The content of the section */
  content: ISanityPortableText;
}
