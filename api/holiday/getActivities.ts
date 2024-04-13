import CustomErrorHandler from "../utils/CustomErrorHandler.js";
import { AmadeusOAuth2Token } from "../helpers/getAuthToken.js";


export default async (auth: AmadeusOAuth2Token, lon: string, lat: string) => {
    const baseUrl = 'https://test.api.amadeus.com/v1/shopping/activities';

    // Build the URL with inputted parameters
    const url = `${baseUrl}?longitude=${lon}&latitude=${lat}&radius=20`;
    console.log(url)

    const options: RequestInit = {
        headers: {
            'Authorization': `${auth['token_type']} ${auth['access_token']}`
        }
    };

    const errorHandler = new CustomErrorHandler()

    try {
        const actReq = await fetch(url, options);
        errorHandler.checkResponse(actReq);

        const actRes = await actReq.json();
        const actData = actRes.data
        errorHandler.checkKeys(actData[0], ['name', 'geoCode', 'pictures', 'price'])

        const cleanActData = actData.map((act: any) => {
            return {
                name: act.name,
                geoCode: act.geoCode,
                description: {
                    short: act.shortDescription,
                    full: act.description
                },
                rating: [act.rating || null], // May be no rating
                pictures: act.pictures,
                price: act.price
            }
        })

        return cleanActData
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching activities:', error as undefined | string)
        throw new Error();
    }
};