import { ISanityImage } from '@/backend/sanity/fragments/root/media/image/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface ISanitySecondaryHero {
  _type: 'secondaryHeroSection';
  textContent: ISanityPortableText;
  image?: ISanityImage;
}
