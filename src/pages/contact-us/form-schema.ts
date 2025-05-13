import { z } from "zod";

export type ContactFormSchemaProps = z.infer<typeof contactFormSchema>;

export const contactFormSchema = z.object({
  name: z.string({ required_error: "required-field" }).min(1, "required-field"),
  company: z
    .string({ required_error: "required-field" })
    .min(1, "required-field"),
  email: z
    .string({ required_error: "required-field" })
    .email({ message: "email-field" }),
  message: z
    .string({ required_error: "required-field" })
    .min(1, "required-field"),
});
