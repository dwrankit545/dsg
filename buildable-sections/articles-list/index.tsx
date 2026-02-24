import { CustomButton } from '@/components/button';
import { IArticlesListSection } from './interface';
import { PortableTextComponent } from '@/components/portable-text';
import { PrimaryCard } from '@/components/cards/primary';
import { TertiaryCard } from '@/components/cards/tertiary';
import { PotpourriArticles } from './potpourri';

/**
 * `ArticlesList` is a functional component that represents an articles list section.
 */

export const ArticlesListSection = ({
  type,
  textContent,
  potpourriArticles,
  featuredArticles,
  insideTheMindArticles,
  ctaLink,
  displaySearchBar,
}: IArticlesListSection) => {
  return (
    <section className={'section-padding-secondary'}>
      <div className="container">
        <div
          className={
            'flex flex-col items-center justify-center gap-[20px] md:gap-[30px]'
          }
        >
          {textContent && (
            <div className="text-center">
              <PortableTextComponent content={textContent} />
            </div>
          )}

          {type == 'potpourri' && (
            <PotpourriArticles
              potpourriArticles={potpourriArticles}
              displaySearchBar={displaySearchBar}
            />
          )}

          {type == 'featured' &&
            featuredArticles &&
            featuredArticles.length > 0 && (
              <div className="flex flex-row flex-wrap justify-center gap-5">
                {featuredArticles.map((article, index) => {
                  return (
                    <div key={index} className="max-w-[367px]">
                      <TertiaryCard {...article} />
                    </div>
                  );
                })}
              </div>
            )}

          {type == 'inside-the-mind' &&
            insideTheMindArticles &&
            insideTheMindArticles.length > 0 && (
              <div className="flex flex-row flex-wrap items-center justify-center gap-5">
                {insideTheMindArticles.map((article, index) => {
                  return (
                    <div key={index} className="max-w-[367px]">
                      <PrimaryCard {...article} />
                    </div>
                  );
                })}
              </div>
            )}

          {ctaLink && (
            <CustomButton {...ctaLink} className="mx-auto max-w-fit">
              {ctaLink.children}
            </CustomButton>
          )}
        </div>
      </div>
    </section>
  );
};
