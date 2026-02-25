import { SchemaMarkupScript } from '@/components/schema-markup-script';
import { HeroBuilder } from '@/buildable-heroes';
import { SectionBuilder } from '@/buildable-sections';
import { ISanityInsideTheMindPageQueryResponse } from './interface';

interface Props {
  data: ISanityInsideTheMindPageQueryResponse;
}

export default function InsideTheMindPageBuilder({ data }: Props) {
  const { hero, schemaMarkupDefinitions, sections } = data;

  return (
    <>
      {schemaMarkupDefinitions && (
        <SchemaMarkupScript schemaMarkups={schemaMarkupDefinitions} />
      )}
      <HeroBuilder hero={hero} />
      <SectionBuilder sections={sections} />
    </>
  );
}
