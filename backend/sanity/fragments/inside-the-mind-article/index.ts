import { groq } from 'next-sanity';
import { SANITY_IMAGE_QUERY_FRAGMENT } from '../root/media/image';

export const SANITY_INSIDE_THE_MIND_ARTICLE_CARD_QUERY_FRAGMENT = groq`
    "slug": seo.slug.current,
    title,
    image {
        ${SANITY_IMAGE_QUERY_FRAGMENT}
    },
    "description": array::join(string::split((pt::text(articleContent)), "")[0..500], "")
`;
