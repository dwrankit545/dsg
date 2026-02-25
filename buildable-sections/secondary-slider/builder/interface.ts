import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ISanityPotpourriArticleCard } from '@/backend/sanity/fragments/potpourri-article/interface';
import { ISanityLink } from '@/backend/sanity/fragments/root/link/interface';

export interface ISanitySecondarySliderSection {
  _type: 'secondarySliderSection';
  textContent?: ISanityPortableText;
  ctaLink?: ISanityLink;
  potpourriArticles?: ISanityPotpourriArticleCard<undefined>[];
}
