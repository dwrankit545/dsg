import { SANITY_COMMON_PAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/page';
import { SANITY_SEO_DATA_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/seo';
import groq from 'groq';

export const SANITY_CONTACT_US_PAGE_QUERY = groq`
	*[_type == "contactUsPage"][0]{
		${SANITY_COMMON_PAGE_QUERY_FRAGMENT},
		contactInfo {
			phone,
			email,
			address,
		}
	}
`;

export const SANITY_CONTACT_US_PAGE_SEO_QUERY = groq`
	*[_type == "contactUsPage"][0]{
		${SANITY_SEO_DATA_QUERY_FRAGMENT}
	}
`;
