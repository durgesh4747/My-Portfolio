"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contactFormEmail";
import { FormValidation } from "@/lib/FormValidation";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    type?: string[];
    currency?: string[];
    budget?: string[];
    message?: string[];
  };
  data?: {
    name?: string;
    email?: string;
    type?: string;
    budget?: string;
    currency?: string;
    message?: string;
  };
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const type = (formData.get("type") as string) || "";
  const budget = formData.get("budget") as string;
  const currency = formData.get("currency") as string;
  const message = formData.get("message") as string;
  const botTrap = formData.get("_security_honeypot");

  const validatedFields = FormValidation.safeParse({
    name,
    email,
    type,
    currency,
    budget,
    message,
  });

  if (botTrap) {
    return { success: true, message: "System_Secure: Bot_Intercepted. YOU FOOL!" };
  }

  if (!validatedFields.success) {
    console.log(
      "Validation Failed:",
      validatedFields.error.flatten().fieldErrors,
    );
    return {
      success: false,
      message: "Please Enter Valid Details!",
      errors: validatedFields.error.flatten().fieldErrors,
      data: { name, email, type, budget, currency, message },
    };
  }

  try {
    // Render the Email Template
    const emailContent = React.createElement(ContactFormEmail, {
      name,
      email,
      type,
      currency,
      budget,
      message,
    });

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <contact@durgeshdev.in>",
      to: "durgesh@durgeshdev.in",
      replyTo: email,
      subject: `New Message from ${name}`,
      react: emailContent,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        success: false,
        message: "Failed to send email. Server error.",
        errors: {},
      };
    }
    return {
      success: true,
      message: "Email sent successfully!",
      errors: {},
    };
  } catch (error) {
    console.error("Crash Error:", error);
    return {
      success: false,
      message: "Something went wrong on the server.",
      errors: {},
    };
  }
};
