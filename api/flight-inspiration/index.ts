import { VercelRequest, VercelResponse } from '@vercel/node';
import getFlightInspo from './getFlightInspo.js'
import getCountryFromIATA from './getCountryFromIATA.js';
import getCountryImage from './getCountryImage.js';
import getAirportsData from './getAirportsData.js';

export default async (req: VercelRequest, res: VercelResponse) => {
    const { departureDate, origin, maxPrice } = req.query;

    // Ensure valid query params from client
    try {
        const queryParams = [departureDate, origin, maxPrice];
        queryParams.forEach((param) => {
            if (Array.isArray(param)) {
                throw new Error()
            } else if (!param) {
                throw new Error()
            }
        })
    } catch (error) {
        res.status(400).json({ error: 'Invalid query parameters: at least one of the required parameters is missing or in an incorrect format.' })
    }

    // Fetch data and send to client 
    try {
        // Fetch flight inspiration
        const flightInspo = await getFlightInspo(departureDate as string, origin as string, maxPrice as string)

        // Fetch airport details
        const iataCodes = flightInspo.map((location) => {
            return location.iata
        })
        const airportsData = await getAirportsData(iataCodes)

        // Fetch location images in parallel
        const imageDataPromises = airportsData.map((airport) => {
            if (!airport) return

            return getCountryImage(airport.country, airport.city, airport.subd)
        })
        const imagesData = await Promise.all(imageDataPromises)

        // Construct client response
        const clientResponse = { ...flightInspo } as any
        clientResponse.forEach((flight: any, i: number) => {
            const airport = airportsData[i]
            const image = imagesData[i]

            if (!airport) {
                clientResponse.splice(i, 1)
                return
            }

            flight.destination.city = airport.city ? airport.city : airport.subd
            flight.destination.country = airport.country
            flight.image.hot_link = image?.imageHotlink
            flight.image.redirect = image?.redirectLink
        })

        res.send(clientResponse)
    } catch (error) {
        res.status(500).json({ code: 500, error: 'Internal Server Error' })
    }
}