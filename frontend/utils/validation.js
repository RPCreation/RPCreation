import { z } from 'zod';

const expSchema = z.object({
  company: z.string().min(1),
  title: z.string().min(1),
  duration: z.string().min(1),
  responsibilities: z.array(z.string())
});

const eduSchema = z.object({
  degree: z.string().min(1),
  institution: z.string().min(1),
  year: z.string().min(1),
  score: z.string().optional()
});

export const resumeSchema = z.object({
  personal: z.object({
    fullName: z.string().min(2, 'Full name is required'),
    role: z.string().min(2),
    summary: z.string().min(20),
    phone: z.string().min(8),
    email: z.string().email(),
    location: z.string().min(2),
    linkedin: z.string().optional(),
    portfolio: z.string().optional(),
    github: z.string().optional()
  }),
  experience: z.array(expSchema).min(1),
  education: z.array(eduSchema).min(1)
});
