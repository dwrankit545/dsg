interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
}

export async function validateRecaptchaToken(
  token: string
): Promise<RecaptchaResponse | undefined> {
  const captchaSecret = process.env.CAPTCHA_SECRET_KEY;

  if (!captchaSecret) {
    return undefined;
  }

  return await fetch(
    'https://www.google.com/recaptcha/api/siteverify?' +
      new URLSearchParams({
        secret: captchaSecret,
        response: token,
      }),
    {
      method: 'POST',
    }
  ).then((res) => res.json());
}
