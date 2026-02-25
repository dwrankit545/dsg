import { SANITY_IMAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/media/image';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { groq } from 'next-sanity';

const SANITY_PRIMARY_CAROUSEL_CARD_FRAGMENT = groq`
    textComponent {
        title,
        overline,
        description
    },
    image {
        ${SANITY_IMAGE_QUERY_FRAGMENT}
    }
`;
export const SANITY_PRIMARY_SLIDER_SECTION_FRAGMENT = groq`
    _type == 'primarySliderSection' => @-> {
        _type,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        items[] {
            ${SANITY_PRIMARY_CAROUSEL_CARD_FRAGMENT}
        }
    }
`;
