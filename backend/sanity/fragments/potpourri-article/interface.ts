import { ISanityImage } from '../root/media/image/interface';

export interface ISanityPotpourriArticleCard<T> {
  slug: string;
  title: string;
  image: ISanityImage;
  description: T;
}
