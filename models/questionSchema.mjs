import Joi from 'joi';
import { z } from 'zod';

export const questionSchema = Joi.object({
    category: Joi.string().trim().lowercase().required(),

    difficulty: Joi.string()
        .trim()
        .lowercase()
        .valid('lätt', 'medel', 'svår')
        .required(),

    question: Joi.string().trim().min(5).required(),

    options: Joi.object({
        a: Joi.string().trim().required(),
        b: Joi.string().trim().required(),
        c: Joi.string().trim().required(),
        d: Joi.string().trim().required(),
    }).required(),

    correctAnswer: Joi.string()
        .trim()
        .lowercase()
        .valid('a', 'b', 'c', 'd')
        .required(),
});

// export const questionSchema = z.object({
//     category: z.string().min(1, 'Category must be a string!!'),
//     difficulty: z
//         .string()
//         .min(1, 'Difficulty must be a string!!')
//         .validate((val) => ['lätt', 'medel', 'svår'].includes(val), {
//             message: 'Difficulty must be one of: lätt, medel, svår',
//         }),
//     question: z.string().min(5, 'Question must be a string!!'),
//     options: z
//         .object({
//             a: z.string().min(1, 'Option A must be a string!!'),
//             b: z.string().min(1, 'Option B must be a string!!'),
//             c: z.string().min(1, 'Option C must be a string!!'),
//             d: z.string().min(1, 'Option D must be a string!!'),
//         })
//         .required(),
//     correctAnswer: z
//         .string()
//         .min(1, 'Correct answer must be a string!!')
//         .validate((val) => ['a', 'b', 'c', 'd'].includes(val), {
//             message: 'Correct answer must be one of: a, b, c, d',
//         }),
// });
