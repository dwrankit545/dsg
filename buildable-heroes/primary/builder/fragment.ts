import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';
import { SANITY_IMAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/media/image';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { groq } from 'next-sanity';

export const SANITY_PRIMARY_HERO_FRAGMENT = groq`
	_type == "primaryHeroSection" => {
		_type,
		textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
		ctaLink {
			${SANITY_LINK_QUERY_FRAGMENT}
		},
		image{
			${SANITY_IMAGE_QUERY_FRAGMENT}
		}
	}
`;
