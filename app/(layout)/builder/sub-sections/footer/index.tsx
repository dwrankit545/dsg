import { Typography } from '@/components/typography';
import { IFooter } from './interface';
import { CustomLink } from '@/components/custom-link';
import { BrandLogo } from '@/public/brand/logo';
import { IconStore } from '@/components/icon-store';
import { IconName } from '@/components/icon-store/interface';
import Link from 'next/link';

/** This is the footer section. It should render at the bottom of every page. */
export function Footer({
  address,
  copyrightText,
  mainLinks,
  baseLinks,
  socialLinks,
}: IFooter) {
  return (
    <footer className="section-padding-primary border-t-[1px] border-t-gray-lighter">
      <div className="container">
        <div className="text-primary-dark">
          {mainLinks && mainLinks.length > 0 && (
            <ul className="grid grid-cols-1 justify-between gap-y-[1.375rem] md:grid-cols-3">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Typography size="p1">
                    <CustomLink
                      href={link.href}
                      disabled={link.disabled}
                      label={link.label}
                    />
                  </Typography>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16 items-end justify-between md:mt-6 md:flex">
            <BrandLogo
              variant="default"
              classNames="max-h-[4rem] max-w-[13.875rem]"
            />

            <Typography size="p2" className="mt-[1.625rem] text-gray-dark">
              {address}
            </Typography>
            {socialLinks && socialLinks.length > 0 && (
              <div className="mt-8 flex flex-row gap-x-3">
                {socialLinks.map((sLink, index) => (
                  <Link key={index} href={sLink.href} target="_blank">
                    <IconStore
                      iconName={sLink.platform.toLowerCase() as IconName}
                      className="text-[25px] text-primary-light transition-colors duration-200 ease-in-out hover:text-primary-dark"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <hr className="my-8 bg-gray-dark md:my-5" />

          <div className="grid-cols-3 items-center md:grid">
            <Typography size="p1" className="text-gray-dark">
              {copyrightText}
            </Typography>
            <div className="col-span-2 mt-7 flex flex-col justify-end gap-y-4 md:mt-0 md:flex-row md:flex-wrap md:gap-x-[4.125rem]">
              {baseLinks &&
                baseLinks.length > 0 &&
                baseLinks.map((baseLink, index) => (
                  <Link key={index} href={baseLink.href} target="_blank">
                    <Typography size="p1" className="text-gray-dark">
                      {baseLink.label}
                    </Typography>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
