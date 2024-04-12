import { VercelRequest, VercelResponse } from '@vercel/node';
import getAuthToken from './getAuthToken.js';

const baseUrl = 'https://test.api.amadeus.com/v1/shopping/activities?latitude=41.397158&longitude=2.160873&radius=1';

export default async (req: VercelRequest, res: VercelResponse) => {
    const auth = await getAuthToken();
    if ("error" in auth) {
        res.json("error");
    } else {
        const longitude = req.query.longitude || '';
        const latitude = req.query.latitude || ''; // Provide a default value if not provided
        const radius = req.query.radius || '';

        // Build the URL with inputted parameters
        const url = `${baseUrl}?longitude=${longitude}&latitude=${latitude}&radius${radius}`;

        const options: RequestInit = {
            headers: {
                'Authorization': `${auth['token_type']} ${auth['access_token']}`
            }
        };

        const actReq = await fetch(url, options);
        const actData = await actReq.json();

        res.json({ activities: actData });
    }
};