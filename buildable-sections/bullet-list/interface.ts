import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { IImage } from '@/lib/types';

export interface IBulletListSection {
  /** The text content of the section */
  textContent?: ISanityPortableText;
  /** The optional image of the section */
  image?: IImage;
  /** The position of the image */
  imagePosition?: 'left' | 'right';
}

export const BULLET_LIST_IMAGE_DIMENSIONS = {
  width: 398,
  height: 292,
};
