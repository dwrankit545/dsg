'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/public/brand/logo';
import { MenuItems } from './sub-components/menu-items';
import { HamBurgerButton } from './sub-components/hamburger-button';
import { cn } from '@/lib/shadcn/utils';
import { IHeader } from './interface';
import { getRelativeURL } from '@/lib/routes';
import { ScrollArea } from '@/components/ui/scroll-area';

/** This is the header section. This should render at the top of every page. */
export function Header({ menuLinks, cta }: IHeader) {
  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const headerHeight = headerRef.current?.clientHeight || 157;
    if (document) {
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerHeight}px`
      );
    }
  }, [headerRef]);

  const navbarClasses = cn(
    'w-full left-0 right-0 top-0 bg-transparent py-8 z-444 sticky z-[999]',
    [!showMenu && 'bg-white']
  );

  return (
    <header className={navbarClasses} ref={headerRef}>
      <nav>
        <div
          className={cn(
            'container flex w-full items-center justify-between gap-12'
          )}
        >
          <div className="z-[111] w-fit">
            <Link
              href={getRelativeURL('homePage')}
              onClick={() => setShowMenu(false)}
              target="_blank"
            >
              <BrandLogo
                variant={showMenu ? 'light' : 'default'}
                classNames="w-[6.4375rem] md:w-[9.375rem]"
              />
              <span className="sr-only">Digital Solution Group, LLC</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <MenuItems menuLinks={menuLinks} cta={cta} />
          </div>
          <HamBurgerButton
            showMenu={showMenu}
            clickHandler={() => setShowMenu((prev) => !prev)}
          />
        </div>
        {showMenu && (
          <div
            className={
              'absolute left-0 top-0 block h-fit w-full bg-gradient-1 pt-[var(--header-height)] lg:hidden'
            }
          >
            <div className="container">
              <ScrollArea
                scrollBarClassName="pt-4 pb-4 mr-1"
                viewportClassName="relative h-[calc(100vh-var(--header-height))] w-full pb-8"
              >
                <MenuItems
                  menuLinks={menuLinks}
                  cta={cta}
                  clickHandler={() => setShowMenu(false)}
                />
              </ScrollArea>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
