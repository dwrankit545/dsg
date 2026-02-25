import { ISanityImage } from '@/backend/sanity/fragments/root/media/image/interface';
import { ISanityCommonPageProps } from '@/backend/sanity/fragments/root/page/interface';
import { ISanityPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';

export interface ISanityPotpourriArticlePageQueryResponse
  extends Omit<ISanityCommonPageProps, 'hero'> {
  title: string;
  image: ISanityImage;
  articleContent: ISanityPortableText;
  downloadTextContent?: ISanityPortableText;
  downloadableFile?: {
    label: string;
    downloadLink: string;
  };
}
