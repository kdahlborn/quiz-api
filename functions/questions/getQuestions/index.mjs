import questions from '../../../data/questions.mjs';
import { sendResponse } from '../../../responses/index.mjs';

export const handler = async (event) => {
    const questionsWithoutAnswer = questions.map(
        ({ correctAnswer, ...questions }) => questions,
    );

    return sendResponse(200, {
        questions: questionsWithoutAnswer,
    });
};
