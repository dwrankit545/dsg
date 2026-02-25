import { IRichTextSection } from './interface';
import { PortableTextComponent } from '@/components/portable-text';
import { Typography } from '@/components/typography';
import { renderItalicText } from '@/lib/render-italic-text';

/**
 * `RichTextSection` is a functional component that represents a rich text section.
 */
export const RichTextSection = ({ title, content }: IRichTextSection) => {
  return (
    <section className={'section-padding-secondary'}>
      <div
        className={'container flex flex-col gap-[1.875rem] lg:gap-[3.125rem]'}
      >
        {title && (
          <Typography size="h2" className="text-start lg:text-center">
            {renderItalicText(title)}
          </Typography>
        )}
        <PortableTextComponent content={content} />
      </div>
    </section>
  );
};
