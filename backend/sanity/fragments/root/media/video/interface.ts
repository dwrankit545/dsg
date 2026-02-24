import { ISanityImage } from '../image/interface';

export interface ISanityVideo {
  type: 'embed' | 'file';
  url?: string;
  posterImage?: ISanityImage;
}
