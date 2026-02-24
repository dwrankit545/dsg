import { IFormStatusState } from '../interface';

export const validateContactForm = (
  formData: FormData
): IFormStatusState | undefined => {
  // Initialize an error object to collect validation errors
  const errors: IFormStatusState['error'] = {};

  const email = formData.get('email');
  /**
   * The following email regex allows
   * - any characters except whitespace and '@' before '@'
   * - any characters except whitespace and '@' after '@' and before '.'
   * - any characters except whitespace and '@' after '.'
   */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.toString())) {
    errors.email = 'Please enter a valid email address';
  }

  const fname = formData.get('fname');
  if (!fname) {
    errors.fname = 'First name is required';
  }

  const lname = formData.get('lname');
  if (!lname) {
    errors.lname = 'Last name is required';
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
