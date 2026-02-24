'use client';

import { IArticlesListSection } from '../interface';
import { PrimaryCard } from '@/components/cards/primary';
import { InputControl } from '@/components/inputs/input-control';
import { ChangeEvent, useState } from 'react';

/**
 * `ArticlesList` is a functional component that represents an articles list section.
 */

export const PotpourriArticles = ({
  potpourriArticles: initialArticles,
  displaySearchBar,
}: Pick<IArticlesListSection, 'potpourriArticles' | 'displaySearchBar'>) => {
  const [potpourriArticles, setPotpourriArticles] = useState(initialArticles);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (initialArticles) {
      setSearchText(e.target.value);
      const filteredArticles = initialArticles.filter((article) =>
        article.title.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setPotpourriArticles(filteredArticles);
    }
  };
  return (
    <div className="flex flex-col gap-[1.875rem]">
      {displaySearchBar && (
        <div className="w-full md:w-[20rem] lg:ml-auto">
          <InputControl
            name="search"
            type="search"
            value={searchText || ''}
            onInputChange={(e) => handleSearch(e)}
            placeholder="Search"
          />
        </div>
      )}

      {potpourriArticles && potpourriArticles.length > 0 && (
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {potpourriArticles.map((article, index) => {
            return (
              <div key={index} className="max-w-[22.9375rem]">
                <PrimaryCard {...article} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
