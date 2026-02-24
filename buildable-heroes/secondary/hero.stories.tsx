import type { Meta, StoryObj } from '@storybook/react';

import { SecondaryHero } from '.';
import { heroPropsWithImage, heroPropsWithoutImage } from './story-props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SecondaryHero> = {
  title: 'Buildable Hero Sections/Secondary Hero',
  component: SecondaryHero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SecondaryHero>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: heroPropsWithImage,
};

export const WithoutImage: Story = {
  args: heroPropsWithoutImage,
};
