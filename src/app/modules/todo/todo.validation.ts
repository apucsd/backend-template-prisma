import z from 'zod';

export const createTodoZodSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is required',
        }),
        description: z.string(),
        completed: z.boolean().optional().default(false),
        priority: z.enum(['low', 'medium', 'high']).optional(),
        // assignedTo: z.string({
        //     required_error: 'assignedTo is required',
        // }),
    }),
});

export const TodoValidation = {
    createTodoZodSchema,
};
