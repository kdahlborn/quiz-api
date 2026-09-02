import createError from 'http-errors';
import { answerSchema } from '../../models/answerSchema.mjs';

export const validateAnswerBody = () => ({
    before: (handler) => {
        const body = handler.event.body;
        const { error, value } = answerSchema.validate(body);

        if (error) {
            throw createError(400, error.details[0].message);
        }

        // För att trimma ner värdet
        // T ex: "   a   " > "a"
        // Detta görs genom Joi-schemat
        handler.event.body = value;
    },
});
