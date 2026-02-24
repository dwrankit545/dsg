import { IPortableTextComponent } from '@/components/portable-text/interface';
import { IImage } from '@/lib/types';

/** This interface represents a hero section. */
export interface ISecondaryHero {
  /** The text content of the hero section. */
  textContent: IPortableTextComponent['content'];
  /** The properties of the desktop image used in the hero section. */
  image?: IImage;
}

export const SECONDARY_HERO_IMAGE_DIMENSIONS = {
  height: 400,
  width: 1440,
};
