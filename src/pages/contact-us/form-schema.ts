import { z } from "zod";

export type ContactFormSchemaProps = z.infer<typeof contactFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(1, "required-field"),
  company: z.string().min(1, "required-field"),
  email: z.email({ error: "email-field" }),
  message: z.string().min(1, "required-field"),
});
