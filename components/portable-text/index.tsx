import { PortableText } from '@portabletext/react';
import { portableTextComponents } from './components';
import { IPortableTextComponent } from './interface';
import { cn } from '@/lib/shadcn/utils';

/**
 * This element renders portable text according to custom
 * blocks and schemas used in sanity's portable text.
 * @param {object}  ICustomPortableText
 * @returns JSX.Element
 */
export function PortableTextComponent({
  content,
  isCustomList,
}: IPortableTextComponent) {
  return (
    <article
      className={cn(
        'group block space-y-3 after:clear-both after:block',
        isCustomList && 'custom-list-style'
      )}
    >
      <PortableText value={content} components={portableTextComponents} />
    </article>
  );
}
