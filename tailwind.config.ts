import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { ScreensConfig } from 'tailwindcss/types/config';

const screens: ScreensConfig = {
  sm: '639px',
  md: '767px',
  lg: '1023px',
  xl: '1279px',
  '2xl': '1399px',
};

const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './buildable-sections/**/**/*.{js,ts,jsx,tsx,mdx}',
    './buildable-heroes/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: screens,
    extend: {
      fontSize: {
        xs: [
          '0.75rem', // 12px
          {
            lineHeight: '1.174',
          },
        ],
        sm: [
          '0.875rem', // 14px
          {
            lineHeight: '1.174',
          },
        ],
        base: [
          '1rem', // 16px
          {
            lineHeight: '1.174',
          },
        ],
        md: [
          '1.125rem', // 18px
          {
            lineHeight: '1.174',
          },
        ],
        lg: [
          '1.25rem', // 20px
          {
            lineHeight: '1.174',
          },
        ],
        xl: [
          '1.5rem', // 24px
          {
            lineHeight: '1.174',
          },
        ],
        '2xl': [
          '1.625rem', // 26px
          {
            lineHeight: '1.174',
          },
        ],
        '3xl': [
          '2rem', // 32px
          {
            lineHeight: '1.174',
          },
        ],
        '4xl': [
          '2.625rem', // 42px
          {
            lineHeight: '1.174',
          },
        ],
        '5xl': [
          '3.75rem', // 60px
          {
            lineHeight: '1.174',
          },
        ],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#42B1D5',
          dark: '#080D33',
        },
        gray: {
          lighter: '#DEDEDE',
          light: '#848494',
          dark: '#333333',
        },
        black: '#000000',
        white: '#ffffff',
        info: '#0dcaf0',
        success: '#198754',
        warning: '#ffc107',
        danger: '#dc3545',
      },
      backgroundImage: {
        'gradient-1': `linear-gradient(259.57deg, #3C7E94 -21.18%, #42B1D5 103.87%)`,
        'gradient-3': `linear-gradient(180deg, #42B1D5 0%, #3C7E94 100%);
`,
      },
      borderRadius: {
        8: '0.5rem',
        16: '1rem',
        20: '1.25rem',
        32: '2rem',
        100: '6.25rem',
      },
      // Here we need to add this accordion animation config
      // for play the accordion animation correctly
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
