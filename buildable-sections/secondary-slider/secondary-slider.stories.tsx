import type { Meta, StoryObj } from '@storybook/react';
import { sectionProps } from './story-props';
import { SecondarySliderSection } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SecondarySliderSection> = {
  title: 'Buildable Sections/Secondary Carousel Section',
  component: SecondarySliderSection,
  tags: ['autodocs'],
  args: {
    ...sectionProps,
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

type Story = StoryObj<typeof SecondarySliderSection>;

export const Primary: Story = {};
