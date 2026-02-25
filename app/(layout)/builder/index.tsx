import { SchemaMarkupScript } from '@/components/schema-markup-script';
import { ISanityLayoutData } from './interface';
import { Header } from './sub-sections/header';
import { Footer } from './sub-sections/footer';
import {
  extractSanityLink,
  extractSanityLinks,
} from '@/lib/extract-sanity-link';
import { IFooter, ISocialLink } from './sub-sections/footer/interface';
import { IHeader, ISubMenu } from './sub-sections/header/interface';

export interface ILayoutBuilderProps {
  data: ISanityLayoutData;
  children: React.ReactNode;
}

export default function LayoutBuilder({ data, children }: ILayoutBuilderProps) {
  const headerData: IHeader = {
    menuLinks:
      data.header.menuLinks && data.header.menuLinks.length > 0
        ? data.header.menuLinks.map((link) => {
            if ('title' in link) {
              const megaMenuLinks = extractSanityLinks(link.links);

              return {
                title: link.title,
                items: megaMenuLinks,
              } satisfies ISubMenu;
            } else {
              const generatedLink = extractSanityLink(link);
              if (generatedLink) {
                return generatedLink;
              } else {
                return {
                  disabled: true,
                  href: '/',
                };
              }
            }
          })
        : [],
    cta: extractSanityLink(data.header.ctaButton),
  };

  const extractedSocialLinks: ISocialLink[] | undefined =
    data.footer.socialLinks && data.footer.socialLinks.length > 0
      ? data.footer.socialLinks.map((socialLink) => {
          return {
            platform: socialLink.platform,
            href: socialLink.link,
          } satisfies ISocialLink;
        })
      : undefined;

  const footerData: IFooter = {
    mainLinks: extractSanityLinks(data.footer.mainLinks),
    address: data.footer.address || '',
    copyrightText: data.footer.copyrightText || '',
    baseLinks: extractSanityLinks(data.footer.baseLinks),
    socialLinks: extractedSocialLinks,
  };

  return (
    <>
      {data.schemaMarkupDefinitions && (
        <SchemaMarkupScript schemaMarkups={data.schemaMarkupDefinitions} />
      )}
      <Header {...headerData} />
      {children}
      <Footer {...footerData} />
    </>
  );
}
