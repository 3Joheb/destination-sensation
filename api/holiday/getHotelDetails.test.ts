import fetchMock from 'jest-fetch-mock';
import getHotelDetails from './getHotelDetails'; // Update the import path as necessary

beforeAll(() => {
    fetchMock.enableMocks();
});

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('getHotelDetails', () => {
    it('fetches and displays correct hotel info', async () => {
        const mockHotelData = {
            "data": [
                {
                    "type": "hotel-offers",
                    "hotel": {
                        "type": "hotel",
                        "hotelId": "SIOPO454",
                        "chainCode": "SI",
                        "dupeId": "700012575",
                        "name": "Sheraton Porto Hotel and Spa",
                        "cityCode": "OPO",
                        "latitude": 41.16105,
                        "longitude": -8.6404
                    },
                    "available": true,
                    "offers": [
                        {
                            "id": "5ZTR5H2GUN",
                            "checkInDate": "2024-04-20",
                            "checkOutDate": "2024-04-21",
                            "rateCode": "S9R",
                            "rateFamilyEstimated": {
                                "code": "SRS",
                                "type": "C"
                            },
                            "room": {
                                "type": "XMI",
                                "typeEstimated": {
                                    "category": "DELUXE_ROOM",
                                    "beds": 1,
                                    "bedType": "QUEEN"
                                },
                                "description": {
                                    "text": "Marriott Senior Discount, includes\nDeluxe Room, 1 Queen(s), 32sqm/344sqft,\nWireless internet, complimentary, Wired",
                                    "lang": "EN"
                                }
                            },
                            "guests": {
                                "adults": 1
                            },
                            "price": {
                                "currency": "EUR",
                                "base": "144.00",
                                "total": "146.00",
                                "variations": {
                                    "average": {
                                        "base": "144.00"
                                    },
                                    "changes": [
                                        {
                                            "startDate": "2024-04-20",
                                            "endDate": "2024-04-21",
                                            "base": "144.00"
                                        }
                                    ]
                                }
                            },
                            "policies": {
                                "cancellations": [
                                    {
                                        "deadline": "2024-04-19T23:59:00+01:00",
                                        "amount": "146.00"
                                    }
                                ],
                                "paymentType": "guarantee"
                            },
                            "self": "https://test.api.amadeus.com/v3/shopping/hotel-offers/5ZTR5H2GUN"
                        }
                    ],
                    "self": "https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=SIOPO454&adults=1"
                }
            ]
        }

        fetchMock.mockResponseOnce(JSON.stringify(mockHotelData));

        const result = await getHotelDetails({
            "type": "amadeusOAuth2Token",
            "username": "mattchaila@gmail.com",
            "application_name": "Destination Sensation",
            "client_id": "aL25xfXiLkyK4ypo2yuA7ThpLCOIr5D3",
            "token_type": "Bearer",
            "access_token": "PSQr7gDArAS0loj70hPlKpt7XsYf",
            "expires_in": 1799,
            "state": "approved",
            "scope": ""
        }, ["SIOPO454"], "2024-05-05", "2024-05-17"); // Assuming arguments

        expect(result).toEqual(
            [
                {
                    "hotel": {
                        "hotelId": "SIOPO454",
                        "name": "Sheraton Porto Hotel and Spa",
                        "lat": 41.16105,
                        "lon": -8.6404
                    },
                    "offers": [
                        {
                            "checkInDate": "2024-04-20",
                            "checkOutDate": "2024-04-21",
                            "room": {
                                "type": {
                                    "category": "DELUXE_ROOM",
                                    "beds": 1,
                                    "bedType": "QUEEN"
                                },
                                "description": {
                                    "text": "Marriott Senior Discount, includes\nDeluxe Room, 1 Queen(s), 32sqm/344sqft,\nWireless internet, complimentary, Wired",
                                    "lang": "EN"
                                }
                            },
                            "price": {
                                "baseAverage": "144.00",
                                "currency": "EUR"
                            }
                        }
                    ]
                }
            ]
        );

    });
});

// getHotelDetails.test.ts
