import { generateImageUrl } from '@/backend/sanity/image-builder';
import { ISanityPotpourriArticlePageQueryResponse } from '../interface';
import { fallbackImage } from '@/lib/fallback-image';
import { Typography } from '@/components/typography';
import Image from 'next/image';
import { FileDownloadPart } from './file-download';
import { PortableTextComponent } from '@/components/portable-text';
import { FormPart } from './form';
import { renderItalicText } from '@/lib/render-italic-text';

const ARTICLE_DETAILS_SECTION_IMAGE_DIMENSIONS = {
  width: 1440,
  height: 600,
};

export function ArticleDetailsSectionBuilder({
  articleContent,
  image,
  title,
  downloadableFile,
  downloadTextContent,
}: Pick<
  ISanityPotpourriArticlePageQueryResponse,
  | 'title'
  | 'image'
  | 'articleContent'
  | 'downloadableFile'
  | 'downloadTextContent'
>) {
  const generatedImage = generateImageUrl({
    source: image,
    width: ARTICLE_DETAILS_SECTION_IMAGE_DIMENSIONS.width,
    height: ARTICLE_DETAILS_SECTION_IMAGE_DIMENSIONS.height,
    useCdn: false,
  });

  return (
    <section className="section-padding-primary">
      <div className="container flex flex-col gap-5 md:gap-[1.875rem]">
        <Typography size="h1" className="text-center text-primary-dark">
          {renderItalicText(title)}
        </Typography>

        <Image
          src={generatedImage?.src || fallbackImage.src}
          alt={generatedImage?.alt || `Article image for ${title}`}
          width={ARTICLE_DETAILS_SECTION_IMAGE_DIMENSIONS.width}
          height={ARTICLE_DETAILS_SECTION_IMAGE_DIMENSIONS.height}
          priority
          placeholder="blur"
          blurDataURL={generatedImage?.lqip || fallbackImage.lqip}
        />

        <PortableTextComponent content={articleContent} />

        <FileDownloadPart
          downloadableFile={downloadableFile}
          downloadTextContent={downloadTextContent}
        />

        <FormPart />
      </div>
    </section>
  );
}
