import CustomErrorHandler from '../utils/CustomErrorHandler.js';
import { AmadeusOAuth2Token } from '../helpers/getAuthToken';

export default async (auth: AmadeusOAuth2Token, cityCode: string) => {
    const baseUrl = 'https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city';

    // Build the URL with parameters
    const urlParams = new URLSearchParams();
    urlParams.append('cityCode', cityCode);
    urlParams.append('radius', '10');

    const url = `${baseUrl}?${urlParams.toString()}`;

    const options: RequestInit = {
        headers: {
            'Authorization': `${auth['token_type']} ${auth['access_token']}`
        }
    };

    const errorHandler = new CustomErrorHandler();

    try {
        const hotelReq = await fetch(url, options);
        errorHandler.checkResponse(hotelReq);

        const hotelResult = await hotelReq.json();
        const hotelsData = hotelResult.data;

        // Assume other objects follow same schema as first element
        errorHandler.checkKeys(hotelsData[0], ['hotelId', 'geoCode']);

        // Remove all other keys besides hotelId
        const geoCode = hotelsData[0].geoCode
        const hotelIds = hotelsData.map((hotel: any) => {
            return hotel.hotelId
        })

        return {
            geoCode,
            hotelIds
        }
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching hotel list:', error as undefined | string)
        throw new Error();
    }
}