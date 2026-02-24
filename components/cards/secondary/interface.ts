import { IImage } from '@/lib/types';

export interface ISecondaryCard {
  image: IImage;
  title: string;
  description?: string;
}

export const SECONDARY_CARD_IMAGE_DIMENSIONS = {
  height: 86,
  width: 80,
};
