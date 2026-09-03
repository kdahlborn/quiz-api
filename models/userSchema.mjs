import joi from 'joi';
import { z } from 'zod';

// ZOD
export const loginSchema = z.object({
    username: z
        .string({ message: 'Username must be a string' })
        .trim()
        .toLowerCase()
        .min(1, 'Username is required'),

    password: z
        .string({ message: 'Password must be a string' })
        .trim()
        .min(1, 'Password is required'),
});

// JOI
// export const loginSchema = Joi.object({
//     username: Joi.string()
//         .trim()
//         .lowercase()
//         .min(1)
//         .required()
//         .messages({
//             'string.base': 'Username must be a string',
//             'string.empty': 'Username is required',
//             'any.required': 'Username is required',
//         }),

//     password: Joi.string()
//         .trim()
//         .min(1)
//         .required()
//         .messages({
//             'string.base': 'Password must be a string',
//             'string.empty': 'Password is required',
//             'any.required': 'Password is required',
//         }),
// });
