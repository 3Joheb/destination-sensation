import { AmadeusOAuth2Token } from "../helpers/getAuthToken.js"
import CustomErrorHandler from "../utils/CustomErrorHandler.js"
import getAuthToken from '../helpers/getAuthToken.js';

interface returnType {
    iata: string,
    price: string,
    departureDate: string,
    returnDate: string
}

// Return data from Flight Inspiration API
export default async (departureDate: string, origin: string, maxPrice: string) => {
    const authToken: AmadeusOAuth2Token = await getAuthToken()

    const fetchUrl = `https://test.api.amadeus.com/v1/shopping/flight-destinations?departureDate=${departureDate}&origin=${origin}&maxPrice=${maxPrice}`
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

        // Assume other objects have / don't have those keys
        errorHandler.checkKeys(result.data[0], ['destination', 'price', 'departureDate', 'returnDate'])

        const filteredData = result.data.map((obj: any) => {
            return {
                iata: obj.destination,
                price: obj.price.total,
                departureDate: obj.departureDate,
                returnDate: obj.returnDate
            }
        })

        return filteredData as returnType[];
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching flight inspiration:', error as undefined | string)
        throw new Error();
    }
}