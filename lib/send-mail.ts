import { createTransport, SendMailOptions } from 'nodemailer';

/**
 * The function `sendMail` sends an email using SMTP
 * with the provided mail options and sender/receiver email addresses.
 * @param {SendMailOptions} mailOptions - The `mailOptions` parameter in
 * the `sendMail` function likely contains the email message details
 * such as the subject, body, attachments, and any other relevant
 * information needed to send an email.
 */
export async function sendMail(mailOptions: SendMailOptions) {
  const senderEmailAddress = process.env.SENDER_EMAIL_ADDRESS;
  const senderEmailPassword = process.env.SENDER_EMAIL_PASS;
  const receiverEmailAddress = process.env.RECEIVER_EMAIL_ADDRESS;
  const ccEmailAddress = process.env.CC_EMAIL_ADDRESS;

  // Validate required env vars
  if (!senderEmailAddress) {
    throw new Error('SENDER_EMAIL_ADDRESS environment variable is missing');
  }
  if (!senderEmailPassword) {
    throw new Error('SENDER_EMAIL_PASS environment variable is missing');
  }
  if (!receiverEmailAddress) {
    throw new Error('RECEIVER_EMAIL_ADDRESS environment variable is missing');
  }

  const transporter = createTransport({
    host: 'smtp.office365.com',
    secure: false,
    port: 587,
    auth: {
      user: senderEmailAddress,
      pass: senderEmailPassword,
    },
  });

  const info = await transporter.sendMail({
    ...mailOptions,
    from: senderEmailAddress,
    to: receiverEmailAddress,
    cc: ccEmailAddress,
  });
  return info;
}
