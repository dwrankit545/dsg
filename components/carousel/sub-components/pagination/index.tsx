import { cn } from '@/lib/shadcn/utils';
import { generateArrayFromNumber } from '../../utils';
import { ICarouselPagination } from './interface';
import { IconStore } from '@/components/icon-store';

export function CarouselPagination({
  totalCount,
  onClick,
  currentSlide,
}: ICarouselPagination) {
  return (
    <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
      {generateArrayFromNumber(totalCount).map((_, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              onClick(index);
            }}
            className={cn(
              'inline-flex h-2 w-2 items-center justify-center rounded-full p-1 transition-colors',
              currentSlide === index ? 'cursor-default' : 'cursor-pointer'
            )}
          >
            <IconStore
              iconName="spinner-circle"
              className={cn(
                'text-[0.625rem]',
                currentSlide === index ? 'text-primary' : 'text-background-1'
              )}
            />
          </span>
        );
      })}
    </div>
  );
}
