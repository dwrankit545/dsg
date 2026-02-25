import { generateImageUrl } from '@/backend/sanity/image-builder';
import { PrimarySliderSection } from '../index';
import { IPrimarySliderSection } from '../interface';
import { ISanityPrimarySliderSection } from './interface';
import { IImage } from '@/lib/types';
import {
  IPrimaryCarouselCard,
  PRIMARY_CAROUSEL_CARD_IMAGE_DIMENSION,
} from '../sub-component/primary-card/interface';

export function PrimarySliderSectionBuilder({
  items,
  textContent,
}: ISanityPrimarySliderSection) {
  const sectionProps: IPrimarySliderSection = {
    textContent,
    items:
      items && items.length > 0
        ? items.map(({ textComponent, image }) => {
            let generatedImage: IImage | undefined;
            if (image) {
              generatedImage = generateImageUrl({
                source: image,
                useCdn: false,
                height: PRIMARY_CAROUSEL_CARD_IMAGE_DIMENSION.height,
                width: PRIMARY_CAROUSEL_CARD_IMAGE_DIMENSION.width,
              });
            }

            return {
              textComponent: textComponent,
              image: generatedImage,
            } satisfies IPrimaryCarouselCard;
          })
        : [],
  };

  return <PrimarySliderSection {...sectionProps} />;
}
