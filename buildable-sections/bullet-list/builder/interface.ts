import { ISanityImage } from '@/backend/sanity/fragments/root/media/image/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface ISanityBulletListSection {
  _type: 'bulletListSection';
  textContent?: ISanityPortableText;
  image?: ISanityImage;
  imagePosition?: 'left' | 'right';
}
