export async function generateReCaptchaToken(
  action: string
): Promise<string | undefined> {
  return new Promise((resolve) => {
    const captchaSiteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

    if (!captchaSiteKey) {
      return resolve(undefined);
    }

    grecaptcha.ready(async () => {
      await grecaptcha
        .execute(captchaSiteKey, { action })
        .then((token: string) => {
          resolve(token);
        });
    });
  });
}
