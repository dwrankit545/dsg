import Link from 'next/link';
import { ITertiaryCard } from './interface';
import { Typography } from '@/components/typography';
import { renderItalicText } from '@/lib/render-italic-text';

/**
 * Secondary Card component.
 *
 * @component
 * @param ISecondaryCard - Properties for configuring the tertiary card.
 * @returns JSX.Element - Rendered TertiaryCard component.
 */
export const TertiaryCard = ({ link, title, description }: ITertiaryCard) => {
  return (
    <Link {...link} aria-label={link.ariaLabel || title} target="_blank">
      <article className="group h-full overflow-hidden rounded-20 border border-gray-lighter bg-white transition-all duration-300 ease-in-out will-change-transform hover:translate-y-[-0.5rem] hover:border-primary-light">
        <div className={'flex h-full flex-col px-[1.25rem] py-[2.5rem]'}>
          <Typography
            size="s1"
            className="line-clamp-3 min-h-[3.625rem] transition-colors duration-300 ease-in-out group-hover:text-primary-light md:min-h-[4.3125rem]"
          >
            {renderItalicText(title)}
          </Typography>
          {description && (
            <Typography size="p1" className="line-clamp-1 pt-[0.625rem]">
              {renderItalicText(description)}
            </Typography>
          )}
        </div>
      </article>
    </Link>
  );
};
