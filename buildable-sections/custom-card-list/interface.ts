import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { ICustomButton } from '@/components/button/interface';
import { IPrimaryCard } from '@/components/cards/primary/interface';
import { ISecondaryCard } from '@/components/cards/secondary/interface';

const customListSectionTypes = ['info', 'link'] as const;
export type CustomListSectionType = (typeof customListSectionTypes)[number];

export interface ICustomCardListSection {
  /** The content of the section */
  textContent?: ISanityPortableText;
  /** The optional CTA button of the section. */
  ctaLink?: ICustomButton;
  /** The type of the list items */
  type: CustomListSectionType;
  /** The info type items to display */
  infoItems?: ISecondaryCard[];
  /** The link type items to display */
  linkItems?: IPrimaryCard[];
}
