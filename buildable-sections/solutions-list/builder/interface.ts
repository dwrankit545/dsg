import { ISanityLink } from '@/backend/sanity/fragments/root/link/interface';
import { ISanityImage } from '@/backend/sanity/fragments/root/media/image/interface';
import { ISanityVideo } from '@/backend/sanity/fragments/root/media/video/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ISanityCustomInfoCard } from '@/buildable-sections/custom-card-list/builder/interface';

const mediaTypes = ['image', 'video'] as const;
export type SolutionMediaType = (typeof mediaTypes)[number];

export interface ISanitySolutionItem {
  mediaType: SolutionMediaType;
  image?: ISanityImage;
  video?: ISanityVideo;
  ctaLink?: ISanityLink;
  textContent?: ISanityPortableText;
  cardItems?: ISanityCustomInfoCard[];
}

export interface ISanitySolutionsListSection {
  _type: 'solutionsListSection';
  textContent?: ISanityPortableText;
  solutions?: ISanitySolutionItem[];
}
