import { IImage } from '@/lib/types';
import { PrimaryHero } from '../index';
import { ISanityPrimaryHero } from './interface';
import { generateImageUrl } from '@/backend/sanity/image-builder';
import { PRIMARY_HERO_IMAGE_DIMENSIONS } from '../interface';
import { extractSanityLink } from '@/lib/extract-sanity-link';
import { ICustomButton } from '@/components/button/interface';

export function PrimaryHeroBuilder({
  textContent,
  image,
  ctaLink,
}: ISanityPrimaryHero) {
  let generatedImage: IImage | undefined = undefined;

  if (image) {
    generatedImage = generateImageUrl({
      source: image,
      useCdn: false,
      height: PRIMARY_HERO_IMAGE_DIMENSIONS.height,
      width: PRIMARY_HERO_IMAGE_DIMENSIONS.width,
    });
  }

  let ctaButton: ICustomButton | undefined;
  const extractedCtaLink = extractSanityLink(ctaLink);

  if (extractedCtaLink) {
    ctaButton = {
      type: 'link',
      colorScheme: 'primary',
      children: extractedCtaLink.label,
      target: '_self',
      disabled: extractedCtaLink.disabled,
      href: extractedCtaLink.href,
    };
  }

  return (
    <PrimaryHero
      textContent={textContent}
      image={generatedImage}
      ctaLink={ctaButton}
    />
  );
}
