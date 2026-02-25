'use server';

import { SendMailOptions } from 'nodemailer';
import { IFormStatusState } from '../interface';
import { validateRecaptchaToken } from '@/lib/validate-recaptcha-token';
import { sendMail } from '@/lib/send-mail';

const failedFormState: IFormStatusState = {
  success: false,
  message: 'Form submission failed. Please try again later.',
};

export async function handleNewsletterFormAction(
  token: string | undefined,
  formData: FormData
): Promise<IFormStatusState> {
  if (!token) {
    console.error('reCaptcha token not found.');
    return failedFormState;
  }

  const validate = await validateRecaptchaToken(token);

  if (!validate) {
    console.error('reCaptcha validate response invalid.');
    return failedFormState;
  }

  if (validate.success == true) {
    // If validation passes, proceed with form processing
    try {
      const emailAddress = formData.get('emailAddress');

      const mailOptions: SendMailOptions = {
        subject: `Newsletter Subscriber`,
        html: `
        <p>A user has subscribed for the newsletter!</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
      `,
      };

      await sendMail(mailOptions);

      return {
        success: true,
        message: 'Form successfully submitted.',
      };
    } catch (error) {
      console.error(error);
      return failedFormState;
    }
  } else {
    console.error('reCaptcha validation failed.');
    return failedFormState;
  }
}
