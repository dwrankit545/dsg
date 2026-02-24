import { BULLET_LIST_IMAGE_DIMENSIONS, IBulletListSection } from './interface';
import { PortableTextComponent } from '@/components/portable-text';
import { cn } from '@/lib/shadcn/utils';
import Image from 'next/image';

/**
 * `BulletListSection` is a functional component that represents a bullet list section.
 */
export const BulletListSection = ({
  textContent,
  image,
  imagePosition,
}: IBulletListSection) => {
  return (
    <section className={'section-padding-secondary'}>
      <div
        className={
          'container flex flex-col items-center gap-[1.875rem] lg:flex-row lg:gap-[3.125rem]'
        }
      >
        {textContent && (
          <div className={cn('order-1', imagePosition == 'left' && 'order-2')}>
            <PortableTextComponent content={textContent} isCustomList />
          </div>
        )}

        {image && (
          <div
            className={`relative order-2 w-full lg:w-[50%] ${
              imagePosition === 'left' && 'order-1'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt || 'Bullet list image'}
              width={BULLET_LIST_IMAGE_DIMENSIONS.width}
              height={BULLET_LIST_IMAGE_DIMENSIONS.height}
              className={'h-auto w-full px-[3.25rem] py-[2rem]'}
            />
          </div>
        )}
      </div>
    </section>
  );
};
