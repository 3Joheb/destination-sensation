import { VercelRequest, VercelResponse } from '@vercel/node';
import getFlightInspo from './getFlightInspo.js'

export default async (req: VercelRequest, res: VercelResponse) => {

    try {
        // const { departureDate, origin, maxPrice } = { departureDate: '2024-03-20', origin: 'MAD', maxPrice: '200' }
        const { departureDate, origin, maxPrice } = req.query
        let clientReq = {
            departureDate,
            origin,
            maxPrice
        }

        const flightInspo = await getFlightInspo(clientReq)

        res.send(flightInspo)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}