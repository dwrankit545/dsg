import { sanityFetch } from '@/backend/sanity/fetch';
import { SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/seo';
import { ISanityLimitedSeoData } from '@/backend/sanity/fragments/root/seo/interface';
import { getRelativeURL } from '@/lib/routes';
import { MetadataRoute } from 'next';
import { groq } from 'next-sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
  const baseUrl: string =
    (SITE_URL && `https://${SITE_URL}`) || 'http://localhost:3000';

  const sitemaps: MetadataRoute.Sitemap = [];

  // Home Page
  const SANITY_HOME_PAGE_QUERY = groq`
    *[_type == "homePage"][0]{
      ${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
    }
  `;

  const homePageData = await sanityFetch<ISanityLimitedSeoData>({
    query: SANITY_HOME_PAGE_QUERY,
  });

  if (homePageData && homePageData._updatedAt) {
    sitemaps.push({
      url: baseUrl,
      lastModified: homePageData._updatedAt,
    });
  }

  // Potpourri Page
  const SANITY_POTPOURRI_PAGE_QUERY = groq`
    *[_type == "potpourriPage"][0]{
      ${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
    }
  `;

  const potpourriPageData = await sanityFetch<ISanityLimitedSeoData>({
    query: SANITY_POTPOURRI_PAGE_QUERY,
  });

  if (potpourriPageData && potpourriPageData._updatedAt) {
    sitemaps.push({
      url: baseUrl,
      lastModified: potpourriPageData._updatedAt,
    });
  }

  // Featured Articles List Page
  const SANITY_ARTICLES_LIST_PAGE_QUERY = groq`
    *[_type == "featuredArticlesPage"][0]{
      ${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
    }
  `;

  const articlesListPageData = await sanityFetch<ISanityLimitedSeoData>({
    query: SANITY_ARTICLES_LIST_PAGE_QUERY,
  });

  if (articlesListPageData && articlesListPageData._updatedAt) {
    sitemaps.push({
      url: baseUrl,
      lastModified: articlesListPageData._updatedAt,
    });
  }

  // Inside the Mind Page
  const SANITY_INSIDE_THE_MIND_PAGE_QUERY = groq`
    *[_type == "insideTheMindPage"][0]{
      ${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
    }
  `;

  const insideTheMindPageData = await sanityFetch<ISanityLimitedSeoData>({
    query: SANITY_INSIDE_THE_MIND_PAGE_QUERY,
  });

  if (insideTheMindPageData && insideTheMindPageData._updatedAt) {
    sitemaps.push({
      url: baseUrl,
      lastModified: insideTheMindPageData._updatedAt,
    });
  }

  // General Page
  const SANITY_GENERAL_PAGES_QUERY = groq`
    *[_type == "generalPage"]{
        ${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
    }
  `;
  const generalPagesData = await sanityFetch<ISanityLimitedSeoData[]>({
    query: SANITY_GENERAL_PAGES_QUERY,
  });

  if (generalPagesData && generalPagesData.length > 0) {
    generalPagesData.forEach((page) => {
      sitemaps.push({
        url: baseUrl + getRelativeURL('generalPage', page.slug),
        lastModified: page._updatedAt,
      });
    });
  }

  // Potpourri Article Page
  const SANITY_POTPOURRI_ARTICLE_PAGES_QUERY = groq`
    *[_type == "potpourriArticle"]{
        ${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
    }
  `;
  const potpourriArticlePagesData = await sanityFetch<ISanityLimitedSeoData[]>({
    query: SANITY_POTPOURRI_ARTICLE_PAGES_QUERY,
  });

  if (potpourriArticlePagesData && potpourriArticlePagesData.length > 0) {
    potpourriArticlePagesData.forEach((page) => {
      sitemaps.push({
        url: baseUrl + getRelativeURL('potpourriArticle', page.slug),
        lastModified: page._updatedAt,
      });
    });
  }

  // Inside the Mind Article Page
  const SANITY_INSIDE_THE_MIND_ARTICLE_PAGES_QUERY = groq`
    *[_type == "insideTheMindArticle"]{
        ${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
    }
  `;
  const insideTheMindArticlePagesData = await sanityFetch<
    ISanityLimitedSeoData[]
  >({
    query: SANITY_INSIDE_THE_MIND_ARTICLE_PAGES_QUERY,
  });

  if (
    insideTheMindArticlePagesData &&
    insideTheMindArticlePagesData.length > 0
  ) {
    potpourriArticlePagesData.forEach((page) => {
      sitemaps.push({
        url: baseUrl + getRelativeURL('insideTheMindArticle', page.slug),
        lastModified: page._updatedAt,
      });
    });
  }

  return sitemaps;
}
