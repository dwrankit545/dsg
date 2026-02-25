import type { Meta, StoryObj } from '@storybook/react';
import { CtaSection } from '.';
import { samplePortableText } from '@/components/portable-text/sample';

const meta: Meta<typeof CtaSection> = {
  title: 'Buildable Sections/CTA Section',
  component: CtaSection,
  tags: ['autodocs'],
  args: {
    textContent: samplePortableText,
    title: 'Connect with Us',
    ctaLink: {
      colorScheme: 'secondary',
      disabled: false,
      href: '/',
      type: 'link',
      children: 'Get in Touch',
    },
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
        <div className="mx-auto max-w-[46.5rem]">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CtaSection>;

export const Primary: Story = {};
