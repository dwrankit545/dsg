import { sanityFetch } from '@/backend/sanity/fetch';
import {
  SANITY_INSIDE_THE_MIND_PAGE_QUERY,
  SANITY_INSIDE_THE_MIND_PAGE_SEO_QUERY,
} from './builder/query';
import { draftMode } from 'next/headers';
import { LiveQuery } from 'next-sanity/preview/live-query';
import Preview from './builder/preview';
import InsideTheMindPageBuilder from './builder';
import { Metadata } from 'next';
import { ISanitySeoData } from '@/backend/sanity/fragments/root/seo/interface';
import { extractMetadata } from '@/lib/extract-metadata';
import { ISanityInsideTheMindPageQueryResponse } from './builder/interface';

const REVALIDATION_TIME = 3600;

export default async function Page() {
  const sanityData = await sanityFetch<ISanityInsideTheMindPageQueryResponse>({
    query: SANITY_INSIDE_THE_MIND_PAGE_QUERY,
    revalidate: REVALIDATION_TIME,
  });

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={SANITY_INSIDE_THE_MIND_PAGE_QUERY}
      initialData={sanityData}
      as={Preview}
      throwOnMissingProvider={true}
    >
      <InsideTheMindPageBuilder data={sanityData} />
    </LiveQuery>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<ISanitySeoData>({
    query: SANITY_INSIDE_THE_MIND_PAGE_SEO_QUERY,
    revalidate: REVALIDATION_TIME,
  });

  return extractMetadata({ data, docType: 'insideTheMindPage' });
}
