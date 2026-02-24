import { ICustomLink } from '@/components/custom-link/interface';

export enum SocialPlatformsEnum {
  Facebook = 'facebook',
  LinkedIn = 'linkedin',
  Twitter = 'twitter',
}

export interface ISocialLink {
  platform: SocialPlatformsEnum;
  href: string;
}
export interface IFooter {
  /** An optional array of ICustomLink objects, representing the various links in the footer main body. */
  mainLinks?: ICustomLink[];
  /** An optional array of ISocialLink objects */
  socialLinks?: ISocialLink[];
  /** An address string to be displayed in the footer. */
  address: string;
  /** An copyrightText string to be displayed in the footer. */
  copyrightText: string;
  /** An optional array of ICustomLink objects, representing the various links in the footer base. */
  baseLinks?: ICustomLink[];
}
