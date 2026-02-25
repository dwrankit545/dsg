import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ICustomButton } from '@/components/button/interface';
import { IPrimaryCard } from '@/components/cards/primary/interface';
import { ITertiaryCard } from '@/components/cards/tertiary/interface';

const articleListSectionTypes = [
  'potpourri',
  'featured',
  'inside-the-mind',
] as const;
export type ArticleListSectionType = (typeof articleListSectionTypes)[number];

export interface IArticlesListSection {
  /** The type of the article */
  type: ArticleListSectionType;
  /** The content of the section */
  textContent?: ISanityPortableText;
  /** The potpourri articles to display */
  potpourriArticles?: IPrimaryCard[];
  /** The featured articles to display */
  featuredArticles?: ITertiaryCard[];
  /** The inside the mind articles to display */
  insideTheMindArticles?: IPrimaryCard[];
  /** The optional CTA to display */
  ctaLink?: ICustomButton;
  /** Control search bar render */
  displaySearchBar?: boolean;
}
