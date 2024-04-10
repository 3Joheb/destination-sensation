import CustomErrorHandler from "../utils/CustomErrorHandler.js";


/**
 * Retrieves the ISO country code associated with the given IATA code.
 * @param {string} IATA - The IATA code of the airport.
 * @returns {Promise<string | null>} The ISO country code, or null if an error occurs.
 */
const getAirportCountryCode = async (IATA: string): Promise<string> => {
    const key = process.env.IATA_API_KEY;
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
        errorHandler.checkResponse(response);

        const result = await response.json();
        errorHandler.checkKeys(result, ['alpha2countryCode']);

        return result.alpha2countryCode;
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching airport country code:', error as undefined | string);
        throw new Error();
    }
}

/**
 * Retrieves the country name associated with the given ISO country code.
 * @param {string} ISO - The ISO country code.
 * @returns {Promise<string | null>} The country name, or null if an error occurs.
 */
const getCountryName = async (ISO: string): Promise<string> => {
    const key = process.env.IATA_API_KEY;
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
        errorHandler.checkResponse(response);

        const result = await response.json();
        errorHandler.checkKeys(result, ['name']);

        return result.name;
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching country name:', error as undefined | string);
        throw new Error()
    }
}

/**
 * Retrieves the country name associated with the given IATA code.
 * @param {string} IATA - The IATA code of the airport.
 * @returns {Promise<string | null>} The country name, or null if an error occurs.
 */
export default async (IATA: string): Promise<string> => {
    try {
        const ISO = await getAirportCountryCode(IATA);
        return await getCountryName(ISO);
    } catch (error) {
        throw new Error();
    }
}