import middy from '@middy/core';
import questions from '../../data/index.mjs';
import { sendResponse } from '../../responses/index.mjs';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import { validateQuestionBody } from '../../middlewares/validateQuestionBody/index.mjs';

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
    .use(validateQuestionBody())
    .use(httpErrorHandler());
