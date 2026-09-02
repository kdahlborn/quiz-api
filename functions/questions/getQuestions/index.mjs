import middy from '@middy/core';
import questions from '../../../data/questions.mjs';
import { sendResponse } from '../../../responses/index.mjs';
import httpErrorHandler from '@middy/http-error-handler';

export const handler = async (event) => {
    const questionsWithoutAnswer = questions.map(
        ({ correctAnswer, ...questions }) => questions,
    );

    return sendResponse(200, {
        questions: questionsWithoutAnswer,
    });
};
