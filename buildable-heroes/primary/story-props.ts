import { STORYBOOK_IMAGE_BLUR_DATA_URL } from '@/lib/types';
import { IPrimaryHero } from './interface';
import { IPortableTextComponent } from '@/components/portable-text/interface';
import { getRelativeURL } from '@/lib/routes';

const textContent: IPortableTextComponent['content'] = [
  {
    _key: 'fc08b2f96f32',
    _type: 'block',
    children: [
      {
        _key: '589633de81130',
        _type: 'span',
        marks: [],
        text: 'Extend the Value of PLM from Mind to Market',
      },
    ],
    markDefs: [],
    style: 'h1',
  },
  {
    _key: '37b4ab942e3c',
    _type: 'block',
    children: [
      {
        _key: '97d755eb636c',
        _type: 'span',
        marks: [],
        text: 'Create Digital Fluidity Throughout an Enterprise’s SolutionScape',
      },
    ],
    markDefs: [],
    style: 'sub',
  },
];

export const heroPropsWithImage: IPrimaryHero = {
  textContent: textContent,
  ctaLink: {
    colorScheme: 'primary',
    disabled: false,
    type: 'link',
    href: getRelativeURL('homePage'),
    children: 'Schedule a Consultation',
    target: '_self',
  },
  image: {
    src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
    alt: 'Home Hero Image',
    lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
  },
};

export const heroPropsWithoutImage: IPrimaryHero = {
  textContent: textContent,
};
