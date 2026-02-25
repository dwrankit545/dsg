import Image from 'next/image';
import { IPrimaryHero, PRIMARY_HERO_IMAGE_DIMENSIONS } from './interface';
import { cn } from '@/lib/shadcn/utils';
import { PortableTextComponent } from '@/components/portable-text';
import { CustomButton } from '@/components/button';

/** This section is expected to be used at the top of a given page */
export function PrimaryHero({ textContent, ctaLink, image }: IPrimaryHero) {
  return (
    <section className={cn('section-padding-secondary')}>
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-[1.875rem] lg:flex-row lg:gap-[2.25rem]">
          <div className="flex flex-col gap-[1.875rem] lg:gap-[3.125rem]">
            <div className="mx-auto max-w-[40.25rem] text-center text-black lg:text-start">
              <PortableTextComponent content={textContent} />
            </div>

            {ctaLink && (
              <CustomButton
                {...ctaLink}
                className="max-w-fit self-center lg:self-start"
              >
                {ctaLink.children}
              </CustomButton>
            )}
          </div>

          {image && (
            <Image
              priority
              src={image.src}
              alt={image.alt ? image.alt : 'hero-desktop-image'}
              height={PRIMARY_HERO_IMAGE_DIMENSIONS.height}
              width={PRIMARY_HERO_IMAGE_DIMENSIONS.width}
              placeholder="blur"
              blurDataURL={image.lqip}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}
