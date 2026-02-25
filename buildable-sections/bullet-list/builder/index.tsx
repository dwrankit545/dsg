import { IImage } from '@/lib/types';
import { BulletListSection } from '..';
import { IBulletListSection, BULLET_LIST_IMAGE_DIMENSIONS } from '../interface';
import { ISanityBulletListSection } from './interface';
import { generateImageUrl } from '@/backend/sanity/image-builder';

export function BulletListSectionBuilder({
  textContent,
  image,
  imagePosition,
}: ISanityBulletListSection) {
  let generatedImage: IImage | undefined = undefined;
  if (image) {
    generatedImage = generateImageUrl({
      source: image,
      useCdn: false,
      height: BULLET_LIST_IMAGE_DIMENSIONS.height,
      width: BULLET_LIST_IMAGE_DIMENSIONS.width,
    });
  }
  const sectionProps: IBulletListSection = {
    textContent,
    image: generatedImage,
    imagePosition,
  };

  return <BulletListSection {...sectionProps} />;
}
