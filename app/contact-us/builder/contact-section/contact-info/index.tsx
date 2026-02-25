import Link from 'next/link';
import { IContactInfo } from './interface';
import { getRelativeURL } from '@/lib/routes';
import { BrandLogo } from '@/public/brand/logo';
import { Typography } from '@/components/typography';
import { IconStore } from '@/components/icon-store';

export const ContactInfo = ({
  address,
  contactNumber,
  email,
}: IContactInfo) => {
  return (
    <div className="flex flex-col">
      <Link href={getRelativeURL('homePage')} target="_blank" className="w-fit">
        <BrandLogo
          variant={'default'}
          classNames="w-[13.75rem] md:w-[20.625rem] md:max-h-[6rem]"
        />
        <span className="sr-only">Digital Solution Group, LLC</span>
      </Link>
      <Typography size="h3" className="mt-[3.125rem]">
        {'Digital Solution Group, LLC'}
      </Typography>

      <div className="mt-5 flex flex-col gap-3 md:mt-[1.875rem]">
        <div className="flex flex-row flex-nowrap gap-2">
          <IconStore iconName="email" className="text-primary-light" />
          <Typography size="p1">
            {`Email: `}
            <Link
              href={`mailto:${email}`}
              className="text-primary-light underline"
            >
              {email}
            </Link>
          </Typography>
        </div>

        <div className="flex flex-row flex-nowrap gap-2">
          <IconStore iconName="location-point" className="text-primary-light" />
          <Typography size="p1">{address}</Typography>
        </div>

        <div className="flex flex-row flex-nowrap gap-2">
          <IconStore iconName="travel-bag" className="text-primary-light" />
          <Typography size="p1">
            {`Cell: `}
            <Link href={`tel:${contactNumber}`}>{contactNumber}</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};
