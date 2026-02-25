import { generateImageUrl } from '@/backend/sanity/image-builder';
import { ISanityInsideTheMindArticlePageQueryResponse } from '../interface';
import { fallbackImage } from '@/lib/fallback-image';
import { Typography } from '@/components/typography';
import Image from 'next/image';
import { FileDownloadPart } from './file-download';
import { PortableTextComponent } from '@/components/portable-text';
import { FormPart } from './form';
import { renderItalicText } from '@/lib/render-italic-text';

const ARTICLE_DETAILS_SECTION_IMAGE_DIMENSIONS = {
  width: 1144,
  height: 400,
};

export function ArticleDetailsSectionBuilder({
  articleContent,
  image,
  title,
  downloadableFile,
  downloadTextContent,
}: Pick<
  ISanityInsideTheMindArticlePageQueryResponse,
  | 'title'
  | 'image'
  | 'articleContent'
  | 'downloadableFile'
  | 'downloadTextContent'
>) {
  const generatedImage = generateImageUrl({
    source: image,
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
          className="h-auto w-full object-contain"
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
