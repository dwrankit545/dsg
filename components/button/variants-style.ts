import { cva } from 'class-variance-authority';

export const customButtonVariants = cva(
  'inline-flex items-center justify-center gap-3 relative text-base font-bold ring-offset-primary-light transition-colors ease-in-out border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-100 p-[0.9375rem] min-h-[3rem]',
  {
    variants: {
      /**
       * Buttons may be one of a variety of color variant.
       * Note: The ColorScheme field corresponds to the style field in the design.
       */
      colorScheme: {
        primary:
          'bg-transparent text-primary-light hover:bg-primary-light active:bg-primary-light hover:text-white active:text-white border-primary-light hover:border-transparent active:border-transparent',
        secondary:
          'bg-transparent text-white hover:bg-white hover:text-black active:bg-white active:text-black border-white hover:border-transparent active:border-transparent',
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
    },
  }
);
