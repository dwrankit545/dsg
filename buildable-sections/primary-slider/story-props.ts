import { STORYBOOK_IMAGE_BLUR_DATA_URL } from '@/lib/types';
import { IPrimarySliderSection } from './interface';
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

export const sectionProps: IPrimarySliderSection = {
  textContent: textContent,
  items: [
    {
      textComponent: {
        title: 'Mind to Market Integration',
        overline: 'HOW WE DO IT',
        description:
          'From the first spark of an idea to a tangible product on the shelf, Digital Fluidity ensures data flows seamlessly, connecting each phase of the product life cycle.',
      },
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 1 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
    },
    {
      textComponent: {
        title: 'Mind to Market Integration',
        overline: "HOW WE DON'T DO IT",
        description:
          'From the first spark of an idea to a tangible product on the shelf, Digital Fluidity ensures data flows seamlessly, connecting each phase of the product life cycle.',
      },
      image: {
        src: 'https://cdn.sanity.io/images/3697m8ez/development/163e1b146956b95582dcfb001047630ef3c8384f-500x424.png?fit=max&w=424&h=424',
        alt: 'Article 1 Image',
        lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
      },
    },
    {
      textComponent: {
        title: 'Mind to Market Integration',
        overline: 'HOW WE SHOULD DO IT',
        description:
          'From the first spark of an idea to a tangible product on the shelf, Digital Fluidity ensures data flows seamlessly, connecting each phase of the product life cycle.',
      },
    },
  ],
};
