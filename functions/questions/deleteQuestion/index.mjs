import questions from '../../../data/questions.mjs';
import { sendResponse } from '../../../responses/index.mjs';

export const handler = async (event) => {
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
};
