import { z } from 'zod';

const step1Schema = z.object({
  name: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  mobNo: z.string().length(10, "Mobile number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  gender: z.string().min(1, "Gender is required"),
});

const step2Schema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  region: z.string().min(1, "Region is required"),
});

const step3Schema = z.object({
    shopActLicence: z.string().optional(),
    workExp: z.string().min(1, "Work experience is required"),
    adharNo: z.string().length(12, "Adhar number must be 12 digits"),
    pancard: z.string().optional(),
  });

export const artistSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export type ArtistFormData = z.infer<typeof artistSchema>;

export type FormState = {
  message: string;
  errors?: z.ZodIssue[];
};

export { step1Schema, step2Schema, step3Schema };