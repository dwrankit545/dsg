import type { Meta, StoryObj } from '@storybook/react';
import { sectionProps } from './story-props';
import { PrimarySliderSection } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PrimarySliderSection> = {
  title: 'Buildable Sections/Primary Carousel Section',
  component: PrimarySliderSection,
  tags: ['autodocs'],
  args: {
    ...sectionProps,
  },
  decorators: [
    (Story) => (
      <div className="section-padding-secondary">
        <div className="container">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PrimarySliderSection>;

export const Primary: Story = {};
