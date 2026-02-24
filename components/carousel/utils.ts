import { KeenSliderOptions } from 'keen-slider';
import { ICarousel } from './interface';

export function generateArrayFromNumber(num: number) {
  return Array(num)
    .fill(0)
    .map((_, i) => i + 1);
}

export function carouselConfig(
  args: Required<
    Pick<
      ICarousel,
      'transitionSpeed' | 'itemsPerSlide' | 'itemGap' | 'loop' | 'totalItem'
    >
  >
): KeenSliderOptions {
  return {
    defaultAnimation: {
      duration: args.transitionSpeed,
    },
    slides: {
      perView: args.itemsPerSlide.initial || 1.2,
      spacing: args.itemGap.initial || 10,
    },
    loop: args.loop && args.totalItem > args.itemsPerSlide.initial,
    breakpoints: {
      [`(min-width: 640px})`]: {
        slides: {
          perView: args.itemsPerSlide.sm || 1.2,
          spacing: args.itemGap.sm || 12,
        },
        loop: args.loop && args.totalItem > args.itemsPerSlide.sm,
      },
      [`(min-width: 768px)`]: {
        slides: {
          perView: args.itemsPerSlide.md || 2,
          spacing: args.itemGap.md || 16,
        },
        loop: args.loop && args.totalItem > args.itemsPerSlide.md,
      },
      [`(min-width: 1024px)`]: {
        slides: {
          perView: args.itemsPerSlide.lg || 3,
          spacing: args.itemGap.lg || 20,
        },
        loop: args.loop && args.totalItem > args.itemsPerSlide.lg,
      },
      [`(min-width: 1280px)`]: {
        slides: {
          perView: args.itemsPerSlide.xl || 4,
          spacing: args.itemGap.xl || 24,
        },
        loop: args.loop && args.totalItem > args.itemsPerSlide.xl,
      },
      [`(min-width: 1400px)`]: {
        slides: {
          perView: args.itemsPerSlide['2xl'] || 4,
          spacing: args.itemGap['2xl'] || 24,
        },
        loop: args.loop && args.totalItem > args.itemsPerSlide['2xl'],
      },
    },
  };
}

interface Slider {
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  on: Function;
  container: HTMLElement;
}

export const CarouselAutoPlayPlugin =
  (interval?: number, pauseOnHover?: boolean) => (slider: Slider) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;
    const clearNextTimeout = () => {
      clearTimeout(timeout);
    };

    const nextTimeout = () => {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, interval);
    };

    const onMouseOver = () => {
      if (!pauseOnHover) {
        mouseOver = true;
      }
      clearNextTimeout();
    };

    const onMouseOut = () => {
      mouseOver = false;
      nextTimeout();
    };

    const onStart = () => {
      slider.container.addEventListener('mouseover', onMouseOver);
      slider.container.addEventListener('mouseout', onMouseOut);
      slider.on('animationEnded', nextTimeout);
      nextTimeout();
    };

    const onStop = () => {
      slider.container.removeEventListener('mouseover', onMouseOver);
      slider.container.removeEventListener('mouseout', onMouseOut);
      slider.on('animationEnded', nextTimeout, true);
      clearNextTimeout();
    };

    slider.on('created', interval ? onStart : onStop);
    slider.on('destroyed', onStop);
    slider.on('stopped', onStop);
    slider.on('resumed', interval ? onStart : onStop);
  };
