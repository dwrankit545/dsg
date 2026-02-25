export interface ICarouselPagination {
  totalCount: number;
  onClick: (newIndex: number) => void;
  currentSlide: number;
}
