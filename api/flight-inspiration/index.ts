import { VercelRequest, VercelResponse } from '@vercel/node';
import getFlightInspo from './getFlightInspo.js'
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
        res.status(400).json({ code: 400, error: 'Invalid query parameters: at least one of the required parameters is missing or in an incorrect format.' })
        return
    }

    // Fetch data and send to client 
    try {
        console.log('---')
        console.log('1. Getting flight inspiration')

        // Fetch flight inspiration
        const flightInspo = await getFlightInspo(departureDate as string, origin as string, maxPrice as string)
        console.log('2. Got flight inspiration... getting airport data')

        flightInspo.splice(3)

        // Fetch airport details
        const iataCodes = flightInspo.map((holiday) => {
            return holiday.iata
        })
        const airportsData = await getAirportsData(iataCodes)
        console.log('3. Got airport data... getting images')

        // Fetch location images in parallel
        const imageDataPromises = airportsData.map((airport) => {
            if (!airport) return null

            return getCountryImage(airport.country, airport.city, airport.subd)
        })
        const imagesData = await Promise.all(imageDataPromises)
        console.log('4. Got images... sending client response')
        console.log('---')

        // Construct client response
        const clientResponse = flightInspo.map((holiday: any, i: number) => {
            const airport = airportsData[i]
            const image = imagesData[i]

            if (airport && image) {
                holiday.destination = {}
                holiday.image = {}
                holiday.destination.country = airport.country
                holiday.destination.city = airport.city
                holiday.destination.subdivision = airport.subd
                holiday.image.hot_link = image.imageHotlink
                holiday.image.redirect = image.redirectLink

                holiday.image.tags = image.tags // Remove in prod

                return holiday
            }
        })

        res.status(200).json(clientResponse)
    } catch (error) {
        res.status(500).json({ code: 500, error: 'Internal Server Error' })
    }
}