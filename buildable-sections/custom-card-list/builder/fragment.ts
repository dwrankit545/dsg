import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';
import { SANITY_IMAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/media/image';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { groq } from 'next-sanity';

export const CUSTOM_CARD_QUERY_FRAGMENT = groq`
    "title": textComponent.title,
    "description": textComponent.description,
    image {
        ${SANITY_IMAGE_QUERY_FRAGMENT}
    },
    ctaLink {
        ${SANITY_LINK_QUERY_FRAGMENT}
    }
 
`;

export const SANITY_CUSTOM_CARD_LIST_SECTION_FRAGMENT = groq`
    _type == 'customListSection' => @-> {
        _type,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        ctaLink {
            ${SANITY_LINK_QUERY_FRAGMENT}
        },
        type,
        type == "info" => {
            infoItems[] {
                ${CUSTOM_CARD_QUERY_FRAGMENT}
            }
        },
        type == "link" => {
            linkItems[] {
                ${CUSTOM_CARD_QUERY_FRAGMENT}
            }
        }

    }
`;
