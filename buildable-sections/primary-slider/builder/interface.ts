import { ISanityImage } from '@/backend/sanity/fragments/root/media/image/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ITextComponent } from '@/components/text-component/interface';

interface ISanityPrimaryCarouselCard {
  textComponent: Pick<ITextComponent, 'title' | 'overline' | 'description'>;
  image?: ISanityImage;
}

export interface ISanityPrimarySliderSection {
  _type: 'primarySliderSection';
  textContent?: ISanityPortableText;
  items?: ISanityPrimaryCarouselCard[];
}
