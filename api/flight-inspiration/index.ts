import { VercelRequest, VercelResponse } from '@vercel/node';
import getToken from '../helpers/getAuthToken.ts';
import getFlightsInspo from './getFlightsInspo.ts';
import getCountryName from './getCountryName.ts';
import getCountryImage from './getCountryImage.ts'

const expectedParams = ['departureDate', 'origin', 'maxPrice']

export default async (req: VercelRequest, res: VercelResponse) => {
    const c = await getCountryName('MAD')
    const i = await getCountryImage('Spain')
    res.send(i)

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
                                    return res.status(400).json({ // Send error back to client
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