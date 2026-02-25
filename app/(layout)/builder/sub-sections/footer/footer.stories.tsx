import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';
import { footerProps } from './story-props';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = { args: footerProps };
