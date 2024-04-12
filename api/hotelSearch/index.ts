
import { VercelRequest, VercelResponse } from '@vercel/node';
import getAuthToken from './getAuthToken.js';

const baseUrl = 'https://test.api.amadeus.com/v3/shopping/hotel-offers';

export default async (req: VercelRequest, res: VercelResponse) => {
  const auth = await getAuthToken();
  if ("error" in auth) {
    res.json("error");
  } else {
    // Extract inputted parameters from the request
    const hotelIds = req.query.hotelids || '';
    const adults = req.query.adults || '1'; // Provide a default value if not provided

    // Build the URL with inputted parameters
    const url = `${baseUrl}?hotelIds=${hotelIds}&adults=${adults}`;

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
