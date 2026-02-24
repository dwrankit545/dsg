export interface ICarousel {
  /** The content inside the carousel. */
  children:
    | React.ReactNode
    | ((props: { activeIndex: number }) => React.ReactNode);
  /** The transitionSpeed of the slide transition. */
  transitionSpeed?: number;
  /** This controls whether the carousel will loop its content */
  loop?: boolean;
  /** This controls whether the carousel autoplay  interval and pauseOnHover option.
   *  After select option from storybook please refresh this page for sync*/
  autoPlay?: { interval: number; pauseOnHover: boolean };
  /**
   * This controls the offset of the carousel
   * Good to know: When using haveOffset as true, ensure that
   * your section has the overflow: hidden property.
   */
  haveOffset?: boolean;

  /** This controls the space between each slide by device width */
  itemGap?: typeof ITEM_GAP;

  /** This controls the items shown each slide by device width */
  itemsPerSlide?: typeof ITEMS_PER_SLIDE;

  /** This controls whether the navigation control will render */
  hasNavigation?: boolean;

  /* This renders the provided JSX element withing Carousel scope */
  navigationExtra?: React.ReactNode;

  navigationWrapperClassName?: string;

  /** This controls whether the dots control will render */
  hasPagination?: boolean;

  /** This controls whether the progress control will render */
  totalItem: number;

  getActiveIndex?: (index: number) => void;
}

export const ITEM_GAP = {
  initial: 20,
  sm: 20,
  md: 24,
  lg: 24,
  xl: 30,
  '2xl': 30,
};

export const ITEMS_PER_SLIDE = {
  initial: 1,
  sm: 1.3,
  md: 2,
  lg: 3,
  xl: 4,
  '2xl': 4,
};
