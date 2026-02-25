import { SANITY_IMAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/media/image';
import { SANITY_COMMON_PAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/page';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import {
  SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT,
  SANITY_SEO_DATA_QUERY_FRAGMENT,
} from '@/backend/sanity/fragments/root/seo';
import groq from 'groq';

export const SANITY_POTPOURRI_ARTICLE_PAGE_QUERY = groq`
	*[_type == "potpourriArticle" && seo.slug.current == $slug][0]{
		${SANITY_COMMON_PAGE_QUERY_FRAGMENT},
		articleContent[]{
			${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
		},
		title,
		image {
			${SANITY_IMAGE_QUERY_FRAGMENT}
		},
		downloadTextContent[] {
			${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
		},
		downloadableFile {
			label,
			"downloadLink": file.asset->url
		}
	}
`;

export const SANITY_POTPOURRI_ARTICLE_PAGE_SEO_QUERY = groq`
	*[_type == "potpourriArticle" && seo.slug.current == $slug][0]{
		${SANITY_SEO_DATA_QUERY_FRAGMENT}
	}
`;

export const SANITY_ALL_POTPOURRI_ARTICLE_PAGES_QUERY = groq`
	*[_type == "potpourriArticle"]{
		${SANITY_LIMITED_SEO_DATA_QUERY_FRAGMENT}
	}
`;
