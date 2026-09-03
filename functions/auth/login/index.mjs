import middy from '@middy/core';
import { users } from '../../../data/users.mjs';
import httpJsonBodyParses from '@middy/http-json-body-parser';
import { errorHandler } from '../../../middlewares/errorHandler.mjs';
import { validateBody } from '../../../middlewares/validateBody.mjs';
import { loginSchema } from '../../../models/userSchema.mjs';
import { sendResponse } from '../../../responses/index.mjs';
import { signToken } from '../../../utils/jwt.mjs';

export const handler = middy(async (event) => {
    const { username, password } = event.body;

    const user = users.find((u) => u.username === username);

    if (user) {
        if (user.password === password) {
            return sendResponse(200, {
                success: true,
                message: 'User logged in successfully',
                token: signToken({ username: user.username, role: user.role }),
            });
        } else {
            return sendResponse(400, {
                success: false,
                message: 'Invalid username and/or password',
            });
        }
    } else {
        return sendResponse(400, {
            success: false,
            message: 'Invalid username and/or password',
        });
    }
})
    .use(httpJsonBodyParses())
    .use(validateBody(loginSchema))
    .use(errorHandler());
