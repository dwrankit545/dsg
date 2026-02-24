import { cn } from '@/lib/shadcn/utils';
import { ICarouselItem } from './interface';

export function CarouselItem({ children, className }: ICarouselItem) {
  return (
    <div className={cn('keen-slider__slide !overflow-visible', className)}>
      {children}
    </div>
  );
}
