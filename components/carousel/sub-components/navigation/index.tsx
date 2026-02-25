import { cn } from '@/lib/shadcn/utils';
import { ICarouselNavigation } from './interface';
import { IconStore } from '@/components/icon-store';

export function CarouselNavigation({
  isDisabled,
  direction,
  onClick,
}: ICarouselNavigation) {
  const disabledClasses = cn(isDisabled && 'pointer-events-none');

  return (
    <span
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-full text-2xl',
        // direction === 'prev' && 'bottom-2 right-16',
        // direction === 'next' && 'bottom-2 right-2',
        isDisabled && 'cursor-not-allowed  opacity-90'
      )}
      onClick={onClick}
    >
      {direction === 'prev' && (
        <IconStore
          iconName="arrow-left"
          className={disabledClasses + ' text-xl lg:text-4xl'}
        />
      )}
      {direction === 'next' && (
        <IconStore
          iconName="arrow-right"
          className={disabledClasses + ' text-xl lg:text-4xl'}
        />
      )}
    </span>
  );
}
