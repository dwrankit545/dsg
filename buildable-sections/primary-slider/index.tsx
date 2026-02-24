'use client';

import { PortableTextComponent } from '@/components/portable-text';
import { IPrimarySliderSection } from './interface';
import { Carousel } from '@/components/carousel';
import { CarouselItem } from '@/components/carousel/sub-components/item';
import { PrimaryCarouselCard } from './sub-component/primary-card';
import { cn } from '@/lib/shadcn/utils';

/**
 * This carousel section renders an array of items.
 */
export const PrimarySliderSection = ({
  items,
  textContent,
}: IPrimarySliderSection) => {
  const navigationWrapperClasses = cn(
    `absolute bottom-[1.25rem] lg:bottom-[1.875rem] max-w-fit flex items-center justify-between gap-5 right-[1.25rem] md:left-[1.875rem] md:w-1/2 md:justify-start bg-white rounded-full`
  );
  return (
    <section className="section-padding-secondary overflow-hidden">
      <div className="container">
        {textContent && (
          <div className="text-center">
            <PortableTextComponent content={textContent} />
          </div>
        )}

        <div className="mt-[1.875rem] lg:mt-[3.125rem]"></div>
        {items && items.length > 0 && (
          <Carousel
            itemsPerSlide={{ '2xl': 1, initial: 1, lg: 1, md: 1, sm: 1, xl: 1 }}
            totalItem={items.length}
            loop={true}
            hasNavigation
            navigationWrapperClassName={navigationWrapperClasses}
          >
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="rounded-16 border border-solid border-gray-light/25"
              >
                <PrimaryCarouselCard {...item} />
              </CarouselItem>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};
