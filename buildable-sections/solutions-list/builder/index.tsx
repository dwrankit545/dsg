import { extractSanityLink } from '@/lib/extract-sanity-link';
import { SolutionsListSection } from '..';
import { ISolutionsListSection } from '../interface';
import { ISanitySolutionsListSection } from './interface';
import { generateImageUrl } from '@/backend/sanity/image-builder';
import { ISecondaryCard } from '@/components/cards/secondary/interface';
import { fallbackImage } from '@/lib/fallback-image';
import {
  ISolutionItem,
  SOLUTION_ITEM_IMAGE_DIMENSION,
} from '../sub-components/solution/interface';
import { IImage } from '@/lib/types';

export function SolutionsListSectionBuilder({
  textContent,
  solutions,
}: ISanitySolutionsListSection) {
  const sectionProps: ISolutionsListSection = {
    textContent,
    solutions:
      solutions && solutions.length > 0
        ? solutions.map(
            ({ mediaType, image, video, cardItems, ctaLink, textContent }) => {
              let generatedImage: IImage | undefined = undefined;
              let generatedPosterImage: IImage | undefined = undefined;

              if (mediaType == 'image' && image) {
                generatedImage = generateImageUrl({
                  source: image,
                  useCdn: false,
                });
              }

              if (mediaType == 'video' && video && video.posterImage) {
                generatedPosterImage = generateImageUrl({
                  source: video.posterImage,
                  useCdn: false,
                  height: SOLUTION_ITEM_IMAGE_DIMENSION.height,
                  width: SOLUTION_ITEM_IMAGE_DIMENSION.width,
                });
              }

              const extractedCtaLink = extractSanityLink(ctaLink);

              return {
                mediaType,
                image:
                  mediaType == 'image'
                    ? generatedImage
                      ? generatedImage
                      : fallbackImage
                    : undefined,
                video:
                  mediaType == 'video' && video && video.url
                    ? {
                        videoUrl: video.url,
                        posterImageUrl: generatedPosterImage
                          ? generatedPosterImage.src
                          : undefined,
                      }
                    : undefined,
                textContent,
                ctaLink: extractedCtaLink && {
                  colorScheme: 'primary',
                  disabled: extractedCtaLink.disabled,
                  href: extractedCtaLink.href,
                  type: 'link',
                  children: extractedCtaLink.label,
                },
                cardItems:
                  cardItems && cardItems.length > 0
                    ? cardItems.map((customItem) => {
                        const generatedImage = generateImageUrl({
                          source: customItem.image,
                          useCdn: false,
                        });
                        return {
                          image: generatedImage
                            ? generatedImage
                            : fallbackImage,
                          title: customItem.title,
                          description: customItem.description,
                        } satisfies ISecondaryCard;
                      })
                    : [],
              } satisfies ISolutionItem;
            }
          )
        : [],
  };

  return <SolutionsListSection {...sectionProps} />;
}
