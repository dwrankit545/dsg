import { ContactForm } from '@/components/forms/contact-form';
import { Typography } from '@/components/typography';

export function FormPart() {
  return (
    <div className="mt-[1.875rem] lg:mt-[3.125rem]">
      <Typography size="h3" className="text-gray-dark">
        {
          "Let DSG assess your company's Day in the Life of ... profile @ no cost"
        }
      </Typography>
      <Typography size="p2" className="mt-5 text-gray-dark">
        {'* Indicates required field'}
      </Typography>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:mt-8">
        <div className="col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
