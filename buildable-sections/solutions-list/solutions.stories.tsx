import type { Meta, StoryObj } from '@storybook/react';
import { SolutionsListSection } from '.';
import { sectionProps } from './story-props';

const meta: Meta<typeof SolutionsListSection> = {
  title: 'Buildable Sections/Solutions List Section',
  component: SolutionsListSection,
  tags: ['autodocs'],
  args: { ...sectionProps },
  argTypes: {
    textContent: {
      table: {
        disable: true,
      },
    },
  },
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

type Story = StoryObj<typeof SolutionsListSection>;

export const Primary: Story = {};
