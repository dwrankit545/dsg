import { RichTextSection } from '..';
import { IRichTextSection } from '../interface';
import { ISanityRichTextSection } from './interface';

export function RichTextSectionBuilder({
  content,
  title,
}: ISanityRichTextSection) {
  const sectionProps: IRichTextSection = {
    title,
    content,
  };

  return <RichTextSection {...sectionProps} />;
}
