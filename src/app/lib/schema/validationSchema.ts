import { z } from 'zod';
import { ZodIssue } from 'zod';

const step1Schema = z.object({
  name: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  mobNo: z.string().refine((val) => /^\d{10}$/.test(val), "Mobile number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6,"Invalid password"),
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
    workExp: z.string().refine((val) => /^\d+$/.test(val), "Work experience must be a number"),
    adharNo: z.string().refine((val) => /^\d{12}$/.test(val), "Aadhaar number must be 12 digits"),
    pancard: z.string().optional(),
});

const role = z.object({role: z.string().default('artist')})

export const artistMessageSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  eventDate: z.string(),
  message: z.string().min(10),
  otp: z.string().min(6).max(6),
  role: z.literal("artist"),
});


export const artistSchema = step1Schema.merge(step2Schema).merge(step3Schema).merge(role).merge(artistMessageSchema);

export type ArtistFormData = z.infer<typeof artistSchema>;

export type FormState = {
  message: 'success' | 'validation_error' | 'error'| '';
  errors?: ZodIssue[];
};

export { step1Schema, step2Schema, step3Schema };