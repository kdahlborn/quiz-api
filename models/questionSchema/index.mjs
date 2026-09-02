import Joi from 'joi';

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
