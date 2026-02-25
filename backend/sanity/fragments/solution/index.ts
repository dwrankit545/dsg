import { groq } from 'next-sanity';
import { SANITY_IMAGE_QUERY_FRAGMENT } from '../root/media/image';
import { SANITY_LINK_QUERY_FRAGMENT } from '../root/link';

export const SANITY_SOLUTION_CARD_QUERY_FRAGMENT = groq`
    "title": textComponent.title,
    "description": textComponent.description,
    image {
        ${SANITY_IMAGE_QUERY_FRAGMENT}
    },
    ctaLink {
        ${SANITY_LINK_QUERY_FRAGMENT}
    }
`;
