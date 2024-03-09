import { VercelRequest, VercelResponse } from '@vercel/node';
import getToken from './getAuthToken.js';

export default async (req: VercelRequest, res: VercelResponse) => {
    let token = await getToken();

    if ('error' in token) {
        res.json({ error: 'error' })
    } else {
        try {
            const options: RequestInit = {
                headers: {
                    'Authorization': `${token['token_type']} ${token['access_token']}`
                }
            }

            const adeusReq = await fetch('https://test.api.amadeus.com/v1/shopping/flight-destinations?departureDate=2024-03-09&origin=MAD&maxPrice=200', options)
            res.json(await adeusReq.json())
        } catch (error) {
            console.log(error)
            res.json({ error })
        }
    }
}