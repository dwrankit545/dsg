import Image from 'next/image';
import Link from 'next/link';
import { IPrimaryCard, PRIMARY_CARD_IMAGE_DIMENSIONS } from './interface';
import { Typography } from '../../typography';
import { renderItalicText } from '@/lib/render-italic-text';

/**
 * Primary Card component.
 *
 * @component
 * @param IPrimaryCard - Properties for configuring the primary card.
 * @returns JSX.Element - Rendered PrimaryCard component.
 */
export const PrimaryCard = ({
  image,
  title,
  link,
  description,
}: IPrimaryCard) => {
  return (
    <Link {...link} aria-label={link.ariaLabel || title} target="_blank">
      <article className="group h-full w-fit overflow-hidden rounded-20 border border-gray-lighter transition-all duration-300 ease-in-out will-change-transform hover:translate-y-[-0.5rem] hover:border-primary-light ">
        <Image
          src={image.src}
          alt={image.alt ? image.alt : title}
          height={PRIMARY_CARD_IMAGE_DIMENSIONS.height}
          width={PRIMARY_CARD_IMAGE_DIMENSIONS.width}
          sizes={`(min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1400px) 25vw, 100vw`}
          className="object-contain"
        />
        <div className="h-full p-5">
          <Typography
            size="s1"
            className="line-clamp-2 min-h-[2.375rem] text-black transition-colors duration-300 ease-in-out group-hover:text-primary-light lg:min-h-[2.875rem]"
          >
            {renderItalicText(title)}
          </Typography>

          <Typography
            size="p1"
            className="mt-[0.625rem] line-clamp-3 text-gray-dark"
          >
            {renderItalicText(description)}
          </Typography>
        </div>
      </article>
    </Link>
  );
};
