import { SANITY_COMMON_PAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/page';
import { SANITY_SEO_DATA_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/seo';
import groq from 'groq';

export const SANITY_INSIDE_THE_MIND_PAGE_QUERY = groq`
	*[_type == "insideTheMindPage"][0]{
		${SANITY_COMMON_PAGE_QUERY_FRAGMENT}
	}
`;

export const SANITY_INSIDE_THE_MIND_PAGE_SEO_QUERY = groq`
	*[_type == "insideTheMindPage"][0]{
		${SANITY_SEO_DATA_QUERY_FRAGMENT}
	}
`;
