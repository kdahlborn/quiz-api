import createError from 'http-errors';

export const validateBody = (schema) => ({
    before: (handler) => {
        const { error, value } = schema.validate(handler.event.body);

        if (error) {
            throw createError(400, error.details[0].message);
        }

        handler.event.body = value;
    },
});
