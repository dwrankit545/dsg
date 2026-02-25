import { ISanityImage } from '@/backend/sanity/fragments/root/media/image/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { CustomListSectionType } from '../interface';
import { ISanityLink } from '@/backend/sanity/fragments/root/link/interface';

export interface ISanityCustomInfoCard {
  image: ISanityImage;
  title: string;
  description: string;
}

export interface ISanityCustomLinkCard extends ISanityCustomInfoCard {
  ctaLink: ISanityLink;
}

export interface ISanityCustomListSection {
  _type: 'customListSection';
  textContent?: ISanityPortableText;
  type: CustomListSectionType;
  infoItems?: ISanityCustomInfoCard[];
  linkItems?: ISanityCustomLinkCard[];
}
