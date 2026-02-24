import { DefaultLogo } from './default-logo';
import { LightLogo } from './light-logo';

interface IBrandLogo {
  variant: 'default' | 'light';
  classNames?: string;
}

export const BrandLogo = ({ variant, classNames }: IBrandLogo) => {
  switch (variant) {
    case 'light':
      return (
        <div className={classNames}>
          <LightLogo />
        </div>
      );
    default:
      return (
        <div className={classNames}>
          <DefaultLogo />
        </div>
      );
  }
};
