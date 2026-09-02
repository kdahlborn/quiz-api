import middy from '@middy/core';
import httpJsonBodyParses from '@middy/http-json-body-parser';
import { sendResponse } from '../../../responses/index.mjs';

export const handler = middy(async (event) => {
    return sendResponse(200, {
        questions: questionsWithoutAnswer,
    });
});
