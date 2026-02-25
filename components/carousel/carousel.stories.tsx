import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '.';
import { CarouselItem } from './sub-components/item';
import { carouselOptions } from './story-props';
import { cn } from '@/lib/shadcn/utils';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
  args: { ...carouselOptions },
  decorators: [
    (Story) => (
      <div className="overflow-hidden py-20">
        <div className="container">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  render: (args) => (
    <Carousel {...args}>
      {({ activeIndex }) =>
        Array.from({ length: 6 }, (_, i) => i + 1).map((_, index) => {
          const isActive = activeIndex === index;

          return (
            <CarouselItem key={index}>
              <div
                className={cn(
                  'flex h-48 w-full items-center justify-center border-2 transition-all',
                  isActive && 'bg-primary/50 shadow-2'
                )}
              >
                Slide {index + 1}
              </div>
            </CarouselItem>
          );
        })
      }
    </Carousel>
  ),
};
