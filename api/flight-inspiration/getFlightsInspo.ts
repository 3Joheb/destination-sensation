import { AmadeusOAuth2Token } from "./getAuthToken.js"

// Return data from Flight Inspiration API
export default async (authToken: AmadeusOAuth2Token) => {
    const clientParams = {
        date: {
            departure: '2024-03-20'
        },
        origin: 'MAD',
        maxPrice: 200
    }
    const fetchUrl = `https://test.api.amadeus.com/v1/shopping/flight-destinations?departureDate=${clientParams.date}&origin=${clientParams.origin}&maxPrice=${clientParams.maxPrice}`
    const fetchOptions: RequestInit = {
        headers: {
            'Authorization': `${authToken['token_type']} ${authToken['access_token']}`
        }
    }

    return await fetch(fetchUrl, fetchOptions);
}