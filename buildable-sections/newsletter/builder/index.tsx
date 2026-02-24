import { NewsletterSection } from '..';
import { INewsletterSection } from '../interface';
import { ISanityNewsletterSection } from './interface';

export function NewsletterSectionBuilder({
  textContent,
  formButtonLabel,
}: ISanityNewsletterSection) {
  const sectionProps: INewsletterSection = {
    textContent,
    ctaLabel: formButtonLabel,
  };

  return <NewsletterSection {...sectionProps} />;
}
