import z from 'zod';

export const contactValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Must be at least 2 characters long')
    .regex(/^[a-zA-Z]+$/, 'Must contain only English letters')
    .max(15, 'Cannot exceed 15 characters'),
  lastName: z
    .string()
    .min(2, 'Must be at least 2 characters long')
    .regex(/^[a-zA-Z]+$/, 'Must contain only English letters')
    .max(15, 'Cannot exceed 15 characters'),
  emailAddress: z.string().email('Invalid email address'),
  phoneNumber: z.string().optional(),
  message: z
    .string()
    .min(15, 'Must be at least 15 characters long')
    .max(500, 'Cannot exceed 500 characters')
    .regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]*$/, 'Invalid message'),
  acknowledgeRiskAndLiability: z.boolean().refine((value) => value === true),
});
