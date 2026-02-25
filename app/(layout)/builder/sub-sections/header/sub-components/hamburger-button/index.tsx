import { cn } from '@/lib/shadcn/utils';

interface IHamBurgerButton {
  showMenu: boolean;
  clickHandler: () => void;
}

export const HamBurgerButton = ({
  showMenu,
  clickHandler,
}: IHamBurgerButton) => {
  return (
    <button
      className="relative z-[111] block h-9 w-10 p-2 lg:hidden"
      onClick={clickHandler}
    >
      <span className="relative block h-full w-full">
        <span
          className={cn(
            'absolute left-0 top-0 block h-[2px] w-full origin-left bg-black transition-all animate-in',
            showMenu ? 'scale-x-0 bg-white' : 'scale-x-100'
          )}
        />
        <span
          className={cn(
            'absolute top-[calc(50%-1px)] block h-[2px] w-full bg-black transition-all animate-in',
            showMenu ? '-rotate-45 bg-white' : 'rotate-0'
          )}
        />
        <span
          className={cn(
            'absolute top-[calc(50%-1px)] block h-[2px] w-full bg-black transition-all animate-in',
            showMenu ? 'rotate-45 bg-white' : 'rotate-0'
          )}
        />
        <span
          className={cn(
            'absolute bottom-0 left-0 block h-[2px] w-full origin-right bg-black transition-all animate-in',
            showMenu ? 'scale-x-0 bg-white' : 'scale-x-100'
          )}
        />
      </span>
    </button>
  );
};
