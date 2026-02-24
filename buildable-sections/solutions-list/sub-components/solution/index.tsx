import Image from 'next/image';
import { ISolutionItem, SOLUTION_ITEM_IMAGE_DIMENSION } from './interface';
import { CustomButton } from '@/components/button';
import { PortableTextComponent } from '@/components/portable-text';
import { SecondaryCard } from '@/components/cards/secondary';
import { CustomVideoPlayer } from '@/components/custom-video-player';

export const SolutionItem = ({
  mediaType,
  video,
  image,
  cardItems,
  ctaLink,
  textContent,
}: ISolutionItem) => {
  return (
    <article className="flex flex-col justify-center gap-[1.25rem]">
      <div className="flex flex-col items-center justify-center gap-[1.875rem]">
        {mediaType == 'image' && image && (
          <Image
            src={image.src}
            alt={image.alt || 'Solution Image'}
            blurDataURL={image.lqip}
            height={SOLUTION_ITEM_IMAGE_DIMENSION.height}
            width={SOLUTION_ITEM_IMAGE_DIMENSION.width}
            className="object-contain"
          />
        )}

        {mediaType == 'video' && video && (
          <CustomVideoPlayer
            videoUrl={video.videoUrl}
            posterImageUrl={video.posterImageUrl}
            autoPlay={true}
          />
        )}

        {ctaLink && (
          <CustomButton {...ctaLink} className="max-w-fit self-center">
            {ctaLink.children}
          </CustomButton>
        )}

        {textContent && (
          <div className="px-[0.625rem] text-center">
            <PortableTextComponent content={textContent} />
          </div>
        )}
      </div>

      {cardItems && cardItems.length > 0 && (
        <div className="flex flex-row flex-wrap justify-center gap-[1.875rem] pt-5 lg:pt-[1.875rem]">
          {cardItems.map((cardItem, index) => {
            return (
              <div key={index} className="max-w-[22.25rem]">
                <SecondaryCard {...cardItem} />
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
};
