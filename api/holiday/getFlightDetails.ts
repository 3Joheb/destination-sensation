import { AmadeusOAuth2Token } from "../helpers/getAuthToken.js"
import CustomErrorHandler from "../utils/CustomErrorHandler.js"

// Return data from Flight Inspiration API
export default async (
    authToken: AmadeusOAuth2Token,
    originIata: string,
    destinationIata: string,
    departureDate: string,
    returnDate: string,
    maxPrice: string) => {

    const baseUrl = 'https://test.api.amadeus.com/v2/shopping/flight-offers'
    const fetchUrl = `${baseUrl}?originLocationCode=${originIata}&destinationLocationCode=${destinationIata}&departureDate=${departureDate}&returnDate=${returnDate}&adults=1&maxPrice=${maxPrice}&max=1`
    const fetchOptions: RequestInit = {
        headers: {
            'Authorization': `${authToken['token_type']} ${authToken['access_token']}`
        }
    }

    const errorHandler = new CustomErrorHandler();

    try {
        const response = await fetch(fetchUrl, fetchOptions);
        errorHandler.checkResponse(response)

        const result = await response.json();
        const data = result.data
        errorHandler.checkKeys(data[0], ['lastTicketingDate', 'itineraries', 'price'])

        const cleanData = data.map((flight: any) => {
            return {
                itineraries: flight.itineraries,
                price: flight.price.total,
                last_date: flight.lastTicketingDate
            }
        })

        return cleanData;
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching flight details:', error as undefined | string)
        throw new Error();
    }
}