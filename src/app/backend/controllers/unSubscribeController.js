import { contactValidationSchema } from '../validators/contactValidator';
import { saveContact } from '../services/contactService';
import { unsubscribeSchema } from '../validators/unSubscribeValidator';
import { addEmailToUnsubscribe } from '../services/addEmailToUnsubscribeService';

export async function unSubscribeController(data) {
  try {
    console.log(data , "data in controllelr")
    // Validate the input data using Joi
    const { error } = unsubscribeSchema.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((err) => err.message).join(', ');
      throw new Error(validationErrors);
    }
    console.log("calling to the services")
    // Call the service to handle saving the data
    const result = await addEmailToUnsubscribe(data);
    return 'Email unsubscribed successfully!';
  } catch (error) {
    console.error('Error in Controller:', error.message);
    throw new Error(error.message);
  }
}
