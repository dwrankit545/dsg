'use client';

import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ICarousel, ITEMS_PER_SLIDE, ITEM_GAP } from './interface';
import { CarouselAutoPlayPlugin, carouselConfig } from './utils';
import { CarouselNavigation } from './sub-components/navigation';
import { CarouselPagination } from './sub-components/pagination';
import { cn } from '@/lib/shadcn/utils';

/**
 * This is the base carousel component.
 */

export function Carousel({
  itemsPerSlide = ITEMS_PER_SLIDE,
  itemGap = ITEM_GAP,
  children,
  loop = false,
  hasNavigation,
  hasPagination,
  navigationExtra,
  navigationWrapperClassName,
  haveOffset = false,
  autoPlay,
  totalItem,
  getActiveIndex,
}: ICarousel) {
  const [sliderReady, setSliderReady] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [pagination, setPagination] = useState({ dots: 0, count: 0 });

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      ...carouselConfig({
        transitionSpeed: 1000,
        itemsPerSlide,
        itemGap,
        loop,
        totalItem,
      }),

      slideChanged({ track }) {
        setActiveSlide(track.details.rel);
        getActiveIndex && getActiveIndex(track.details.rel);

        if (track.velocity() > 0) {
          setPagination((pre) => ({
            ...pre,
            count: pre.count + 1 < pre.dots ? pre.count + 1 : 0,
          }));
        } else {
          setPagination((pre) => ({
            ...pre,
            count: pre.count > 0 ? pre.count - 1 : pre.dots - 1,
          }));
        }
      },

      optionsChanged(slider) {
        if (
          slider.options.slides &&
          typeof slider.options.slides === 'object' &&
          typeof slider.options.slides.perView === 'number'
        ) {
          const dots =
            Math.ceil(slider.slides.length - slider.options.slides.perView) + 1;
          setPagination((pre) => ({ ...pre, dots }));
        }
      },

      created({ track }) {
        setSliderReady(true);
        getActiveIndex && getActiveIndex(track.details.rel);
      },
    },
    [CarouselAutoPlayPlugin(autoPlay?.interval, autoPlay?.pauseOnHover)]
  );

  useEffect(() => {
    if (
      instanceRef.current &&
      instanceRef.current?.options.slides &&
      typeof instanceRef.current.options.slides === 'object' &&
      typeof instanceRef.current?.options.slides.perView === 'number'
    ) {
      const dots =
        Math.ceil(
          instanceRef.current?.slides.length -
            instanceRef.current?.options.slides.perView
        ) + 1;
      setPagination((pre) => ({ ...pre, dots }));
    }
  }, [instanceRef]);

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className={cn(
          'flex items-stretch justify-start overflow-hidden',
          haveOffset && 'overflow-visible'
        )}
      >
        {typeof children === 'function'
          ? children({ activeIndex: activeSlide })
          : children}
      </div>

      {/* Navigation  */}
      {hasNavigation && sliderReady && instanceRef.current && (
        <div
          className={cn(
            'mt-4 flex items-center justify-center gap-3 md:justify-end',
            navigationExtra && 'justify-between gap-5',
            navigationWrapperClassName
          )}
        >
          {navigationExtra}

          <div className="flex items-center justify-center gap-3  md:justify-end">
            <CarouselNavigation
              direction="prev"
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              isDisabled={!loop && activeSlide === 0}
            />
            <CarouselNavigation
              direction="next"
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              isDisabled={
                !loop &&
                activeSlide === instanceRef.current.track.details.slides.length
              }
            />
          </div>
        </div>
      )}

      {/* Pagination */}
      {sliderReady &&
        instanceRef.current &&
        hasPagination &&
        pagination.dots > 1 &&
        !hasNavigation && (
          <CarouselPagination
            totalCount={pagination.dots}
            onClick={(newIndex: number) => {
              instanceRef.current?.moveToIdx(newIndex);
            }}
            currentSlide={pagination.count}
          />
        )}
    </div>
  );
}
