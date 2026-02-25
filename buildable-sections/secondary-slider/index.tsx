import { PortableTextComponent } from '@/components/portable-text';
import { ISecondarySliderSection } from './interface';
import { CustomButton } from '@/components/button';
import { SliderComponent } from './slider';

/**
 * This carousel section renders an array of case study items.
 */
export const SecondarySliderSection = ({
  items,
  textContent,
  ctaLink,
}: ISecondarySliderSection) => {
  return (
    <section className="section-padding-secondary overflow-hidden">
      <div className="container flex flex-col gap-[1.875rem] md:gap-[3.125rem]">
        {textContent && (
          <div className="text-center">
            <PortableTextComponent content={textContent} />
          </div>
        )}

        {items && items.length > 0 && <SliderComponent items={items} />}

        {ctaLink && (
          <CustomButton {...ctaLink} className="mx-auto max-w-fit">
            {ctaLink.children}
          </CustomButton>
        )}
      </div>
    </section>
  );
};
