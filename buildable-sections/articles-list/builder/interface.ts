import { ISanityFeaturedArticleCard } from '@/backend/sanity/fragments/featured-article/interface';
import { ISanityPotpourriArticleCard } from '@/backend/sanity/fragments/potpourri-article/interface';
import { ISanityLink } from '@/backend/sanity/fragments/root/link/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ArticleListSectionType } from '../interface';
import { ISanityInsideTheMindArticleCard } from '@/backend/sanity/fragments/inside-the-mind-article/interface';

export interface ISanityArticlesListSection {
  _type: 'articlesListSection';
  textContent?: ISanityPortableText;
  ctaLink?: ISanityLink;
  type: ArticleListSectionType;
  potpourriArticles?: ISanityPotpourriArticleCard<string>[];
  featuredArticles?: ISanityFeaturedArticleCard[];
  insideTheMindArticles?: ISanityInsideTheMindArticleCard[];
}
