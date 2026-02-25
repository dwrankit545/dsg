import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { groq } from 'next-sanity';

export const SANITY_CTA_SECTION_FRAGMENT = groq`
    _type == 'ctaSection' => @-> {
        _type,
        title,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        ctaLink {
            ${SANITY_LINK_QUERY_FRAGMENT}
        }
    }
`;
