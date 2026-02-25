import { ContactForm } from '@/components/forms/contact-form';
import { ContactInfo } from './contact-info';
import { IContactInfo } from './contact-info/interface';
import { IContactSection } from './interface';

export function ContactFormSection({ contactInfo }: IContactSection) {
  const contactFormData: IContactInfo = {
    email: contactInfo.email,
    address: contactInfo.address,
    contactNumber: contactInfo.phone,
  };
  return (
    <section className="section-padding-primary">
      <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-40">
        <ContactInfo {...contactFormData} />
        <ContactForm />
      </div>
    </section>
  );
}
