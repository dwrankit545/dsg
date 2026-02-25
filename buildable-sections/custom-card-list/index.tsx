import { ICustomCardListSection } from './interface';
import { PortableTextComponent } from '@/components/portable-text';
import { SecondaryCard } from '@/components/cards/secondary';
import { CustomButton } from '@/components/button';
import { PrimaryCard } from '@/components/cards/primary';

/**
 * `CustomCardList` is a functional component that represents an custom card list section.
 */
export const CustomCardListSection = ({
  textContent,
  type,
  ctaLink,
  infoItems,
  linkItems,
}: ICustomCardListSection) => {
  return (
    <section className={'section-padding-secondary'}>
      <div className={'container flex flex-col items-center gap-y-[1.875rem]'}>
        {textContent && (
          <div className="text-center">
            <PortableTextComponent content={textContent} />
          </div>
        )}

        {type == 'info' && infoItems && infoItems.length > 0 && (
          <div className="flex flex-row flex-wrap justify-center gap-[20px] md:gap-[30px]">
            {infoItems.map((item, index) => {
              return (
                <div key={index} className="max-w-[356px]">
                  <SecondaryCard {...item} />
                </div>
              );
            })}
          </div>
        )}

        {type == 'link' && linkItems && linkItems.length > 0 && (
          <div className="flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[30px]">
            {linkItems.map((item, index) => {
              return (
                <div key={index} className="max-w-[356px]">
                  <PrimaryCard {...item} />
                </div>
              );
            })}
          </div>
        )}

        {ctaLink && (
          <CustomButton {...ctaLink} className="mx-auto max-w-fit">
            {ctaLink.children}
          </CustomButton>
        )}
      </div>
    </section>
  );
};
