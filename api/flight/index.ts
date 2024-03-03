import { VercelRequest, VercelResponse } from '@vercel/node';
import getToken from './getAuthToken.js';

let token = await getToken();

export default async (req: VercelRequest, res: VercelResponse) => {
    if ('error' in token) {
        // Retry getting the token if failure is saved in memory
        token = await getToken();
    }

    try {

    } catch (error) {

    }

    res.json({ message: token })
}