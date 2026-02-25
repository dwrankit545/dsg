import { IPortableTextComponent } from '@/components/portable-text/interface';
import { ISolutionsListSection } from './interface';
import { getRelativeURL } from '@/lib/routes';
import { STORYBOOK_IMAGE_BLUR_DATA_URL } from '@/lib/types';

const textContent: IPortableTextComponent['content'] = [
  {
    _key: 'fc08b2f96f32',
    _type: 'block',
    children: [
      {
        _key: '589633de81130',
        _type: 'span',
        marks: [],
        text: 'Potpourri articles',
      },
    ],
    markDefs: [],
    style: 'h2',
  },
  {
    _key: '37b4ab942e3c',
    _type: 'block',
    children: [
      {
        _key: '97d755eb636c',
        _type: 'span',
        marks: [],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
    markDefs: [],
    style: 'p1',
  },
];

export const sectionProps: ISolutionsListSection = {
  textContent: textContent,
  solutions: [
    {
      mediaType: 'image',
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 1 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
      ctaLink: {
        colorScheme: 'primary',
        disabled: false,
        type: 'link',
        href: getRelativeURL('homePage'),
        children: 'See Our Solution',
        target: '_self',
      },
    },
  ],
};
