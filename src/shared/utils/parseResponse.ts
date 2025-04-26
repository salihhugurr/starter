import { z } from 'zod';

export const parseResponse = async <T>(response: Response, schema: z.ZodSchema<T>): Promise<T> => {
  try {
    const data = await response.json();
    const result = schema.safeParse(data);

    if (!result.success) {
      console.error('Parse response error:', result.error);
      throw new Error(result.error.message);
    }

    return result.data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Zod validation error:', error.errors);
    } else if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    throw error;
  }
};
