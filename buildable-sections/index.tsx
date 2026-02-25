import dynamic from 'next/dynamic';
import { ISanitySections } from './interface';
const RichTextSectionBuilder = dynamic(() =>
  import('./rich-text/builder').then((mod) => mod.RichTextSectionBuilder)
);

const ArticlesListSectionBuilder = dynamic(() =>
  import('./articles-list/builder').then(
    (mod) => mod.ArticlesListSectionBuilder
  )
);

const CustomCardListSectionBuilder = dynamic(() =>
  import('./custom-card-list/builder').then(
    (mod) => mod.CustomCardListSectionBuilder
  )
);

const SolutionsListSectionBuilder = dynamic(() =>
  import('./solutions-list/builder').then(
    (mod) => mod.SolutionsListSectionBuilder
  )
);

const SecondarySliderSectionBuilder = dynamic(() =>
  import('./secondary-slider/builder').then(
    (mod) => mod.SecondarySliderSectionBuilder
  )
);

const PrimarySliderSectionBuilder = dynamic(() =>
  import('./primary-slider/builder').then(
    (mod) => mod.PrimarySliderSectionBuilder
  )
);

const CtaSectionBuilder = dynamic(() =>
  import('./cta/builder').then((mod) => mod.CtaSectionBuilder)
);

const NewsletterSectionBuilder = dynamic(() =>
  import('./newsletter/builder').then((mod) => mod.NewsletterSectionBuilder)
);

const BulletListSectionBuilder = dynamic(() =>
  import('./bullet-list/builder').then((mod) => mod.BulletListSectionBuilder)
);

interface Props {
  sections?: ISanitySections;
}

export function SectionBuilder({ sections }: Props) {
  if (sections && sections.length > 0) {
    return (
      <>
        {sections.map((section, index) => {
          switch (section._type) {
            case 'richTextSection': {
              return <RichTextSectionBuilder {...section} key={index} />;
            }
            case 'articlesListSection': {
              return <ArticlesListSectionBuilder {...section} key={index} />;
            }
            case 'customListSection': {
              return <CustomCardListSectionBuilder {...section} key={index} />;
            }
            case 'solutionsListSection': {
              return <SolutionsListSectionBuilder {...section} key={index} />;
            }
            case 'secondarySliderSection': {
              return <SecondarySliderSectionBuilder {...section} key={index} />;
            }
            case 'primarySliderSection': {
              return <PrimarySliderSectionBuilder {...section} key={index} />;
            }
            case 'ctaSection': {
              return <CtaSectionBuilder {...section} key={index} />;
            }
            case 'newsletterSection': {
              return <NewsletterSectionBuilder {...section} key={index} />;
            }
            case 'bulletListSection': {
              return <BulletListSectionBuilder {...section} key={index} />;
            }
            default:
              return (
                <section key={'default' + index}>
                  <div className="flex min-h-screen items-center justify-center">
                    <div className="bg-col-6  text-col-1 rounded-10 mx-auto max-w-[1200px] px-6 py-10">
                      <h2 className="text-center text-2xl font-bold xl:text-4xl ">
                        Section builder not yet implemented!
                      </h2>
                    </div>
                  </div>
                </section>
              );
          }
        })}
      </>
    );
  }

  return <></>;
}
