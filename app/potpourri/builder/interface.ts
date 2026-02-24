import { ISanityPotpourriArticleCard } from '@/backend/sanity/fragments/potpourri-article/interface';
import { ISanityCommonPageProps } from '@/backend/sanity/fragments/root/page/interface';

export interface ISanityPotpourriPageQueryResponse
  extends ISanityCommonPageProps {
  articles?: ISanityPotpourriArticleCard<string>[];
}
