import { ISanityLink } from '../root/link/interface';
import { ISanityImage } from '../root/media/image/interface';

export interface ISanitySolutionCard {
  title: string;
  description: string;
  image: ISanityImage;
  ctaLink?: ISanityLink;
}
