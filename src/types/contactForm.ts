import { contactValidationSchema } from '@/utils/schemas/contactValidationSchema';
import { z } from 'zod';

type ContactFormDataType = z.infer<typeof contactValidationSchema>;

export default ContactFormDataType;
