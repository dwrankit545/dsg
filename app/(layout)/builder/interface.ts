import { ISanityLink } from '@/backend/sanity/fragments/root/link/interface';
import { ISanitySchemaMarkup } from '@/backend/sanity/fragments/root/schema-markup/interface';
import { SocialPlatformsEnum } from './sub-sections/footer/interface';

export interface ISanityLayoutData {
  schemaMarkupDefinitions?: ISanitySchemaMarkup;
  header: ISanityHeaderData;
  footer: ISanityFooterData;
}

interface IMegaMenu {
  _type: 'megaMenu';
  title: string;
  links: ISanityLink[];
}

interface ISanityHeaderData {
  menuLinks?: (ISanityLink | IMegaMenu)[];
  ctaButton?: ISanityLink;
}

type SocialLink = {
  platform: SocialPlatformsEnum;
  link: string;
};

interface ISanityFooterData {
  mainLinks?: ISanityLink[];
  address?: string;
  copyrightText?: string;
  socialLinks?: SocialLink[];
  baseLinks?: ISanityLink[];
}
