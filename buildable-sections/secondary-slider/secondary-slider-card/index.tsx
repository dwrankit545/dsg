import { cn } from '@/lib/shadcn/utils';
import { ISecondarySliderCard } from './interface';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/components/typography';
import { renderItalicText } from '@/lib/render-italic-text';

export const SecondarySliderCard = ({
  activeIndex,
  cardIndex,
  cardContent,
  isActive,
}: ISecondarySliderCard) => {
  return (
    <Link
      {...cardContent.link}
      aria-label={cardContent.link.ariaLabel || cardContent.title}
      target="_blank"
    >
      <article
        className={cn(
          'relative min-h-[27rem] overflow-hidden rounded-20 transition-all duration-300 ease-linear md:scale-75',
          isActive && 'md:scale-100',
          activeIndex + 2 <= cardIndex && 'md:origin-left md:transform'
        )}
      >
        <div
          className={cn(
            'relative min-h-[27rem] transition-all delay-300',
            isActive &&
              'after:z-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-black/65'
          )}
        >
          <Image
            src={cardContent.image.src}
            alt={cardContent.image.src}
            blurDataURL={cardContent.image.lqip}
            fill
            sizes={`(min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1400px) 25vw, 100vw`}
            className="-z-1 object-cover"
          />
        </div>

        <div
          className={cn(
            'absolute bottom-0 left-0 z-10 flex h-fit w-full flex-col justify-between p-6 opacity-0 transition-opacity md:p-8',
            isActive && 'opacity-100'
          )}
        >
          <Typography size={'h3'} tagName={'h3'} className="text-white">
            {renderItalicText(cardContent.title)}
          </Typography>
        </div>
      </article>
    </Link>
  );
};
