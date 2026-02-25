import { ICustomLink } from '@/components/custom-link/interface';

export interface ISubMenu {
  title: string;
  items?: ICustomLink[];
  clickHandler?: () => void;
}

export interface IHeader {
  menuLinks?: (ICustomLink | ISubMenu)[];
  cta?: ICustomLink;
}
