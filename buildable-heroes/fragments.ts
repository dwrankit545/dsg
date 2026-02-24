import { groq } from 'next-sanity';
import { SANITY_PRIMARY_HERO_FRAGMENT } from './primary/builder/fragment';
import { SANITY_SECONDARY_HERO_FRAGMENT } from './secondary/builder/fragment';

export const SANITY_HERO_QUERY_FRAGMENT = groq`
	${SANITY_PRIMARY_HERO_FRAGMENT},
	${SANITY_SECONDARY_HERO_FRAGMENT}
`;
