import type { Meta, StoryObj } from '@storybook/react';
import { CustomCardListSection } from '.';
import {
  infoTypeCustomCardListProps,
  linkTypeCustomCardListProps,
} from './story-props';

const meta: Meta<typeof CustomCardListSection> = {
  title: 'Buildable Sections/Custom Card List Section',
  component: CustomCardListSection,
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

type Story = StoryObj<typeof CustomCardListSection>;

export const InfoTypeCustomCardList: Story = {
  args: infoTypeCustomCardListProps,
};

export const LinkTypeCustomCardList: Story = {
  args: linkTypeCustomCardListProps,
};
