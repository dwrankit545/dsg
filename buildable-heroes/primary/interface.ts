import { ICustomButton } from '@/components/button/interface';
import { IPortableTextComponent } from '@/components/portable-text/interface';
import { IImage } from '@/lib/types';

/** This interface represents a hero section. */
export interface IPrimaryHero {
  /** The text content of the hero section. */
  textContent: IPortableTextComponent['content'];
  /** The optional CTA button of the hero section. */
  ctaLink?: ICustomButton;
  /** The properties of the desktop image used in the hero section. */
  image?: IImage;
}

export const PRIMARY_HERO_IMAGE_DIMENSIONS = {
  height: 424,
  width: 424,
};
