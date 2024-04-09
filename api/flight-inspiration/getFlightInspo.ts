import { AmadeusOAuth2Token } from "../helpers/getAuthToken.js"
import CustomErrorHandler from "../utils/CustomErrorHandler.js"
import getAuthToken from '../helpers/getAuthToken.js';

// Return data from Flight Inspiration API
export default async (queryParams: any) => {
    const authToken: AmadeusOAuth2Token = await getAuthToken()

    const fetchUrl = `https://test.api.amadeus.com/v1/shopping/flight-destinations?departureDate=${queryParams.departureDate}&origin=${queryParams.origin}&maxPrice=${queryParams.maxPrice}`
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

        return result;

    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching flight inspiration:', error as undefined | string)
        throw new Error();
    }
}