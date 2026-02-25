import { ICarousel } from './interface';

export const carouselOptions: Omit<ICarousel, 'children'> = {
  loop: true,
  hasNavigation: true,
  totalItem: 6,
};
