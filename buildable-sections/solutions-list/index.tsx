import { ISolutionsListSection } from './interface';
import { PortableTextComponent } from '@/components/portable-text';
import { SolutionItem } from './sub-components/solution';

/**
 * `SolutionsList` is a functional component that represents an solutions list section.
 */
export const SolutionsListSection = ({
  solutions,
  textContent,
}: ISolutionsListSection) => {
  return (
    <section className={'section-padding-secondary'}>
      <div className={'container flex flex-col justify-center gap-[1.875rem]'}>
        {textContent && (
          <div className="text-center">
            <PortableTextComponent content={textContent} />
          </div>
        )}

        {solutions && solutions.length > 0 && (
          <div className="grid">
            {solutions.map((solution, index) => {
              return <SolutionItem {...solution} key={index} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};
