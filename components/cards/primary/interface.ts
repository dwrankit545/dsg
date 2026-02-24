import { ICustomLink } from '@/components/custom-link/interface';
import { IImage } from '@/lib/types';

export interface IPrimaryCard {
  link: ICustomLink;
  image: IImage;
  title: string;
  description: string;
}

export const PRIMARY_CARD_IMAGE_DIMENSIONS = {
  height: 227,
  width: 367,
};
