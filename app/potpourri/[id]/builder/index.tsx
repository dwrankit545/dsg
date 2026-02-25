import { SchemaMarkupScript } from '@/components/schema-markup-script';
import { SectionBuilder } from '@/buildable-sections';
import { ISanityPotpourriArticlePageQueryResponse } from './interface';
import { ArticleDetailsSectionBuilder } from './article-details';

interface Props {
  data: ISanityPotpourriArticlePageQueryResponse;
}

export default function PotpourriArticlePageBuilder({ data }: Props) {
  const {
    schemaMarkupDefinitions,
    sections,
    articleContent,
    image,
    title,
    downloadableFile,
    downloadTextContent,
  } = data;

  return (
    <>
      {schemaMarkupDefinitions && (
        <SchemaMarkupScript schemaMarkups={schemaMarkupDefinitions} />
      )}

      <ArticleDetailsSectionBuilder
        articleContent={articleContent}
        image={image}
        title={title}
        downloadableFile={downloadableFile}
        downloadTextContent={downloadTextContent}
      />
      <SectionBuilder sections={sections} />
    </>
  );
}
