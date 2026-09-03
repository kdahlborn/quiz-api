import Joi from 'joi';
import { z } from 'zod';

// ZOD
export const answerSchema = z.object({
    answer: z
        .string({ message: 'answer must be a string' })
        .trim()
        .toLowerCase()
        .pipe(
            z.enum(['a', 'b', 'c', 'd'], {
                message: 'answer must be a, b, c or d',
            }),
        ),
});

// JOI
// export const answerSchema = Joi.object({
//     answer: Joi.string()
//         .trim()
//         .lowercase()
//         .valid('a', 'b', 'c', 'd')
//         .required()
//         .messages({
//             'string.base': 'Answer must be a string',
//             'string.empty': 'Answer is required',
//             'any.only': 'Answer must be a, b, c or d',
//             'any.required': 'Answer is required',
//         }),
// });
