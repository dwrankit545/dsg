import { groq } from 'next-sanity';
import { SANITY_IMAGE_QUERY_FRAGMENT } from '../image';

export const SANITY_VIDEO_QUERY_FRAGMENT = groq`
	type,
	type == "file" => {
		"url": file.asset->url,
	},
	type == "embed" => {
		"url": embed
	},
	posterImage {
		${SANITY_IMAGE_QUERY_FRAGMENT}
	}
`;
