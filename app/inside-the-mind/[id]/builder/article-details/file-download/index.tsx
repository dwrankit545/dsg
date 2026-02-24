import { PortableTextComponent } from '@/components/portable-text';
import { ISanityInsideTheMindArticlePageQueryResponse } from '../../interface';
import { IconStore } from '@/components/icon-store';
import { Typography } from '@/components/typography';
import { CustomLink } from '@/components/custom-link';

export function FileDownloadPart({
  downloadableFile,
  downloadTextContent,
}: Pick<
  ISanityInsideTheMindArticlePageQueryResponse,
  'downloadableFile' | 'downloadTextContent'
>) {
  return (
    <>
      {downloadableFile && (
        <div className="mt-[1.875rem] flex flex-col gap-5 lg:mt-[3.125rem]">
          {downloadTextContent && (
            <PortableTextComponent content={downloadTextContent} />
          )}

          <div className="flex flex-row gap-5">
            <IconStore iconName="pdf" />
            <div className="flex flex-col gap-1">
              <Typography size="p1" className="text-gray-dark">
                {downloadableFile.label}
              </Typography>
              <Typography size="s1" className="text-primary-light">
                <CustomLink
                  href={downloadableFile.downloadLink}
                  disabled={false}
                  label={'Download File'}
                />
              </Typography>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
