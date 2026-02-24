import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';
import { groq } from 'next-sanity';

export const SANITY_HEADER_QUERY_FRAGMENT = groq`
	menuLinks[]{
		_type == "megaMenu" => {
      title,
      links[] {
        ${SANITY_LINK_QUERY_FRAGMENT}
      }
    },
    _type == "menuLink" => {
      ${SANITY_LINK_QUERY_FRAGMENT}
    }
	},
	ctaButton {
		${SANITY_LINK_QUERY_FRAGMENT}
	}
`;
