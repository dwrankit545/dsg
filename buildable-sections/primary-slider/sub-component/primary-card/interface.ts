import { ITextComponent } from '@/components/text-component/interface';
import { IImage } from '@/lib/types';

export interface IPrimaryCarouselCard {
  textComponent: Pick<ITextComponent, 'title' | 'overline' | 'description'>;
  image?: IImage;
}

export const PRIMARY_CAROUSEL_CARD_IMAGE_DIMENSION = {
  height: 500,
  width: 500,
};
