import { SANITY_POTPOURRI_ARTICLE_CARD_FULL_QUERY_FRAGMENT } from '@/backend/sanity/fragments/potpourri-article';
import { SANITY_COMMON_PAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/page';
import { SANITY_SEO_DATA_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/seo';
import groq from 'groq';

export const SANITY_POTPOURRI_PAGE_QUERY = groq`
	*[_type == "potpourriPage"][0]{
		${SANITY_COMMON_PAGE_QUERY_FRAGMENT},
		"articles": *[ _type == "potpourriArticle" ] | order(_createdAt desc) {
			${SANITY_POTPOURRI_ARTICLE_CARD_FULL_QUERY_FRAGMENT}
		}
	}
`;

export const SANITY_POTPOURRI_PAGE_SEO_QUERY = groq`
	*[_type == "potpourriPage"][0]{
		${SANITY_SEO_DATA_QUERY_FRAGMENT}
	}
`;
