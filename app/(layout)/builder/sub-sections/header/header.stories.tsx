import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';
import { headerProps } from './story-props';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: headerProps,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  decorators: [
    (Story, args) => (
      <div className="min-h-[300vh] bg-gray-light">
        <Story {...args} />
      </div>
    ),
  ],
};

export const Transparent: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-[300vh] bg-gray-light">
        <Story />
      </div>
    ),
  ],
};
