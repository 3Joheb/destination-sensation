import { VercelRequest, VercelResponse } from '@vercel/node';
import getToken from '../helpers/getAuthToken';
import getFlightsInspo from './getFlightsInspo';
import getCountryName from './getCountryName.ts';

export default async (req: VercelRequest, res: VercelResponse) => {
    const c = await getCountryName('MAD')
    console.log(c)
    res.send(c)
    
    // let token = await getToken();
    const token = {}

    if ('error' in token) {
        res.status(500).send('Internal Server Error')
    } else {
        try {
            // const { departureDate, origin, maxPrice } = { departureDate: '2024-03-20', origin: 'MAD', maxPrice: '200' }
            const { departureDate, origin, maxPrice } = req.query
            let clientReq = {
                departureDate,
                origin,
                maxPrice
            }

/*            getFlightsInspo(token, clientReq)
                .then(flightRes => {
                    if (!flightRes.ok) { // Amadeus fetch failed
                        return res.status(400).json({ // Send this back to client
                            error: {
                                message: 'An Error Occured with our Flight API',
                                code: 400,
                                details: flightRes.body.errors
                            }
                        })
                    }

                    return res.json(flightRes.body)
                })
                .catch((error) => res.status(500).json({ error })) */
            
            
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}