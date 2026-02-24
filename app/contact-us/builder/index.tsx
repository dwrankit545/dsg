import { SchemaMarkupScript } from '@/components/schema-markup-script';
import { HeroBuilder } from '@/buildable-heroes';
import { SectionBuilder } from '@/buildable-sections';
import { ISanityContactUsPageQueryResponse } from './interface';
import { ContactFormSection } from './contact-section';

interface Props {
  data: ISanityContactUsPageQueryResponse;
}

export default function ContactUsPageBuilder({ data }: Props) {
  const { hero, schemaMarkupDefinitions, sections, contactInfo } = data;

  return (
    <>
      {schemaMarkupDefinitions && (
        <SchemaMarkupScript schemaMarkups={schemaMarkupDefinitions} />
      )}
      <HeroBuilder hero={hero} />
      <ContactFormSection contactInfo={contactInfo} />
      <SectionBuilder sections={sections} />
    </>
  );
}
