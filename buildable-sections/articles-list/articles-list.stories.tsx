import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesListSection } from '.';
import {
  potpourriArticlesListProps,
  featuredArticleListProps,
} from './story-props';

const meta: Meta<typeof ArticlesListSection> = {
  title: 'Buildable Sections/Articles List Section',
  component: ArticlesListSection,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <div className="container">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ArticlesListSection>;

export const PotpourriArticlesList: Story = {
  args: potpourriArticlesListProps,
};

export const FeaturedArticlesList: Story = {
  args: featuredArticleListProps,
};
