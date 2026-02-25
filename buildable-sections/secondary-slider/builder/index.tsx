import { generateImageUrl } from '@/backend/sanity/image-builder';
import { SecondarySliderSection } from '..';
import { ISecondarySliderSection } from '../interface';
import { ISanitySecondarySliderSection } from './interface';
import { SECONDARY_SLIDER_CARD_IMAGE_DIMENSIONS } from '@/buildable-sections/secondary-slider/secondary-slider-card/interface';
import { fallbackImage } from '@/lib/fallback-image';
import { getRelativeURL } from '@/lib/routes';
import { extractSanityLink } from '@/lib/extract-sanity-link';

export function SecondarySliderSectionBuilder({
  potpourriArticles,
  textContent,
  ctaLink,
}: ISanitySecondarySliderSection) {
  const extractedCtaLink = extractSanityLink(ctaLink);
  const sectionProps: ISecondarySliderSection = {
    textContent,
    ctaLink: extractedCtaLink && {
      type: 'link',
      colorScheme: 'primary',
      children: extractedCtaLink.label,
      target: '_blank',
      disabled: extractedCtaLink.disabled,
      href: extractedCtaLink.href,
    },
    items:
      potpourriArticles && potpourriArticles.length > 0
        ? potpourriArticles.map(({ title, image, slug }) => {
            const generatedImage = generateImageUrl({
              source: image,
              useCdn: false,
              height: SECONDARY_SLIDER_CARD_IMAGE_DIMENSIONS.height,
              width: SECONDARY_SLIDER_CARD_IMAGE_DIMENSIONS.width,
            });

            return {
              title,
              image: generatedImage ? generatedImage : fallbackImage,
              link: {
                disabled: false,
                href: getRelativeURL('potpourriArticle', slug),
              },
            };
          })
        : [],
  };

  return <SecondarySliderSection {...sectionProps} />;
}
