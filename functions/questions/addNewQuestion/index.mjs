import middy from '@middy/core';
import questions from '../../../data/questions.mjs';
import { sendResponse } from '../../../responses/index.mjs';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { errorHandler } from '../../../middlewares/errorHandler.mjs';
import { authenticateUser } from '../../../middlewares/authenticate.mjs';
import { validateBody } from '../../../middlewares/validateBody.mjs';
import { questionSchema } from '../../../models/questionSchema.mjs';

export const handler = middy(async (event) => {
    const body = event.body;

    const newQuestion = {
        id: questions.length + 1,
        ...body,
    };

    questions.push(newQuestion);

    return sendResponse(201, {
        success: true,
        message: 'Question added successfully',
        newQuestion,
    });
})
    .use(httpJsonBodyParser())
    .use(authenticateUser())
    .use(validateBody(questionSchema))
    .use(errorHandler());
