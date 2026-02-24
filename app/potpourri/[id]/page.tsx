import { sanityFetch } from '@/backend/sanity/fetch';
import { draftMode } from 'next/headers';
import { LiveQuery } from 'next-sanity/preview/live-query';
import Preview from './builder/preview';
import PotpourriArticlePageBuilder from './builder';
import { Metadata } from 'next';
import {
  ISanityLimitedSeoData,
  ISanitySeoData,
} from '@/backend/sanity/fragments/root/seo/interface';
import { extractMetadata } from '@/lib/extract-metadata';
import {
  SANITY_ALL_POTPOURRI_ARTICLE_PAGES_QUERY,
  SANITY_POTPOURRI_ARTICLE_PAGE_QUERY,
  SANITY_POTPOURRI_ARTICLE_PAGE_SEO_QUERY,
} from './builder/query';
import { notFound } from 'next/navigation';
import { PageParams } from '@/lib/types';
import { ISanityPotpourriArticlePageQueryResponse } from './builder/interface';

const REVALIDATION_TIME = 3600;

export default async function Page({ params }: PageParams) {
  const sanityData =
    await sanityFetch<ISanityPotpourriArticlePageQueryResponse>({
      query: SANITY_POTPOURRI_ARTICLE_PAGE_QUERY,
      params: {
        slug: params.id,
      },
      revalidate: REVALIDATION_TIME,
    });

  if (!sanityData) {
    notFound();
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={SANITY_POTPOURRI_ARTICLE_PAGE_QUERY}
      initialData={sanityData}
      params={{
        slug: params.id,
      }}
      as={Preview}
      throwOnMissingProvider={true}
    >
      <PotpourriArticlePageBuilder data={sanityData} />
    </LiveQuery>
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const data = await sanityFetch<ISanitySeoData>({
    query: SANITY_POTPOURRI_ARTICLE_PAGE_SEO_QUERY,
    params: {
      slug: params.id,
    },
    revalidate: REVALIDATION_TIME,
  });

  return extractMetadata({ data, docType: 'potpourriArticle' });
}

// Get all page routes
export async function generateStaticParams() {
  const docs = await sanityFetch<ISanityLimitedSeoData[]>({
    query: SANITY_ALL_POTPOURRI_ARTICLE_PAGES_QUERY,
    disablePreview: true,
    revalidate: REVALIDATION_TIME,
  });

  if (docs) {
    return docs.map((doc) => ({
      slug: doc.slug,
    }));
  } else {
    notFound();
  }
}
