import questions from '../../../data/questions.mjs';
import { sendResponse } from '../../../responses/index.mjs';

export const handler = async (event) => {
    const { category, difficulty } = event.queryStringParameters || {};

    let filtered = questions;

    if (category) {
        filtered = filtered.filter(
            (question) =>
                question.category.toLowerCase() === category.toLowerCase(),
        );
    }

    if (difficulty) {
        filtered = filtered.filter(
            (question) =>
                question.difficulty.toLowerCase() === difficulty.toLowerCase(),
        );
    }

    if (filtered.length === 0) {
        return sendResponse(400, {
            success: false,
            message: 'No questions found',
        });
    }

    const randomQuestion =
        filtered[Math.floor(Math.random() * filtered.length)];

    const { correctAnswer, ...questionWithoutAnswer } = randomQuestion;

    return sendResponse(200, {
        question: questionWithoutAnswer,
    });
};
