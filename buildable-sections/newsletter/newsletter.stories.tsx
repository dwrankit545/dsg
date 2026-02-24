import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterSection } from '.';
import { samplePortableText } from '@/components/portable-text/sample';

const meta: Meta<typeof NewsletterSection> = {
  title: 'Buildable Sections/Newsletter Section',
  component: NewsletterSection,
  tags: ['autodocs'],
  args: {
    textContent: samplePortableText,
    ctaLabel: 'Subscribe',
  },
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
        <div className="mx-auto max-w-[36.875rem]">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NewsletterSection>;

export const Primary: Story = {};
