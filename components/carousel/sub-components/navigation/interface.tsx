export interface ICarouselNavigation {
  isDisabled: boolean;
  direction: 'prev' | 'next';
  onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
