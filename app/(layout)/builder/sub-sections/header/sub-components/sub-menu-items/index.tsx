import Link from 'next/link';
import { cn } from '@/lib/shadcn/utils';
import { ISubMenu } from '../../interface';
import { Typography } from '@/components/typography';

export const SubMenuItems = ({
  items,
  clickHandler,
}: Pick<ISubMenu, 'items' | 'clickHandler'>) => {
  return (
    <ul
      className={cn(
        // Layout
        'z-99 left-0 top-full w-auto min-w-[16rem] list-disc flex-col items-start justify-start gap-8 rounded-b-2xl rounded-tr-2xl px-5 pt-8 lg:absolute lg:list-none lg:gap-4 lg:p-4',
        // Color
        ' bg-transparent text-white lg:bg-gradient-3',
        // Animation
        'flex origin-top lg:invisible lg:flex lg:opacity-0 lg:transition-all lg:animate-in lg:group-hover:visible lg:group-hover:opacity-100'
      )}
    >
      {items?.map((subLink, j) => (
        <li key={j}>
          <Link {...subLink} onClick={clickHandler}>
            <Typography
              size="p1"
              className="transition-all duration-300 ease-in-out will-change-transform hover:translate-x-2"
            >
              {subLink.label}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
};
