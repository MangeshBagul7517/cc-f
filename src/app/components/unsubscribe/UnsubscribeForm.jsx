"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import InputField from "../comman/form/InputField";
import Button1 from "../comman/Buttons/Button1";
import { FaArrowRight } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function UnsubscribeForm({ email: initialEmail }) {
  const [email, setEmail] = useState(initialEmail || "");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [otherReasonText, setOtherReasonText] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reasonError, setReasonError] = useState("");

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  useEffect(() => {
    emailjs.init('nuFpPlSgLJ9W0fiBk');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!reason) {
      setReasonError("Please select a reason for unsubscribing.");
      hasError = true;
    } else {
      setReasonError("");
    }

    if (hasError) return;

    setFormLoading(true);
    try {
      const unsubscribeReason = reason === "Other" ? otherReasonText : reason;
      const response = await axios.post("/api/unsubscribe", { email, reason:unsubscribeReason });
      if (response.status === 200 || response.status === 201) {

        await emailjs.send(
          'service_pw50qx7', // Your EmailJS service ID
          'template_lhvwk1t', // Your EmailJS template ID
          {
            to_email: 'sillarkaramit@gmail.com',
            from_email: email,
            unsubscribe_reason: unsubscribeReason,
          },
          'nuFpPlSgLJ9W0fiBk' // Your EmailJS public key
        );
        toast.success(response.data.message);
        setMessage(response.data.message);
      }
    } catch (error) {
      const errorMsg =
        (error.response && error.response.data && error.response.data.error) ||
        "Something went wrong";
      toast.error(errorMsg);
      setMessage(errorMsg);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Unsubscribe from Emails
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter your email and select a reason to stop receiving future emails.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email Address"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={!!initialEmail}
            error={emailError}
          />
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Reason for Unsubscribing</p>
            <div className="space-y-2 mt-2">
              {["No longer interested in the content", "Too many emails", "Content not relevant", "Found a better alternative", "Other"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="unsubscribe-reason"
                    value={option}
                    checked={reason === option}
                    onChange={(e) => setReason(e.target.value)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {reason === "Other" && (
              <InputField
                label="Please specify your reason (optional)"
                type="text"
                id="other-reason"
                name="other-reason"
                value={otherReasonText}
                onChange={(e) => setOtherReasonText(e.target.value)}
                placeholder="Enter your reason"
              />
            )}
            {reasonError && <p className="text-red-500 text-sm mt-2">{reasonError}</p>}
          </div>
          <p className="text-sm text-gray-500">This action cannot be undone.</p>
          <div className="flex justify-end">
            <Button1
              text="Unsubscribe"
              isLoading={formLoading}
              variant="primary"
              icon={FaArrowRight}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
