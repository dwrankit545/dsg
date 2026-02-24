import { ISanityLink } from '@/backend/sanity/fragments/root/link/interface';
import { ISanityImage } from '@/backend/sanity/fragments/root/media/image/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface ISanityPrimaryHero {
  _type: 'primaryHeroSection';
  textContent: ISanityPortableText;
  ctaLink?: ISanityLink;
  image?: ISanityImage;
}
