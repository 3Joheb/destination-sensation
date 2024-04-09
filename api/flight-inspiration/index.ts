import { VercelRequest, VercelResponse } from '@vercel/node';
import getFlightInspo from './getFlightInspo.js'
import getCountryFromIATA from './getCountryFromIATA.js';
import getCountryImage from './getCountryImage.js';

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

        // Make requests in parallel for each holiday option
        const requests = flightInspo.map(async (flight: any) => {
            const updatedFlight = { ...flight }
            const country = await getCountryFromIATA(flight.iata)
            const image = await getCountryImage(country)

            updatedFlight.destination = country
            updatedFlight.image = image

            return updatedFlight;
        });

        const flightInspoRes = await Promise.all(requests)

        res.send(flightInspoRes)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}