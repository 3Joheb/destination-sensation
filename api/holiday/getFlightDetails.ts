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
        const data = result.data[0]
        errorHandler.checkKeys(data, ['lastTicketingDate', 'itineraries', 'price'])

        return {
            itineraries: data.itineraries,
            price: data.price.total,
            last_date: data.lastTicketingDate
        } as { itineraries: {}, price: string }
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching flight details:', error as undefined | string)
        throw new Error();
    }
}