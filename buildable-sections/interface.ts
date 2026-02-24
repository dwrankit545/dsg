import { ISanityArticlesListSection } from './articles-list/builder/interface';
import { ISanityBulletListSection } from './bullet-list/builder/interface';
import { ISanityCtaSection } from './cta/builder/interface';
import { ISanityCustomListSection } from './custom-card-list/builder/interface';
import { ISanityNewsletterSection } from './newsletter/builder/interface';
import { ISanityPrimarySliderSection } from './primary-slider/builder/interface';
import { ISanityRichTextSection } from './rich-text/builder/interface';
import { ISanitySecondarySliderSection } from './secondary-slider/builder/interface';
import { ISanitySolutionsListSection } from './solutions-list/builder/interface';

/**
 * When you have more type of section you will update the interface like so:
 * type ISanitySections = (ISanityRichTextSection | ISanityFAQSection)[]
 */
export type ISanitySections = (
  | ISanityRichTextSection
  | ISanityArticlesListSection
  | ISanityCustomListSection
  | ISanitySolutionsListSection
  | ISanitySecondarySliderSection
  | ISanityPrimarySliderSection
  | ISanityCtaSection
  | ISanityNewsletterSection
  | ISanityBulletListSection
)[];
