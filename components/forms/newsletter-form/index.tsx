'use client';

import { CustomButton } from '@/components/button';
import { InputControl } from '@/components/inputs/input-control';
import { INewsletterSection } from '@/buildable-sections/newsletter/interface';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FormState, IFormStatusState } from './interface';
import { useFormState, useFormStatus } from 'react-dom';
import { Typography } from '@/components/typography';
import { cn } from '@/lib/shadcn/utils';
import { handleNewsletterFormAction } from './utils/actions';
import { generateReCaptchaToken } from '@/lib/generate-recaptcha-token';
import { validateNewsletterForm } from './utils/validate';

const initialFormValue: FormState = {
  emailAddress: '',
};

const initialFormStatusState: IFormStatusState = {
  success: true,
  message: '',
};

export const NewsletterForm = ({
  ctaLabel,
}: Pick<INewsletterSection, 'ctaLabel'>) => {
  const handleSubmit = async (
    prevState: IFormStatusState,
    formData: FormData
  ) => {
    const formValidation = validateNewsletterForm(formData);
    if (formValidation) {
      return formValidation;
    }
    const token = await generateReCaptchaToken('newsletter');
    return handleNewsletterFormAction(token, formData);
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
      action={formAction}
      onReset={(e: FormEvent) => {
        e.preventDefault();
        handleReset();
      }}
      className="flex w-full flex-col gap-[0.5rem] lg:flex-row"
    >
      <InputControl
        name="emailAddress"
        type="email"
        placeholder="Email Address"
        value={formState.emailAddress}
        onInputChange={handleFormElementChange}
        className="py-[0.875rem] pl-[1.25rem]"
        required
      />

      <CustomButton
        type="submit"
        colorScheme="secondary"
        disabled={false}
        className="whitespace-nowrap"
      >
        {ctaLabel || 'Subscribe'}
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
