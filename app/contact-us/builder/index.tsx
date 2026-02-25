import { SchemaMarkupScript } from '@/components/schema-markup-script';
import { HeroBuilder } from '@/buildable-heroes';
import { SectionBuilder } from '@/buildable-sections';
import { ISanityContactUsPageQueryResponse } from './interface';

interface Props {
  data: ISanityContactUsPageQueryResponse;
}

export default function ContactUsPageBuilder({ data }: Props) {
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
