import { SANITY_LINK_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/link';
import { SANITY_IMAGE_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/media/image';
import { SANITY_VIDEO_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/media/video';
import { SANITY_PORTABLE_TEXT_QUERY_FRAGMENT } from '@/backend/sanity/fragments/root/portable-text';
import { CUSTOM_CARD_QUERY_FRAGMENT } from '@/buildable-sections/custom-card-list/builder/fragment';
import { groq } from 'next-sanity';

export const SANITY_SOLUTIONS_LIST_SECTION_FRAGMENT = groq`
    _type == 'solutionsListSection' => @-> {
        _type,
        textContent[]{
            ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
        },
        solutions[] {
            mediaType,
            mediaType == "image" => {
                image {
                    ${SANITY_IMAGE_QUERY_FRAGMENT}
                }
            },
            mediaType == "video" => {
                video {
                    ${SANITY_VIDEO_QUERY_FRAGMENT}
                }
            },
            ctaLink {
                ${SANITY_LINK_QUERY_FRAGMENT}
            },
            textContent[]{
                ${SANITY_PORTABLE_TEXT_QUERY_FRAGMENT}
            },
            cardItems[] {
                ${CUSTOM_CARD_QUERY_FRAGMENT}
            }
        }
    }
`;
