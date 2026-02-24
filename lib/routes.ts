import { notFound } from 'next/navigation';

export const SANITY_PAGE_ROUTES = {
  homePage: '/',
  contactUsPage: '/contact-us',
  potpourriPage: '/potpourri',
  insideTheMindPage: '/inside-the-mind',
  featuredArticlesPage: '/featured-articles',
  generalPage: (slug: string) => `/${slug}`,
  potpourriArticle: (slug: string) => `/potpourri/${slug}`,
  insideTheMindArticle: (slug: string) => `/inside-the-mind/${slug}`,
};

/**
 * This function will return the route for a provided PAGE_ROUTE and
 * optional slug.
 * @param route_type keyof typeof PAGE_ROUTES
 * @returns
 */
export function getRelativeURL(
  route_type: keyof typeof SANITY_PAGE_ROUTES,
  slug: string = ''
) {
  switch (route_type) {
    case 'homePage':
    case 'contactUsPage':
    case 'potpourriPage':
    case 'insideTheMindPage':
    case 'featuredArticlesPage':
      return SANITY_PAGE_ROUTES[route_type];
    case 'potpourriArticle':
    case 'insideTheMindArticle':
    case 'generalPage':
      return SANITY_PAGE_ROUTES[route_type](slug);
    default:
      notFound();
  }
}
