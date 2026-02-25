import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { SANITY_POTPOURRI_ARTICLE_CARD_PARTIAL_QUERY_FRAGMENT } from '@/backend/sanity/fragments/potpourri-article';
import { groq } from 'next-sanity';
import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';

export const SANITY_SECONDARY_SLIDER_SECTION_FRAGMENT = groq`
    _type == 'secondarySliderSection' => @-> {
        _type,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        ctaLink {
            ${SANITY_LINK_QUERY_FRAGMENT}
        },
        potpourriArticles[]-> {
            ${SANITY_POTPOURRI_ARTICLE_CARD_PARTIAL_QUERY_FRAGMENT}
        }
    }
`;
