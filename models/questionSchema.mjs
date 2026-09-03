import Joi from 'joi';
import { z } from 'zod';

// ZOD
export const questionSchema = z.object({
    category: z
        .string({ message: 'category must be a string' })
        .trim()
        .min(1, 'category is required'),

    difficulty: z
        .string({ message: 'difficulty must be a string' })
        .trim()
        .toLowerCase()
        .pipe(
            z.enum(['easy', 'medium', 'hard'], {
                message: 'difficulty must be easy, medium or hard',
            }),
        ),

    question: z
        .string({ message: 'Question must be a string' })
        .trim()
        .min(5, 'Question must be at least 5 characters'),

    options: z.object({
        a: z
            .string({ message: 'option a must be a string' })
            .trim()
            .min(1, 'option a is required'),

        b: z
            .string({ message: 'option b must be a string' })
            .trim()
            .min(1, 'option b is required'),

        c: z
            .string({ message: 'option c must be a string' })
            .trim()
            .min(1, 'option c is required'),

        d: z
            .string({ message: 'option d must be a string' })
            .trim()
            .min(1, 'option d is required'),
    }),

    correctAnswer: z
        .string({ message: 'correctAnswer must be a string' })
        .trim()
        .toLowerCase()
        .pipe(
            z.enum(['a', 'b', 'c', 'd'], {
                message: 'correctAnswer must be a, b, c or d',
            }),
        ),
});

// JOI
// export const questionSchema = Joi.object({
//     category: Joi.string().trim().lowercase().required().messages({
//         'string.empty': 'category is required',
//         'any.required': 'category is required',
//         'string.base': 'category must be a string',
//     }),

//     difficulty: Joi.string()
//         .trim()
//         .lowercase()
//         .valid('easy', 'medium', 'hard')
//         .required()
//         .messages({
//             'string.empty': 'difficulty is required',
//             'any.required': 'difficulty is required',
//             'string.base': 'difficulty must be a string',
//             'any.only': 'difficulty must be easy, medium or hard',
//         }),

//     question: Joi.string().trim().min(5).required().messages({
//         'string.empty': 'Question is required',
//         'any.required': 'Question is required',
//         'string.base': 'Question must be a string',
//         'string.min': 'Question must be at least 5 characters',
//     }),

//     options: Joi.object({
//         a: Joi.string().trim().required().messages({
//             'string.empty': 'option a is required',
//             'any.required': 'option a is required',
//             'string.base': 'option a must be a string',
//         }),

//         b: Joi.string().trim().required().messages({
//             'string.empty': 'option b is required',
//             'any.required': 'option b is required',
//             'string.base': 'option b must be a string',
//         }),

//         c: Joi.string().trim().required().messages({
//             'string.empty': 'option c is required',
//             'any.required': 'option c is required',
//             'string.base': 'option c must be a string',
//         }),

//         d: Joi.string().trim().required().messages({
//             'string.empty': 'option d is required',
//             'any.required': 'option d is required',
//             'string.base': 'option d must be a string',
//         }),
//     })
//         .required()
//         .messages({
//             'any.required': 'options are required',
//             'object.base': 'options must be an object',
//         }),

//     correctAnswer: Joi.string()
//         .trim()
//         .lowercase()
//         .valid('a', 'b', 'c', 'd')
//         .required()
//         .messages({
//             'string.empty': 'correctAnswer is required',
//             'any.required': 'correctAnswer is required',
//             'string.base': 'correctAnswer must be a string',
//             'any.only': 'correctAnswer must be a, b, c or d',
//         }),
// });
