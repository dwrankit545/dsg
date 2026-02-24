import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';
import { groq } from 'next-sanity';

export const SANITY_FOOTER_QUERY_FRAGMENT = groq`
	mainLinks[]{
		${SANITY_LINK_QUERY_FRAGMENT}
	},
	address,
	copyrightText,
	socialLinks[] {
		platform,
		link
	},
	baseLinks[]{
		${SANITY_LINK_QUERY_FRAGMENT}
	},
`;
