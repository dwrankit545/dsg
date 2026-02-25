'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import { FormState, IFormStatusState } from './interface';
import { InputControl } from '@/components/inputs/input-control';
import { Typography } from '@/components/typography';
import { CustomButton } from '@/components/button';
import { cn } from '@/lib/shadcn/utils';
import { TextareaControl } from '@/components/inputs/textarea-control';
import { handleContactFormAction } from './utils/actions';
import { generateReCaptchaToken } from '@/lib/generate-recaptcha-token';
import { validateContactForm } from './utils/validate';

const initialFormValue: FormState = {
  fname: '',
  lname: '',
  email: '',
  comment: '',
};

const initialFormStatusState: IFormStatusState = {
  success: true,
  message: '',
};

export const ContactForm = () => {
  const handleSubmit = async (
    prevState: IFormStatusState,
    formData: FormData
  ) => {
    const formValidation = validateContactForm(formData);
    if (formValidation) {
      return formValidation;
    }
    const token = await generateReCaptchaToken('contact');
    return handleContactFormAction(token, formData);
  };

  const [state, formAction] = useFormState(
    handleSubmit,
    initialFormStatusState
  );
  const [formState, setFormState] = useState<FormState>(initialFormValue);

  const [formSubmitState, setFormSubmitState] =
    useState<IFormStatusState | null>(state);
  /**
   * This useEffect hook is used to synchronize the formSubmitState with the
   * provided state prop. It ensures that the formSubmitState is always
   * up-to-date with the latest state changes. This is particularly important
   * for resetting the form state, as the useFormState hook from react-dom does
   * not provide an option to reset the state directly. When a user clicks the
   * reset button, this hook ensures that all state values, including form
   * success or error states, are cleared.
   */
  useEffect(() => {
    setFormSubmitState(state);
    handleReset();
  }, [state]);

  const { pending } = useFormStatus();

  const handleFormElementChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormState((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleReset = () => {
    setFormState(initialFormValue);
  };

  return (
    <form
      className="grid gap-[1.25rem] md:gap-[2.0625rem]"
      action={formAction}
      onReset={(e: FormEvent) => {
        e.preventDefault();
        handleReset();
      }}
    >
      {/* First Name  */}
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        <InputControl
          name="fname"
          type="text"
          placeholder="First Name*"
          required={true}
          value={formState.fname}
          error={formSubmitState?.error?.fname}
          showErrorMsg={!!formSubmitState?.error?.fname}
          disabled={pending}
          autoComplete="on"
          onInputChange={handleFormElementChange}
          className="rounded-8 bg-gray-lighter"
        />

        {/* Last Name  */}
        <InputControl
          name="lname"
          type="text"
          placeholder="Last Name*"
          value={formState.lname}
          error={formSubmitState?.error?.lname}
          showErrorMsg={!!formSubmitState?.error?.lname}
          disabled={pending}
          autoComplete="on"
          onInputChange={handleFormElementChange}
          className="rounded-8 bg-gray-lighter"
        />
      </div>

      {/* Email  */}
      <InputControl
        name="email"
        type="email"
        placeholder="Email*"
        required={true}
        value={formState.email}
        error={formSubmitState?.error?.email}
        showErrorMsg={!!formSubmitState?.error?.email}
        disabled={pending}
        autoComplete="on"
        onInputChange={handleFormElementChange}
        className="rounded-8 bg-gray-lighter"
      />

      <TextareaControl
        name="comment"
        placeholder="Comment / Information Request"
        required={false}
        value={formState.comment || ''}
        disabled={pending}
        onTextareaChange={handleFormElementChange}
        className="h-[7.75rem] rounded-8 bg-gray-lighter md:h-[8.875rem]"
      />

      {/* Buttons  */}
      <CustomButton
        colorScheme="primary"
        loading={false}
        disabled={pending}
        type="submit"
      >
        Submit
      </CustomButton>

      {/* Render the form submit success and error message */}
      {!pending &&
        // Form submit success
        (formSubmitState?.success ||
          // Form submit failed due to internal server error
          (!formSubmitState?.success && !formSubmitState?.error)) && (
          <Typography
            size="p2"
            className={cn(
              formSubmitState?.success ? 'text-success' : 'text-danger'
            )}
          >
            {formSubmitState?.message}
          </Typography>
        )}
    </form>
  );
};
