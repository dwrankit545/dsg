import { TextComponent } from '@/components/text-component';
import {
  IPrimaryCarouselCard,
  PRIMARY_CAROUSEL_CARD_IMAGE_DIMENSION,
} from './interface';
import Image from 'next/image';

export const PrimaryCarouselCard = ({
  textComponent,
  image,
}: IPrimaryCarouselCard) => {
  return (
    <div className="flex flex-col items-center justify-between gap-[1.625rem] p-[1.25rem] lg:flex-row lg:gap-[2.875rem] lg:p-[1.875rem]">
      <TextComponent
        {...textComponent}
        titleSize="h3"
        descriptionSize="p1"
        titleTagName="h3"
        className="max-w-[34.625rem] text-center lg:py-[3rem] lg:text-left"
      />

      {image && image.src && (
        <div className="flex max-h-[19.375rem] min-h-[13rem] max-w-[21.375rem] justify-center md:justify-end">
          <Image
            src={image.src}
            alt={image.alt || `Carousel Image`}
            width={PRIMARY_CAROUSEL_CARD_IMAGE_DIMENSION.width}
            height={PRIMARY_CAROUSEL_CARD_IMAGE_DIMENSION.height}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}

      <div className="min-h-[1.5rem] lg:hidden" />
    </div>
  );
};
