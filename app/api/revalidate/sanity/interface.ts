export type ISanityRevalidatePayload =
  | ISanityRevalidatePayloadWithoutSlug
  | ISanityRevalidatePayloadWithSlug;

interface ISanityRevalidatePayloadWithoutSlug {
  _id: string;
  _type:
    | 'globalSettings'
    | 'header'
    | 'footer'
    // Fixed Pages
    | 'homePage'
    | 'potpourriPage'
    | 'featuredArticlesPage'
    | 'contactUsPage'
    | 'insideTheMindPage'
    // Hero Sections
    | 'primaryHeroSection'
    | 'secondaryHeroSection'
    // Page Sections
    | 'articlesListSection'
    | 'customListSection'
    | 'solutionsListSection'
    | 'secondarySliderSection'
    | 'richTextSection'
    | 'primarySliderSection'
    | 'ctaSection'
    | 'newsletterSection'
    | 'bulletListSection';
}

/**
 * The api might not contain slug data for a page
 * that is being newly created.
 *
 * For safety we should hanlde this case.
 */
interface ISanityRevalidatePayloadWithSlug {
  _id: string;
  _type: 'generalPage' | 'potpourriArticle' | 'insideTheMindArticle';
  slug?: string;
}
