import { VercelRequest, VercelResponse } from '@vercel/node';
import getAuthToken from '../hotelList/getAuthToken.js';

const baseUrl = 'https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city';

export default async (req: VercelRequest, res: VercelResponse) => {
    const auth = await getAuthToken();
    if ("error" in auth) {
        res.json("error");
    } else {
        // Extract inputted parameters from the request
        const cityCode = req.query.cityCode[0] || ''; // Optional city code
        const checkInDate = req.query.checkInDate[0] || ''; // Optional check-in date

        // Build the URL with optional parameters
        const urlParams = new URLSearchParams();
        if (cityCode) urlParams.append('cityCode', cityCode);
        if (checkInDate) urlParams.append('checkInDate', checkInDate);

        const url = `${baseUrl}?${urlParams.toString()}`;

        const options: RequestInit = {
            headers: {
                'Authorization': `${auth['token_type']} ${auth['access_token']}`
            }
        };

        const hotelReq = await fetch(url, options);
        const hotelData = await hotelReq.json();

        res.json({ hotels: hotelData });
    }
};