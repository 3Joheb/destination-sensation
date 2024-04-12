import { VercelRequest, VercelResponse } from '@vercel/node';
import getAuthToken from '../helpers/getAuthToken.js';
import getFlightDetails from './getFlightDetails.js';

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
    }

    // Fetch data and send to client 
    try {
        const authToken = await getAuthToken()
        // @ts-ignore: Try catch block above already ensure query params are valid
        const flightDetails = await getFlightDetails(authToken, origin, destination, departureDate, returnDate, maxPrice)

        res.status(200).json(flightDetails)
    } catch (error) {
        res.status(500).json({ code: 500, error: 'Internal Server Error' })
    }
}