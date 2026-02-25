import { extractSanityLink } from '@/lib/extract-sanity-link';
import { ArticlesListSection } from '..';
import { IArticlesListSection } from '../interface';
import { ISanityArticlesListSection } from './interface';
import { generateImageUrl } from '@/backend/sanity/image-builder';
import { IImage } from '@/lib/types';
import {
  IPrimaryCard,
  PRIMARY_CARD_IMAGE_DIMENSIONS,
} from '@/components/cards/primary/interface';
import { getRelativeURL } from '@/lib/routes';
import { fallbackImage } from '@/lib/fallback-image';
import { ITertiaryCard } from '@/components/cards/tertiary/interface';

interface Props extends ISanityArticlesListSection {
  displaySearchBar?: boolean;
}

export function ArticlesListSectionBuilder({
  textContent,
  ctaLink,
  type,
  potpourriArticles,
  featuredArticles,
  insideTheMindArticles,
  displaySearchBar,
}: Props) {
  const extractedCtaLink = extractSanityLink(ctaLink);
  const sectionProps: IArticlesListSection = {
    textContent,
    ctaLink: extractedCtaLink && {
      type: 'link',
      colorScheme: 'primary',
      children: extractedCtaLink.label,
      target: '_blank',
      disabled: extractedCtaLink.disabled,
      href: extractedCtaLink.href,
    },
    type,
    potpourriArticles:
      type == 'potpourri' && potpourriArticles && potpourriArticles.length > 0
        ? potpourriArticles.map(({ image, title, description, slug }) => {
            let generatedImage: IImage | undefined = undefined;
            if (image) {
              generatedImage = generateImageUrl({
                source: image,
                useCdn: false,
                height: PRIMARY_CARD_IMAGE_DIMENSIONS.height,
                width: PRIMARY_CARD_IMAGE_DIMENSIONS.width,
              });
            }

            return {
              title,
              description,
              link: {
                href: getRelativeURL(
                  type == 'potpourri'
                    ? 'potpourriArticle'
                    : 'insideTheMindArticle',
                  slug
                ),
                disabled: false,
              },
              image: generatedImage ? generatedImage : fallbackImage,
            } satisfies IPrimaryCard;
          })
        : [],
    featuredArticles:
      type == 'featured' && featuredArticles && featuredArticles.length > 0
        ? featuredArticles.map(({ title, authorInfo, sourceLink }) => {
            const extractedLink = extractSanityLink(sourceLink);
            return {
              title,
              description: authorInfo,
              link: {
                disabled: extractedLink?.disabled || true,
                href: extractedLink?.href || '/',
              },
            } satisfies ITertiaryCard;
          })
        : [],
    insideTheMindArticles:
      type == 'inside-the-mind' &&
      insideTheMindArticles &&
      insideTheMindArticles.length > 0
        ? insideTheMindArticles.map(({ image, title, description, slug }) => {
            let generatedImage: IImage | undefined = undefined;
            if (image) {
              generatedImage = generateImageUrl({
                source: image,
                useCdn: false,
                height: PRIMARY_CARD_IMAGE_DIMENSIONS.height,
                width: PRIMARY_CARD_IMAGE_DIMENSIONS.width,
              });
            }

            return {
              title,
              description,
              link: {
                href: getRelativeURL('insideTheMindArticle', slug),
                disabled: false,
              },
              image: generatedImage ? generatedImage : fallbackImage,
            } satisfies IPrimaryCard;
          })
        : [],
    displaySearchBar,
  };

  return <ArticlesListSection {...sectionProps} />;
}
