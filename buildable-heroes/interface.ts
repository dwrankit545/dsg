import { ISanityPrimaryHero } from './primary/builder/interface';
import { ISanitySecondaryHero } from './secondary/builder/interface';

/**
 * When you have more type of section you will update the interface like so:
 * type ISanityHero = (ISanityPrimaryHero | ISanitySecondaryHero)
 */
export type ISanityHero = ISanityPrimaryHero | ISanitySecondaryHero;
