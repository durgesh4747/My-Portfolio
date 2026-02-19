import { z } from "zod";

export const FormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name should be within 50 characters" }),
  email: z.string().email({ message: "Enter a vaild email address" }),
  type: z.string().min(1, "Please select a project type"),
  currency: z.string(),
  budget: z
    .string()
    .min(1, "Please select a budget range or a fixed budget.")
    .regex(
      /^[\d\s\-\₹\$\€\£\¤\.\,kK]+$/,
      " Use only numbers and dashes (e.g. 5000-10000 || 5000)",
    ),
  message: z
    .string()
    .min(10, {
      message: "Please enter detailed message (at least 10 character)",
    })
    .max(1000, { message: "Message should not exceed 1000 characters" }),
});
