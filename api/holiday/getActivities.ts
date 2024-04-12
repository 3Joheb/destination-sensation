import CustomErrorHandler from "../utils/CustomErrorHandler.js";
import { AmadeusOAuth2Token } from "../helpers/getAuthToken.js";


export default async (auth: AmadeusOAuth2Token, lon: string, lat: string) => {
    const baseUrl = 'https://test.api.amadeus.com/v1/shopping/activities?';

    // Build the URL with inputted parameters
    const url = `${baseUrl}?longitude=${lon}&latitude=${lat}&radius=20`;

    const options: RequestInit = {
        headers: {
            'Authorization': `${auth['token_type']} ${auth['access_token']}`
        }
    };

    const errorHandler = new CustomErrorHandler()

    try {
        const actReq = await fetch(url, options);
        errorHandler.checkResponse(actReq);

        const actData = await actReq.json();
        errorHandler.checkKeys(actData[0], ['name', 'geoCode', 'rating', 'pictures', 'price'])

        const cleanActData = actData.map((act: any) => {
            return {
                name: act.name,
                geoCode: act.geoCode,
                rating: act.rating,
                pictures: act.pictures,
                price: act.price
            }
        })

        return cleanActData
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching activities:', error)
        throw new Error();
    }
};