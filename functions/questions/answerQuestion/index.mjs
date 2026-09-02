import middy from '@middy/core';
import questions from '../../../data/questions.mjs';
import { sendResponse } from '../../../responses/index.mjs';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import { validateAnswerBody } from '../../../middlewares/validateAnswerBody/index.mjs';

export const handler = middy(async (event) => {
    const { id } = event.pathParameters;
    const { answer } = event.body;

    const question = questions.find((q) => q.id === Number(id));

    if (!question) {
        return sendResponse(400, {
            success: false,
            message: 'No question with corresponding ID found',
        });
    }

    const correctAnswer = question.correctAnswer;
    const options = question.options;

    if (answer === correctAnswer) {
        return sendResponse(200, {
            message: `Rätt svar! 🥳🎊🎉 ${correctAnswer}) ${options[correctAnswer]}`,
        });
    } else {
        return sendResponse(200, {
            message: `Fel! ❌ Rätt svar är: ${correctAnswer}) ${options[correctAnswer]}`,
        });
    }
})
    .use(httpJsonBodyParser())
    .use(validateAnswerBody())
    .use(httpErrorHandler());
