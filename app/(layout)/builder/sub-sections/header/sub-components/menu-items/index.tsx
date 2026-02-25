import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './menu-items.module.css';
import { CustomButton } from '@/components/button';
import { cn } from '@/lib/shadcn/utils';
import { IHeader } from '../../interface';
import { SubMenuItems } from '../sub-menu-items';
import { IconStore } from '@/components/icon-store';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { Typography } from '@/components/typography';

export interface IMenuItems extends IHeader {
  clickHandler?: () => void;
}

export function MenuItems({ menuLinks, cta, clickHandler }: IMenuItems) {
  const [activeId, setActiveId] = useState('');
  const currentPath = usePathname();
  return (
    <div className="flex w-full flex-col items-start gap-10 lg:relative lg:w-auto lg:flex-row lg:items-center lg:gap-7 xl:gap-9">
      {menuLinks && !!menuLinks.length && (
        <ul className="flex flex-col items-start gap-9 lg:flex-row lg:items-center lg:gap-5 xl:gap-7">
          {menuLinks.map((link, i) => {
            const ID = `id-${i}`;
            return (
              <li
                className={cn(
                  // Layout
                  // Note: Here using the extra mt-2 for match the design
                  'group box-border cursor-pointer text-xl font-normal lg:mt-2 lg:cursor-default lg:text-base lg:font-medium',
                  // Color
                  'text-white lg:text-black lg:hover:text-primary-dark'
                )}
                key={i}
              >
                {'title' in link ? (
                  /** Menu Item with sub-menu **/
                  <span
                    className={cn(
                      // Layout
                      // Note: Here using the extra pb-2 for match the design
                      'relative block rounded-t-xl lg:px-3 lg:pb-6 lg:pt-4',
                      // Animation
                      'transition-all animate-in lg:group-hover:bg-primary-light lg:group-hover:text-white'
                    )}
                    onClick={() =>
                      setActiveId((prev) => (prev == ID ? '' : ID))
                    }
                  >
                    <span
                      className={cn(
                        // Layout
                        'absolute -right-6 bottom-0 hidden h-5 w-6 lg:block',
                        // Animation
                        'invisible opacity-0 transition-all animate-in group-hover:visible group-hover:opacity-100',
                        styles['sub-menu-curve']
                      )}
                    />
                    <span className="z-111 relative flex select-none items-center">
                      <Typography size="p1" className="lg:font-medium">
                        {link.title}
                      </Typography>
                      <IconStore
                        iconName="chevron-right"
                        className={cn(
                          'block text-xl text-white transition-all animate-in lg:hidden',
                          activeId == ID ? 'rotate-90' : 'rotate-0'
                        )}
                      />
                    </span>
                    {/* Render SubMenuItems multiple for desktop and mobile */}
                    {link.items && !!link.items.length && (
                      <>
                        <span className="hidden lg:block">
                          <SubMenuItems
                            items={link.items}
                            clickHandler={clickHandler}
                          />
                        </span>
                        <Accordion
                          className="block lg:hidden"
                          type="multiple"
                          value={[activeId]}
                        >
                          <AccordionItem className="border-0" value={ID}>
                            <AccordionContent>
                              <SubMenuItems
                                items={link.items}
                                clickHandler={clickHandler}
                              />
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </>
                    )}
                  </span>
                ) : (
                  <Link
                    {...link}
                    target="_blank"
                    className={`block transition-all animate-in hover:text-primary-light lg:px-3 lg:pb-6 lg:pt-4 ${link.href == currentPath ? 'md:text-primary-light' : ''}`}
                  >
                    <Typography size="p1" className="lg:font-medium">
                      {link.label}
                    </Typography>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {cta && (
        <>
          <div className="hidden lg:block">
            <CustomButton type="link" colorScheme={'primary'} {...cta}>
              {cta.label}
            </CustomButton>
          </div>
          <div className="block lg:hidden">
            <CustomButton colorScheme="secondary" type="link" {...cta}>
              {cta.label}
            </CustomButton>
          </div>
        </>
      )}
    </div>
  );
}
