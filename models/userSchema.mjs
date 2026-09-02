import joi from 'joi';

export const loginSchema = joi.object({
    username: joi.string().trim().lowercase().min(1).required(),
    password: joi.string().trim().min(1).required(),
});
