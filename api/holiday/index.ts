import { VercelRequest, VercelResponse } from '@vercel/node';
import getAuthToken from '../helpers/getAuthToken.js';
import getFlightDetails from './getFlightDetails.js';
import getHotelList from './getHotelList.js';
import getHotelDetails from './getHotelDetails.js';
import getActivities from './getActivities.js';

const authToken = await getAuthToken()

export default async (req: VercelRequest, res: VercelResponse) => {
    const { origin, destination, departureDate, returnDate, maxPrice } = req.query;

    // Ensure valid query params from client
    try {
        const queryParams = [origin, destination, departureDate, returnDate, maxPrice];
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
        console.log('----')
        console.log('Fetching flight details...')
        // @ts-ignore: Try catch block above already ensure query params are valid
        const flightDetails = await getFlightDetails(authToken, origin, destination, departureDate, returnDate, maxPrice)

        console.log('Fetching hotel details...')
        // @ts-ignore
        const hotelList = await getHotelList(authToken, destination)

        // @ts-ignore
        const hotelDetails = await getHotelDetails(authToken, hotelList.hotelIds, departureDate, returnDate)
        console.log('Fetching activities...')


        const lat = `${hotelList.geoCode.latitude}`
        const lon = `${hotelList.geoCode.longitude}`
        const activities = await getActivities(authToken, lon, lat)

        console.log('Sending client response')
        console.log('----')

        res.status(200).json({
            flightDetails,
            hotelDetails,
            activities
        })
    } catch (error) {
        res.status(500).json({ code: 500, error: 'Internal Server Error' })
    }
}