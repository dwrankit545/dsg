import type { Meta, StoryObj } from '@storybook/react';
import { secondaryCardProps } from './story-props';
import { SecondaryCard } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SecondaryCard> = {
  title: 'Components/Cards/Secondary',
  component: SecondaryCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SecondaryCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: secondaryCardProps,
  decorators: [
    (Story) => (
      <div className="py-16">
        <div className="container">
          <div className="mx-auto max-w-[22.5rem]">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};

export const List: Story = {
  args: secondaryCardProps,
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <div className="container flex flex-row flex-wrap items-center justify-center gap-[1.25rem] md:gap-[1.875rem]">
          <div className="max-w-[22.5rem]">
            <Story />
          </div>

          <div className="max-w-[22.5rem]">
            <Story />
          </div>
          <div className="max-w-[22.5rem]">
            <Story />
          </div>
          <div className="max-w-[22.5rem]">
            <Story />
          </div>
          <div className="max-w-[22.5rem]">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};
