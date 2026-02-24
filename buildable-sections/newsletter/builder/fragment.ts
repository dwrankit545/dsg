import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { groq } from 'next-sanity';

export const SANITY_NEWSLETTER_SECTION_FRAGMENT = groq`
    _type == 'newsletterSection' => @-> {
        _type,
        title,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        formButtonLabel
    }
`;
