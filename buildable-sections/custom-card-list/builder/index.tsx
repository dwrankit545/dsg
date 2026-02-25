import { CustomCardListSection } from '..';
import { ICustomCardListSection } from '../interface';
import { ISanityCustomListSection } from './interface';
import { generateImageUrl } from '@/backend/sanity/image-builder';
import { IImage } from '@/lib/types';
import { fallbackImage } from '@/lib/fallback-image';
import {
  ISecondaryCard,
  SECONDARY_CARD_IMAGE_DIMENSIONS,
} from '@/components/cards/secondary/interface';
import {
  IPrimaryCard,
  PRIMARY_CARD_IMAGE_DIMENSIONS,
} from '@/components/cards/primary/interface';
import { extractSanityLink } from '@/lib/extract-sanity-link';
import { getRelativeURL } from '@/lib/routes';

export function CustomCardListSectionBuilder({
  textContent,
  type,
  infoItems,
  linkItems,
}: ISanityCustomListSection) {
  const sectionProps: ICustomCardListSection = {
    textContent,
    type,
    infoItems:
      type == 'info' && infoItems && infoItems.length > 0
        ? infoItems.map(({ image, title, description }) => {
            let generatedImage: IImage | undefined = undefined;
            if (image) {
              generatedImage = generateImageUrl({
                source: image,
                useCdn: false,
                height: SECONDARY_CARD_IMAGE_DIMENSIONS.height,
                width: SECONDARY_CARD_IMAGE_DIMENSIONS.width,
              });
            }

            return {
              title,
              description,
              image: generatedImage ? generatedImage : fallbackImage,
            } satisfies ISecondaryCard;
          })
        : [],
    linkItems:
      type == 'link' && linkItems && linkItems.length > 0
        ? linkItems.map(({ image, title, description, ctaLink }) => {
            let generatedImage: IImage | undefined = undefined;
            if (image) {
              generatedImage = generateImageUrl({
                source: image,
                useCdn: false,
                height: PRIMARY_CARD_IMAGE_DIMENSIONS.height,
                width: PRIMARY_CARD_IMAGE_DIMENSIONS.width,
              });
            }

            const extractedCtaLink = extractSanityLink(ctaLink);

            return {
              title,
              description,
              image: generatedImage ? generatedImage : fallbackImage,
              link: extractedCtaLink || {
                disabled: true,
                href: getRelativeURL('homePage'),
              },
            } satisfies IPrimaryCard;
          })
        : [],
  };

  return <CustomCardListSection {...sectionProps} />;
}
