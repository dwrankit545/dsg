import { IImage } from '@/lib/types';
import { SecondaryHero } from '../index';
import { ISanitySecondaryHero } from './interface';
import { generateImageUrl } from '@/backend/sanity/image-builder';
import { SECONDARY_HERO_IMAGE_DIMENSIONS } from '../interface';

export function SecondaryHeroBuilder({
  textContent,
  image,
}: ISanitySecondaryHero) {
  let generatedImage: IImage | undefined = undefined;

  if (image) {
    generatedImage = generateImageUrl({
      source: image,
      useCdn: false,
      height: SECONDARY_HERO_IMAGE_DIMENSIONS.height,
      width: SECONDARY_HERO_IMAGE_DIMENSIONS.width,
    });
  }

  return <SecondaryHero textContent={textContent} image={generatedImage} />;
}
