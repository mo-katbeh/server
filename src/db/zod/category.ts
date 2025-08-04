import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(1).max(50),

});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
