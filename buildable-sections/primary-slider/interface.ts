import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { IPrimaryCarouselCard } from './sub-component/primary-card/interface';

export interface IPrimarySliderSection {
  textContent?: ISanityPortableText;
  items?: IPrimaryCarouselCard[];
}
