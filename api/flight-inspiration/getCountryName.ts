import CustomErrorHandler from "../utils/CustomErrorHandler.js";

const getAirportCountryCode = async (IATA: string) => {
    const key = process.env.IATA_API_KEY

    const url = `https://aviation-reference-data.p.rapidapi.com/airports/${IATA}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${key}`,
            'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
        }
    };

    // Initialise error handler
    const errorHandler = new CustomErrorHandler();

    try {
        const response = await fetch(url, options);
        errorHandler.checkResponse(response)

        const result = await response.json();
        errorHandler.checkKeys(result, ['alpha2countryCode'])

        return result.alpha2countryCode
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching airport country code:', error as undefined | string)
        return null;
    }
}

const getCountryName = async (IATA: string) => {
    const key = process.env.IATA_API_KEY
    const ISO = await getAirportCountryCode(IATA)

    if (!ISO) {
        return null
    }

    const url = `https://aviation-reference-data.p.rapidapi.com/countries/${ISO}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${key}`,
            'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
        }
    };

    // Initialise error handler
    const errorHandler = new CustomErrorHandler();

    try {
        const response = await fetch(url, options);
        errorHandler.checkResponse(response)

        const result = await response.json();
        errorHandler.checkKeys(result, ['name'])

        return result.name
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching country name:', error as undefined | string)
        return null;
    }
}

export default getCountryName