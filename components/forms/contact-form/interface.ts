export type FormState = {
  fname: string;
  lname: string;
  email: string;
  comment?: string;
};

export interface IFormStatusState {
  success: boolean;
  message: string;
  error?: Partial<Record<keyof FormState, string>>;
}
