import { sendEmail } from '@/utiles/email';

export async function saveContact(data) {
  try {
    // the previous database layer persistence has been removed. Contact submissions are
    // delivered directly by email, which works with Netlify's serverless runtime.
    await sendEmail(data);
    return true;
  } catch (error) {
    console.error('Error in Contact Service:', error.message);
    throw new Error('Failed to submit contact form.');
  }
}
