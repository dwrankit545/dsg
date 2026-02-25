import { ISecondaryCard, SECONDARY_CARD_IMAGE_DIMENSIONS } from './interface';
import Image from 'next/image';
import { Typography } from '@/components/typography';
import { renderItalicText } from '@/lib/render-italic-text';

/**
 * Secondary Card component.
 *
 * @component
 * @param ISecondaryCard - Properties for configuring the secondary card.
 * @returns JSX.Element - Rendered SecondaryCard component.
 */
export const SecondaryCard = ({
  image,
  title,
  description,
}: ISecondaryCard) => {
  return (
    <article className="h-full overflow-hidden rounded-b-16 rounded-t-8 border border-b-4 border-gray-lighter bg-white">
      <div
        className={
          'flex h-full flex-col items-center px-[0.5rem] py-[1.625rem]'
        }
      >
        <Image
          src={image.src}
          alt={image.alt || title}
          height={SECONDARY_CARD_IMAGE_DIMENSIONS.height}
          width={SECONDARY_CARD_IMAGE_DIMENSIONS.width}
          sizes={`(min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1400px) 25vw, 100vw`}
          className="object-contain"
        />

        <Typography
          size="s1"
          className="min-h-[2.375rem] items-center break-words pt-[1.25rem] text-center md:min-h-[4rem]"
        >
          {renderItalicText(title)}
        </Typography>
        {description && (
          <Typography
            size="p1"
            className="min-h-[3rem] self-start pt-3 text-center md:min-h-[3.625rem]"
          >
            {renderItalicText(description)}
          </Typography>
        )}
      </div>
    </article>
  );
};
