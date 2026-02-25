import { IFormStatusState } from '../interface';

export const validateNewsletterForm = (
  formData: FormData
): IFormStatusState | undefined => {
  // Initialize an error object to collect validation errors
  const errors: IFormStatusState['error'] = {};

  const emailAddress = formData.get('emailAddress');
  /**
   * The following email regex allows
   * - any characters except whitespace and '@' before '@'
   * - any characters except whitespace and '@' after '@' and before '.'
   * - any characters except whitespace and '@' after '.'
   */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailAddress || !emailRegex.test(emailAddress.toString())) {
    errors.emailAddress = 'Please enter a valid email address';
  }

  // If there are any validation errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Form values are not valid',
      error: errors,
    };
  }
};
