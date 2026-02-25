import { CustomButton } from '@/components/button';
import { ICtaSection } from './interface';
import { PortableTextComponent } from '@/components/portable-text';
import { Typography } from '@/components/typography';
import { renderItalicText } from '@/lib/render-italic-text';

/**
 * `CtaSection` is a functional component that represents a cta section.
 */
export const CtaSection = ({ title, textContent, ctaLink }: ICtaSection) => {
  return (
    <section className={'section-padding-secondary bg-gradient-1'}>
      <div
        className={
          'container flex flex-col items-center justify-center text-center text-white'
        }
      >
        {title && <Typography size="h2">{renderItalicText(title)}</Typography>}
        {textContent && (
          <div className="mx-auto mt-[1.25rem] max-w-[46.5rem]">
            <PortableTextComponent content={textContent} />
          </div>
        )}
        {ctaLink && (
          <CustomButton
            {...ctaLink}
            className="mx-auto mt-[1.875rem] max-w-fit"
          >
            {ctaLink.children}
          </CustomButton>
        )}
      </div>
    </section>
  );
};
