import { extractSanityLink } from '@/lib/extract-sanity-link';
import { CtaSection } from '..';
import { ICtaSection } from '../interface';
import { ISanityCtaSection } from './interface';

export function CtaSectionBuilder({
  textContent,
  title,
  ctaLink,
}: ISanityCtaSection) {
  const extractedCtaLink = extractSanityLink(ctaLink);
  const sectionProps: ICtaSection = {
    title,
    textContent,
    ctaLink: extractedCtaLink && {
      type: 'link',
      colorScheme: 'secondary',
      children: extractedCtaLink.label,
      target: '_self',
      disabled: extractedCtaLink.disabled,
      href: extractedCtaLink.href,
    },
  };

  return <CtaSection {...sectionProps} />;
}
