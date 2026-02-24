import { SchemaMarkupScript } from '@/components/schema-markup-script';
import { HeroBuilder } from '@/buildable-heroes';
import { SectionBuilder } from '@/buildable-sections';
import { ISanityPotpourriPageQueryResponse } from './interface';
import { ArticlesListSectionBuilder } from '@/buildable-sections/articles-list/builder';

interface Props {
  data: ISanityPotpourriPageQueryResponse;
}

export default function PotpourriPageBuilder({ data }: Props) {
  const { hero, schemaMarkupDefinitions, sections, articles } = data;

  return (
    <>
      {schemaMarkupDefinitions && (
        <SchemaMarkupScript schemaMarkups={schemaMarkupDefinitions} />
      )}
      <HeroBuilder hero={hero} />
      {articles && articles.length > 0 && (
        <ArticlesListSectionBuilder
          type="potpourri"
          potpourriArticles={articles}
          _type={'articlesListSection'}
          displaySearchBar={true}
        />
      )}
      <SectionBuilder sections={sections} />
    </>
  );
}
