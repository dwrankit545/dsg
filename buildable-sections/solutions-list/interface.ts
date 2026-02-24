import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ISolutionItem } from './sub-components/solution/interface';

export interface ISolutionsListSection {
  /** The content of the section */
  textContent?: ISanityPortableText;
  /** The solutions to display */
  solutions?: ISolutionItem[];
}
