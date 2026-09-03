import middy from '@middy/core';
import questions from '../../../data/questions.mjs';
import { authenticateUser } from '../../../middlewares/authenticate.mjs';
import { authorizeRole } from '../../../middlewares/authorize.mjs';
import { errorHandler } from '../../../middlewares/errorHandler.mjs';
import { sendResponse } from '../../../responses/index.mjs';

export const handler = middy(async (event) => {
    const { id } = event.pathParameters;

    const index = questions.findIndex((q) => q.id === Number(id));

    if (index === -1) {
        return sendResponse(400, {
            message: 'No question with corresponding ID found',
        });
    }

    const [deleted] = questions.splice(index, 1);

    return sendResponse(200, {
        success: true,
        message: 'Question deleted successfully',
        deleted,
    });
})
    .use(authenticateUser())
    .use(authorizeRole('admin'))
    .use(errorHandler());
