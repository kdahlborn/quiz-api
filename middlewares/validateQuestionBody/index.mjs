import createError from 'http-errors';
import { questionSchema } from '../../models/questionSchema.mjs';

export const validateQuestionBody = () => ({
    before: (handler) => {
        const body = handler.event.body;
        const { error, value } = questionSchema.validate(body);

        if (error) {
            throw createError(400, error.details[0].message);
        }

        // För att trimma ner värdet
        // T ex: "   historia   " > "historia"
        // Detta görs genom Joi-schemat
        handler.event.body = value;
    },
});
