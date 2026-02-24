import Image from 'next/image';
import { ISecondaryHero } from './interface';
import { cn } from '@/lib/shadcn/utils';
import { PortableTextComponent } from '@/components/portable-text';

/** This section is expected to be used at the top of a given page */
export function SecondaryHero({ textContent, image }: ISecondaryHero) {
  return (
    <section
      className={cn('section-padding-primary relative flex items-center')}
    >
      {image && (
        <Image
          priority
          src={image.src}
          alt={image.alt ? image.alt : 'hero-desktop-image'}
          fill
          placeholder="blur"
          blurDataURL={image.lqip}
          className="object-cover"
        />
      )}

      <span className="absolute inset-0 bg-primary-light/95"></span>

      <div className="container">
        <div className="relative z-10 space-y-6 text-center text-white">
          <PortableTextComponent content={textContent} />
        </div>
      </div>
    </section>
  );
}
