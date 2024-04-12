import CustomErrorHandler from '../utils/CustomErrorHandler.js';
import { AmadeusOAuth2Token } from '../helpers/getAuthToken.js';


export default async (
    auth: AmadeusOAuth2Token,
    hotelIds: string[],
    checkInDate: string,
    checkOutDate: string) => {
    const baseUrl = 'https://test.api.amadeus.com/v3/shopping/hotel-offers';

    // Build the URL with parameters
    const urlParams = new URLSearchParams();
    hotelIds.forEach((id: string) => {
        urlParams.append('hotelIds', id);
    })
    urlParams.append('checkInDate', checkInDate);
    urlParams.append('checkOutDate', checkOutDate);
    urlParams.append('currency', 'EUR');
    urlParams.append('adults', '1');

    // Build the URL with inputted parameters
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

        const hotelsData = await hotelReq.json();

        // Assume other objects follow same schema as first element
        errorHandler.checkKeys(hotelsData[0], ['hotelId', 'name', 'latitude', 'longitude', 'offers']);

        // Sanitize data and return an array of hotel data
        const cleanHotelsData = hotelsData.map(({ hotel, available, offers }) => {
            if (!available) return
            const hotelInfo = {
                hotelId: hotel.hotelId,
                name: hotel.name,
                lat: hotel.latitude,
                lon: hotel.longitude
            }

            const offersInfo = offers.map((offer: any) => {
                return {
                    checkInDate: offer.checkInDate,
                    checkOutDate: offer.checkOutDate,
                    room: {
                        type: offer.room.typeEstimated,
                        description: offer.room.description
                    },
                    price: {
                        baseAverage: offer.price.variations.average.base,
                        total: offer.total,
                        currency: offer.price.currency
                    }
                }
            })

            return {
                hotel: hotelInfo,
                offers: offersInfo
            }
        })

        return cleanHotelsData;
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching hotel details:', error as undefined | string);
        throw new Error();
    }
}