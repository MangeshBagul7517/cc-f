import Joi from "joi";

export const unsubscribeSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required.",
    "string.email": "Please enter a valid email address.",
    "any.required": "Email is required.",
  }),
  reason: Joi.string().required().messages({
    "string.empty": "Reason is required.",
    "any.required": "Reason is required.",
  }),
});

