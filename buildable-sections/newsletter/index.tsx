import { INewsletterSection } from './interface';
import { PortableTextComponent } from '@/components/portable-text';
import { NewsletterForm } from '@/components/forms/newsletter-form';

/**
 * `NewsletterSection` is a functional component that represents a newsletter section.
 */
export const NewsletterSection = ({
  textContent,
  ctaLabel,
}: INewsletterSection) => {
  return (
    <section className={'section-padding-secondary bg-gradient-1'}>
      <div
        className={
          'container mx-auto flex max-w-[36.875rem] flex-col items-center justify-center gap-[1.875rem] text-center text-white'
        }
      >
        {textContent && (
          <div className="mx-auto mt-[1.25rem] max-w-[46.5rem]">
            <PortableTextComponent content={textContent} />
          </div>
        )}

        <NewsletterForm ctaLabel={ctaLabel} />
      </div>
    </section>
  );
};
