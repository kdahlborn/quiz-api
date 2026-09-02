import Joi from 'joi';

export const answerSchema = Joi.object({
    answer: Joi.string()
        .trim()
        .lowercase()
        .valid('a', 'b', 'c', 'd')
        .required(),
});
