import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ICardContent } from './secondary-slider-card/interface';
import { ICustomButton } from '@/components/button/interface';

export interface ISecondarySliderSection {
  textContent?: ISanityPortableText;
  items?: ICardContent[];
  ctaLink?: ICustomButton;
}
