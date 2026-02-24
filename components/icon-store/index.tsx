import { ChevronRight } from 'lucide-react';
import { IIconStore } from './interface';
import { ArrowLeft } from './sub-components/arrow-left';
import { ArrowRight } from './sub-components/arrow-right';
import { ChevronDown } from './sub-components/chevron-down';
import { Hide } from './sub-components/hide';
import { Menu } from './sub-components/menu';
import { SpinnerCircle } from './sub-components/spinner-circle';
import { Tick } from './sub-components/tick';
import { View } from './sub-components/view';
import { cn } from '@/lib/shadcn/utils';
import { Facebook } from './sub-components/facebook';
import { Instagram } from './sub-components/instagram';
import { Linkedin } from './sub-components/linkedin';
import { Twitter } from './sub-components/twitter';
import { Youtube } from './sub-components/youtube';
import { Email } from './sub-components/email';
import { LocationPoint } from './sub-components/location-point';
import { TravelBag } from './sub-components/travel-bag';
import { PDF } from './sub-components/pdf';
import { Search } from './sub-components/search';

interface IIcon {
  iconName: IIconStore['iconName'];
}

/**
 * Renders a specific icon based on the given icon name.
 * @param {IIcon} props - The props containing the icon name.
 * @returns {JSX.Element} - The rendered icon.
 */
function Icon({ iconName }: IIcon): JSX.Element {
  switch (iconName) {
    case 'tick': {
      return <Tick />;
    }
    case 'view': {
      return <View />;
    }
    case 'hide': {
      return <Hide />;
    }
    case 'spinner-circle': {
      return <SpinnerCircle />;
    }
    case 'chevron-down': {
      return <ChevronDown />;
    }
    case 'menu': {
      return <Menu />;
    }
    case 'arrow-left': {
      return <ArrowLeft />;
    }
    case 'arrow-right': {
      return <ArrowRight />;
    }
    case 'chevron-right': {
      return <ChevronRight />;
    }
    case 'facebook': {
      return <Facebook />;
    }
    case 'instagram': {
      return <Instagram />;
    }
    case 'linkedin': {
      return <Linkedin />;
    }
    case 'twitter': {
      return <Twitter />;
    }
    case 'youtube': {
      return <Youtube />;
    }
    case 'email': {
      return <Email />;
    }
    case 'location-point': {
      return <LocationPoint />;
    }
    case 'travel-bag': {
      return <TravelBag />;
    }
    case 'pdf': {
      return <PDF />;
    }
    case 'search': {
      return <Search />;
    }

    default:
      /**
       * If you see an error here, it means you have
       * updated the `IconNames` type but you have not updated this switch case
       */
      const unreachable: never = iconName;
      throw `Unregistered Icon: ${unreachable}`;
  }
}

/**
 * Renders an icon component with specified properties.
 * @param {IIconStore} props - The props for the icon component.
 * @returns {JSX.Element} - The rendered icon component.
 */
export function IconStore({ iconName, className }: IIconStore): JSX.Element {
  return (
    <span className={cn('inline-grid leading-none text-inherit', className)}>
      <Icon iconName={iconName} />
    </span>
  );
}
