import { STORYBOOK_IMAGE_BLUR_DATA_URL } from '@/lib/types';
import { ISecondaryHero } from './interface';
import { IPortableTextComponent } from '@/components/portable-text/interface';

const textContent: IPortableTextComponent['content'] = [
  {
    _key: 'fc08b2f96f32',
    _type: 'block',
    children: [
      {
        _key: '589633de81130',
        _type: 'span',
        marks: [],
        text: 'About Digital Solution Group',
      },
    ],
    markDefs: [],
    style: 'h1',
  },
];

export const heroPropsWithImage: ISecondaryHero = {
  textContent: textContent,
  image: {
    src: 'https://cdn.sanity.io/images/3697m8ez/development/6f38ad7f885ffcd1745b2fffe0dbd37eddf018b1-1440x340.png?fit=max&w=1440&h=400',
    alt: 'Hero Image',
    lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
  },
};

export const heroPropsWithoutImage: ISecondaryHero = {
  textContent: textContent,
};
