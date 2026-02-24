import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ICustomButton } from '@/components/button/interface';
import { ISecondaryCard } from '@/components/cards/secondary/interface';
import { IImage } from '@/lib/types';
import { SolutionMediaType } from '../../builder/interface';

type Video = {
  videoUrl: string;
  posterImageUrl?: string;
};

export interface ISolutionItem {
  mediaType: SolutionMediaType;
  image?: IImage;
  video?: Video;
  ctaLink?: ICustomButton;
  textContent?: ISanityPortableText;
  cardItems?: ISecondaryCard[];
}

export const SOLUTION_ITEM_IMAGE_DIMENSION = {
  height: 613,
  width: 1144,
};
