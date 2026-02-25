import dynamic from 'next/dynamic';
import { ReactNode, Children } from 'react';
import clsx from 'clsx';
import { PortableTextComponents } from '@portabletext/react';
import {
  ISanityPortableTextImage,
  ISanityPortableTextVideo,
} from '@/backend/sanity/fragments/root/portable-text/interface';
import { ISanityCode } from '@/backend/sanity/fragments/root/common';
import { extractSanityLink } from '@/lib/extract-sanity-link';
import { generateImageUrl } from '@/backend/sanity/image-builder';
import { CustomLink } from '../custom-link';
import { Typography } from '../typography';
import Image from 'next/image';
import { VideoPlayer } from '../video-player';
import InlineImage, {
  ISanityPortableTextInlineImage,
} from './sub-components/inline-image';
import QuoteText, {
  ISanityPortableTextQuoteText,
} from './sub-components/quote-text';
const CodeElement = dynamic(() => import('./sub-components/code'));

/*
  In order to render portable text we call PortableText component and pass our api data as value
  and our component rendering instructions as components prop.

  <PortableText
    value={PortableTextSample}
    components={myPortableTextComponents}
  />

    Relevant links:
    https://portabletext.github.io/types/ (types)
    https://www.npmjs.com/package/@portabletext/react (components)
    https://www.npmjs.com/package/@portabletext/react

*/
export const portableTextComponents: PortableTextComponents = {
  /**
   * Blocks are top level objects in a portable text array. We look at the
   * style attribute.
   */
  block: {
    h1: ({ children }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return <Typography size="h1">{children}</Typography>;
    },
    h2: ({ children }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return <Typography size="h2">{children}</Typography>;
    },
    h3: ({ children }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return <Typography size="h3">{children}</Typography>;
    },
    sub: ({ children }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return <Typography size="s1">{children}</Typography>;
    },
    p1: ({ children }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return <Typography size="p1">{children}</Typography>;
    },
    p2: ({ children }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return <Typography size="p2">{children}</Typography>;
    },
  },
  /**
   * Marks are inline stylings (bold, emphasis, italic) for text and links.
   */
  marks: {
    link: ({ value, children }) => {
      const link = extractSanityLink(value);

      if (link && children) {
        return (
          <CustomLink
            className={
              'text-sm font-bold text-primary-light no-underline lg:text-base'
            }
            {...link}
            label={children.toString()}
          />
        );
      } else {
        return <></>;
      }
    },
  },
  list: {
    bullet: ({ children, value: { level } }) => {
      const listStyleClasses = ['list-[square]', 'list-disc', 'list-[circle]'];

      const bulletListClasses = clsx('ml-6 md:ml-7 xl:ml-8 list-outside', [
        listStyleClasses[level % listStyleClasses.length],
      ]);

      return <ul className={bulletListClasses}>{children}</ul>;
    },
    number: ({ children, value: { level } }) => {
      const listStyleClasses = [
        'list-[lower-roman]',
        'list-decimal',
        'list-[lower-alpha]',
      ];

      const numberListClasses = clsx('ml-6 md:ml-7 xl:ml-8 list-outside', [
        listStyleClasses[level % listStyleClasses.length],
        'group-[.custom-list-style]:list-none group-[.custom-list-style]:flex group-[.custom-list-style]:flex-col',
      ]);

      return <ol className={numberListClasses}>{children}</ol>;
    },
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-item-style group-[.custom-list-style]:relative group-[.custom-list-style]:py-[0.625rem] group-[.custom-list-style]:pl-[0.375rem] group-[.custom-list-style]:before:absolute group-[.custom-list-style]:before:-left-[1rem] group-[.custom-list-style]:before:-top-[-0.875rem] group-[.custom-list-style]:before:h-[1rem] group-[.custom-list-style]:before:w-[1rem] group-[.custom-list-style]:before:rounded-full group-[.gradient-background]:before:bg-white group-[.custom-list-style]:before:bg-gradient-1 group-[.custom-list-style]:lg:pl-[1.5625rem] lg:group-[.custom-list-style]:before:-left-[1.8125rem] lg:group-[.custom-list-style]:before:-top-[-0.625rem] lg:group-[.custom-list-style]:before:h-[1.625rem] lg:group-[.custom-list-style]:before:w-[1.625rem]">
        {children}
      </li>
    ),
    number: ({ children }) => <li>{children}</li>,
  },
  /**
   * Custom blocks in rich text.
   */
  types: {
    portableTextImage: ({ value }) => {
      const portablTextImage = value as ISanityPortableTextImage;

      const image = generateImageUrl({
        source: portablTextImage,
        useCdn: false,
      });

      if (image) {
        return (
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            placeholder="blur"
            blurDataURL={image.lqip}
            alt={image.alt || 'Image'}
            className="mx-auto"
          />
        );
      } else {
        return <></>;
      }
    },
    portableTextVideo: ({ value }) => {
      const portablTextVideo = value as ISanityPortableTextVideo;

      if (portablTextVideo.url) {
        return (
          <VideoPlayer
            url={portablTextVideo.url}
            width={'100%'}
            height={'auto'}
          />
        );
      }
    },
    inlineImage: ({ value }) => {
      const portablTextInlineImage = value as ISanityPortableTextInlineImage;

      const image = generateImageUrl({
        source: portablTextInlineImage.inlineImage,
        useCdn: false,
      });

      if (image) {
        return <InlineImage {...portablTextInlineImage} inlineImage={image} />;
      } else {
        return <></>;
      }
    },
    quoteText: ({ value }) => {
      const { textAlignment, textContent } =
        value as ISanityPortableTextQuoteText;

      if (textContent) {
        return (
          <QuoteText
            _type="quoteText"
            textAlignment={textAlignment}
            textContent={textContent}
          />
        );
      } else {
        return <></>;
      }
    },
    code: ({ value }) => {
      const code: ISanityCode = value;

      return <CodeElement code={code} />;
    },
    iframe: ({ value }) => {
      const iframeValue = value as { embedLink: string };

      return (
        <iframe
          loading={'eager'}
          src={iframeValue.embedLink}
          className="aspect-video"
          width={'100%'}
        />
      );
    },
  },
};

/**
 * This function will return true if a block contains one child
 * with an empty string.
 *
 * This function is used to render <br/> tags.
 * @method isEmptyBlock
 * @param {ReactNode} children
 * @returns boolean
 */
const isEmptyBlock = (children: ReactNode) => {
  return Children.count(children) == 1 && children?.toString() == '';
};
