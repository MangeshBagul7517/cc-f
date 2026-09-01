import unsubscribeModal from "../models/unsubscribe.modal";

export async function addEmailToUnsubscribe({ email, reason }) {
  try {
    console.log(email, "email");

    // Check if email is already unsubscribed
    const existingEmail = await unsubscribeModal.findOne({ email });
    if (existingEmail) {
      throw new Error("Email already unsubscribed");
    }

    console.log(email, reason, "email, reason");

    // Save the new unsubscribe entry
    const unsubscribeEntry = await unsubscribeModal.create({ email, reason });

  

    return unsubscribeEntry;
  } catch (error) {
    console.error("Error in addEmailToUnsubscribe:", error);
    throw new Error(error.message || "Failed to unsubscribe email");
  }
}
