import { ISanityLimitedPortableText } from '@/backend/sanity/fragments/root/portable-text/interface';
import { PortableTextComponent } from '..';

export interface ISanityPortableTextQuoteText {
  _type: 'quoteText';
  textAlignment: 'left' | 'center';
  textContent: ISanityLimitedPortableText;
  markDefs?: undefined | [] | null;
}

export default function QuoteText({
  textAlignment,
  textContent,
}: ISanityPortableTextQuoteText) {
  return (
    <div
      className={`py-[1.875rem] lg:mx-auto  lg:py-[3.125rem] ${textAlignment == 'center' ? 'text-center lg:max-w-[62.5rem]' : ' border-b border-t border-b-gray-lighter border-t-gray-lighter text-left'}`}
    >
      <PortableTextComponent content={textContent} />
    </div>
  );
}
