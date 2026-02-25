import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface ISanityRichTextSection {
  _type: 'richTextSection';
  title?: string;
  content: ISanityPortableText;
}
