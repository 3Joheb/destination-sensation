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
    }

    // Fetch data and send to client 
    try {
        // Fetch flight inspiration
        const flightInspo = await getFlightInspo(departureDate as string, origin as string, maxPrice as string)
        console.log('Got flight inspiration... getting airport data')

        // Fetch airport details
        const iataCodes = flightInspo.map((location) => {
            return location.iata
        })
        const airportsData = await getAirportsData(iataCodes)
        console.log('Got airport data... getting images')

        // Fetch location images in parallel
        const imageDataPromises = airportsData.map((airport) => {
            if (!airport) return

            return getCountryImage(airport.country, airport.city, airport.subd)
        })
        const imagesData = await Promise.all(imageDataPromises)
        console.log('Got images... constructing response')

        // Construct client response
        const clientResponse = [...flightInspo] as any
        clientResponse.forEach((holiday: any, i: number) => {
            console.log(true)
            const airport = airportsData[i]
            const image = imagesData[i]

            if (!airport) {
                clientResponse.splice(i, 1)
                return
            }

            holiday.destination.city = airport.city ? airport.city : airport.subd
            holiday.destination.country = airport.country
            holiday.image.hot_link = image?.imageHotlink
            holiday.image.redirect = image?.redirectLink
        })

        console.log('Constructed response... sending to client')

        res.status(200).json(clientResponse)
    } catch (error) {
        res.status(500).json({ code: 500, error: 'Internal Server Error' })
    }
}