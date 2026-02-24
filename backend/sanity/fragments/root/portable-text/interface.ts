import { PortableTextBlock } from '@portabletext/types';
import { ISanityImage } from '../media/image/interface';
import { ISanityVideo } from '../media/video/interface';
import { ISanityCode } from '../common';
import { ISanityPortableTextInlineImage } from '@/components/portable-text/sub-components/inline-image';
import { ISanityPortableTextQuoteText } from '@/components/portable-text/sub-components/quote-text';

export type ISanityLimitedPortableText = PortableTextBlock[];

export type ISanityPortableText = (
  | PortableTextBlock
  | ISanityPortableTextImage
  | ISanityPortableTextVideo
  | ISanityPortableTextInlineImage
  | ISanityPortableTextQuoteText
  | ISanityCode
)[];

export interface ISanityPortableTextImage extends ISanityImage {
  _type: string;
  markDefs?: undefined | [] | null;
}

export interface ISanityPortableTextVideo extends ISanityVideo {
  _type: string;
  markDefs?: undefined | [] | null;
}
