import { sendUnsubscribeEmail } from '@/utiles/email';

export async function addEmailToUnsubscribe({ email, reason }) {
  try {
    // the previous database layer persistence has been removed. Unsubscribe requests are
    // delivered directly by email so they can be processed without a database.
    await sendUnsubscribeEmail({ email, reason });
    return true;
  } catch (error) {
    console.error('Error in unsubscribe service:', error.message);
    throw new Error(error.message || 'Failed to unsubscribe email');
  }
}
