import { SANITY_IMAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/media/image';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { groq } from 'next-sanity';

export const SANITY_BULLET_LIST_SECTION_FRAGMENT = groq`
    _type == 'bulletListSection' => @-> {
        _type,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        hasImage == true => {
            image {
                ${SANITY_IMAGE_QUERY_FRAGMENT}
            },
            imagePosition
        }
    }
`;
