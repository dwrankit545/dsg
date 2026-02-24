import { SANITY_FEATURED_ARTICLE_CARD_QUERY_FRAGMENT } from '@/backend/sanity/fragments/featured-article';
import { SANITY_INSIDE_THE_MIND_ARTICLE_CARD_QUERY_FRAGMENT } from '@/backend/sanity/fragments/inside-the-mind-article';
import { SANITY_POTPOURRI_ARTICLE_CARD_FULL_QUERY_FRAGMENT } from '@/backend/sanity/fragments/potpourri-article';
import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { groq } from 'next-sanity';

export const SANITY_ARTICLES_LIST_SECTION_FRAGMENT = groq`
    _type == 'articlesListSection' => @-> {
        _type,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        ctaLink {
            ${SANITY_LINK_QUERY_FRAGMENT}
        },
        type,
        
        type == 'potpourri' => {
            potpourriArticles[] -> {
                ${SANITY_POTPOURRI_ARTICLE_CARD_FULL_QUERY_FRAGMENT}
            }
        },

        type == 'featured' => {
            featuredArticles[] -> {
                ${SANITY_FEATURED_ARTICLE_CARD_QUERY_FRAGMENT}
            }
        },

        type == 'inside-the-mind' => {
            insideTheMindArticles[] -> {
                ${SANITY_INSIDE_THE_MIND_ARTICLE_CARD_QUERY_FRAGMENT}
            }
        },
    }
`;
