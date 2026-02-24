import type { Meta, StoryObj } from '@storybook/react';
import { BulletListSection } from '.';
import { samplePortableText } from '@/components/portable-text/sample';

const meta: Meta<typeof BulletListSection> = {
  title: 'Buildable Sections/Bullet List Section',
  component: BulletListSection,
  tags: ['autodocs'],
  args: { textContent: samplePortableText },
  argTypes: {
    textContent: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary container">
        <div className="mx-auto max-w-[800px]">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BulletListSection>;

export const Primary: Story = {};
