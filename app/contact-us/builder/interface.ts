import { ISanityCommonPageProps } from '@/backend/sanity/fragments/root/page/interface';

export interface ISanityContactUsPageQueryResponse
  extends ISanityCommonPageProps {
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}
