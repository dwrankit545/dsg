'use client';

import { Carousel } from '@/components/carousel';
import { CarouselItem } from '@/components/carousel/sub-components/item';
import { ICardContent } from '../secondary-slider-card/interface';
import { SecondarySliderCard } from '../secondary-slider-card';

interface Props {
  items: ICardContent[];
}

export const SliderComponent = ({ items }: Props) => {
  return (
    <Carousel
      itemsPerSlide={{
        initial: 1.1,
        sm: 1.2,
        md: 1.3,
        lg: 1.4,
        xl: 1.7,
        '2xl': 1.7,
      }}
      itemGap={{ initial: 16, sm: 16, md: 24, lg: 36, xl: 36, '2xl': 36 }}
      totalItem={items.length}
      loop={true}
      haveOffset
      hasNavigation
    >
      {({ activeIndex }) => (
        <>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <SecondarySliderCard
                activeIndex={activeIndex}
                cardIndex={index}
                cardContent={item}
                isActive={
                  activeIndex === index ||
                  (items.length === activeIndex && activeIndex - 1 === index)
                }
              />
            </CarouselItem>
          ))}
        </>
      )}
    </Carousel>
  );
};
