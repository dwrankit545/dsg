export type FormState = {
  emailAddress: string;
};

export interface IFormStatusState {
  success: boolean;
  message: string;
  error?: Partial<Record<keyof FormState, string>>;
}
