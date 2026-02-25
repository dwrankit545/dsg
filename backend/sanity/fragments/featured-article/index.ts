import { groq } from 'next-sanity';
import { SANITY_LINK_QUERY_FRAGMENT } from '../root/link';

export const SANITY_FEATURED_ARTICLE_CARD_QUERY_FRAGMENT = groq`
    title,
    authorInfo,
    sourceLink {
        ${SANITY_LINK_QUERY_FRAGMENT}
    }
`;
