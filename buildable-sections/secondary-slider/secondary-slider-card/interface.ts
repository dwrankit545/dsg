import { ICustomLink } from '@/components/custom-link/interface';
import { IImage } from '@/lib/types';

export interface ICardContent {
  title: string;
  link: ICustomLink;
  image: IImage;
}

export interface ISecondarySliderCard {
  activeIndex: number;
  cardIndex: number;
  cardContent: ICardContent;
  isActive: boolean;
}

export const SECONDARY_SLIDER_CARD_IMAGE_DIMENSIONS = {
  height: 458,
  width: 687,
};
