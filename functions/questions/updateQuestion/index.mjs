import middy from '@middy/core';
import questions from '../../../data/questions.mjs';
import { sendResponse } from '../../../responses/index.mjs';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { errorHandler } from '../../../middlewares/errorHandler.mjs';
import { authenticateUser } from '../../../middlewares/authenticate.mjs';
import { validateBody } from '../../../middlewares/validateBody.mjs';
import { questionSchema } from '../../../models/questionSchema.mjs';

export const handler = middy(async (event) => {
    const { id } = event.pathParameters;
    const body = event.body;

    const index = questions.findIndex((q) => q.id === Number(id));

    if (index === -1) {
        return sendResponse(400, {
            message: 'No question with corresponding ID found',
        });
    }

    questions[index] = {
        id: Number(id),
        ...body,
    };

    return sendResponse(200, {
        success: true,
        message: 'Question updated successfully',
        updatedQuestion: questions[index],
    });
})
    .use(httpJsonBodyParser())
    .use(authenticateUser())
    .use(validateBody(questionSchema))
    .use(errorHandler());
