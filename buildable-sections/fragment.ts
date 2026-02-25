import { groq } from 'next-sanity';
import { SANITY_RICH_TEXT_SECTION_FRAGMENT } from './rich-text/builder/fragment';
import { SANITY_ARTICLES_LIST_SECTION_FRAGMENT } from './articles-list/builder/fragment';
import { SANITY_CUSTOM_CARD_LIST_SECTION_FRAGMENT } from './custom-card-list/builder/fragment';
import { SANITY_SOLUTIONS_LIST_SECTION_FRAGMENT } from './solutions-list/builder/fragment';
import { SANITY_SECONDARY_SLIDER_SECTION_FRAGMENT } from './secondary-slider/builder/fragment';
import { SANITY_PRIMARY_SLIDER_SECTION_FRAGMENT } from './primary-slider/builder/fragment';
import { SANITY_CTA_SECTION_FRAGMENT } from './cta/builder/fragment';
import { SANITY_NEWSLETTER_SECTION_FRAGMENT } from './newsletter/builder/fragment';
import { SANITY_BULLET_LIST_SECTION_FRAGMENT } from './bullet-list/builder/fragment';

export const SANITY_PAGE_SECTIONS_QUERY_FRAGMENT = groq`
	${SANITY_RICH_TEXT_SECTION_FRAGMENT},
	${SANITY_ARTICLES_LIST_SECTION_FRAGMENT},
	${SANITY_CUSTOM_CARD_LIST_SECTION_FRAGMENT},
	${SANITY_SOLUTIONS_LIST_SECTION_FRAGMENT},
	${SANITY_SECONDARY_SLIDER_SECTION_FRAGMENT},
	${SANITY_PRIMARY_SLIDER_SECTION_FRAGMENT},
	${SANITY_CTA_SECTION_FRAGMENT},
	${SANITY_NEWSLETTER_SECTION_FRAGMENT},
	${SANITY_BULLET_LIST_SECTION_FRAGMENT}
`;
