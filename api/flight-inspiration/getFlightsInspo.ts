import { AmadeusOAuth2Token } from "../helpers/getAuthToken.js"

// Return data from Flight Inspiration API
export default async (authToken: AmadeusOAuth2Token, queryParams: any) => {
    const fetchUrl = `https://test.api.amadeus.com/v1/shopping/flight-destinations?departureDate=${queryParams.departureDate}&origin=${queryParams.origin}&maxPrice=${queryParams.maxPrice}`
    const fetchOptions: RequestInit = {
        headers: {
            'Authorization': `${authToken['token_type']} ${authToken['access_token']}`
        }
    }

    const amadeusResponse = await fetch(fetchUrl, fetchOptions);
    const responseBody = await amadeusResponse.json();

    return {
        ok: amadeusResponse.ok,
        status: amadeusResponse.status,
        body: responseBody
    };
}