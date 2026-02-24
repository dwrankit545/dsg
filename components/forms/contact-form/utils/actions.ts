'use server';

import { SendMailOptions } from 'nodemailer';
import { IFormStatusState } from '../interface';
import { validateRecaptchaToken } from '@/lib/validate-recaptcha-token';
import { sendMail } from '@/lib/send-mail';

const failedFormState: IFormStatusState = {
  success: false,
  message: 'Form submission failed. Please try again later.',
};

export async function handleContactFormAction(
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
      const fname = formData.get('fname');
      const lname = formData.get('lname');
      const email = formData.get('email');
      const comment = formData.get('comment');

      const mailOptions: SendMailOptions = {
        subject: `Contact Form submitted by ${fname} ${lname}`,
        html: `
        <p><strong>Comment:</strong> ${comment}</p>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      `,
      };

      await sendMail(mailOptions);
console.log("token", token);
      return {
        success: true,
        message: 'Form successfully submitted.',
      };
    } catch (error) {
      console.error(error);
      return failedFormState;
    }
  } else {
    console.log('validate', validate);
    console.log('token', token);
    console.error('reCaptcha validation failed.');
    return failedFormState;
  }
}
