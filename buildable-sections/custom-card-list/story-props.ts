import { IPortableTextComponent } from '@/components/portable-text/interface';
import { ICustomCardListSection } from './interface';
import { STORYBOOK_IMAGE_BLUR_DATA_URL } from '@/lib/types';
import { getRelativeURL } from '@/lib/routes';
import { ICustomLink } from '@/components/custom-link/interface';

const textContent: IPortableTextComponent['content'] = [
  {
    _key: 'fc08b2f96f43',
    _type: 'block',
    children: [
      {
        _key: '58963323481130',
        _type: 'span',
        marks: [],
        text: 'Potpourri articles',
      },
    ],
    markDefs: [],
    style: 'h2',
  },
  {
    _key: '37b234b942e3c',
    _type: 'block',
    children: [
      {
        _key: '972345eb636c',
        _type: 'span',
        marks: [],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
    markDefs: [],
    style: 'p1',
  },
];

const customCardListCommonProps: Pick<
  ICustomCardListSection,
  'textContent' | 'ctaLink'
> = {
  textContent: textContent,
  ctaLink: {
    colorScheme: 'primary',
    disabled: false,
    type: 'link',
    href: getRelativeURL('homePage'),
    children: 'View All',
    target: '_self',
  },
};

export const infoTypeCustomCardListProps: ICustomCardListSection = {
  ...customCardListCommonProps,
  type: 'info',
  infoItems: [
    {
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 1 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
      title: 'Digital Solution Group',
      description:
        'Benefit from our expertise in intelligently integrating systems and services with PLM.',
    },
    {
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 2 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
      title: 'Defining Solution Scape and ​Digital Fluidity',
      description:
        'No two retailers are alike. We tailor our approach to fit your unique mix of systems and processes.',
    },
    {
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 2 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
      title: 'Mind to Market Transformation:',
      description:
        ' Integrated systems empower teams to work together, accelerating product development from concept to consumer.',
    },
  ],
};

const commonLinkProps: ICustomLink = {
  disabled: false,
  href: getRelativeURL('homePage'),
};

export const linkTypeCustomCardListProps: ICustomCardListSection = {
  ...customCardListCommonProps,
  type: 'link',
  linkItems: [
    {
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 1 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
      title: 'Digital Solution Group',
      description:
        'Benefit from our expertise in intelligently integrating systems and services with PLM.',
      link: commonLinkProps,
    },
    {
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 2 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
      title: 'Defining Solution Scape and ​Digital Fluidity',
      description:
        'No two retailers are alike. We tailor our approach to fit your unique mix of systems and processes.',
      link: commonLinkProps,
    },
    {
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 2 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
      title: 'Mind to Market Transformation:',
      description:
        ' Integrated systems empower teams to work together, accelerating product development from concept to consumer.',
      link: commonLinkProps,
    },
  ],
};
