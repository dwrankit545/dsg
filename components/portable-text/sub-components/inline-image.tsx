import { ISanityLimitedPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import Image from 'next/image';
import { PortableTextComponent } from '..';
import { IImage } from '@/lib/types';
import { fallbackImage } from '@/lib/fallback-image';

export interface ISanityPortableTextInlineImage {
  _type: 'inlineImage';
  inlineImage: IImage;
  imagePosition: 'left' | 'right';
  inlineTextContent: ISanityLimitedPortableText;
  markDefs?: undefined | [] | null;
}

export default function InlineImage({
  imagePosition,
  inlineImage,
  inlineTextContent,
}: ISanityPortableTextInlineImage) {
  return (
    <div className="grid grid-cols-1 items-center gap-x-[3.125rem] gap-y-[1.25rem] md:grid-cols-5">
      <Image
        src={inlineImage.src}
        width={inlineImage.width}
        height={inlineImage.height}
        placeholder="blur"
        blurDataURL={inlineImage.lqip || fallbackImage.lqip}
        alt={inlineImage.alt || 'Image'}
        className={`col-span-2 ${imagePosition == 'left' ? 'order-1' : 'order-2'}`}
      />
      <div
        className={`col-span-3 ${imagePosition == 'left' ? 'order-2' : 'order-1'}`}
      >
        <PortableTextComponent content={inlineTextContent} />
      </div>
    </div>
  );
}
