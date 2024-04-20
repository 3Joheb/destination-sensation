import fetchMock from 'jest-fetch-mock';
import getHotelDetails from './getHotelDetails'; // Update the import path as necessary

beforeAll(() => {
    fetchMock.enableMocks();
});

beforeEach(() => {
    fetchMock.resetMocks();
    process.env.PIXABAY_KEY = 'your_pixabay_api_key';
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
                        "dupeId": "700031300",
                        "name": "Sheraton Porto Hotel and Spa",
                        "cityCode": "LON",
                        "latitude": 41.16105,
                        "longitude": -8.6404
                    },
                    "available": true,
                    "offers": [
                        {
                            "id": "ACBIXU0GYZ",
                            "checkInDate": "2024-05-05",
                          "checkOutDate": "2024-05-17",
                            "rateCode": "S9R",
                            "rateFamilyEstimated": {
                                "code": "SRS",
                                "type": "C"
                            },
                            "room": {
                                "type": {
                                  "category": "DELUXE_ROOM",
                                  "beds": 1,
                                  "bedType": "QUEEN"
                                },
                                "description": {
                                  "text": "Prepay Non-refundable, changes up to 7 days prior to stay\nDeluxe Room, 1 Queen(s), 32sqm/344sqft,\nWireless internet, complimentary, Wired",
                                  "lang": "EN"
                                }
                              },
                            "guests": {
                                "adults": 1
                            },
                            "price": {
                                "baseAverage": "181.17",
                                "currency": "EUR"
                              },
                            "self": "https://test.api.amadeus.com/v3/shopping/hotel-offers/ACBIXU0GYZ"
                        }
                    ],
                    "self": "https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=MCLONGHM&adults=1"
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
                          "checkInDate": "2024-05-05",
                          "checkOutDate": "2024-05-17",
                          "room": {
                            "type": {
                              "category": "DELUXE_ROOM",
                              "beds": 1,
                              "bedType": "QUEEN"
                            },
                            "description": {
                              "text": "Prepay Non-refundable, changes up to 7 days prior to stay\nDeluxe Room, 1 Queen(s), 32sqm/344sqft,\nWireless internet, complimentary, Wired",
                              "lang": "EN"
                            }
                          },
                          "price": {
                            "baseAverage": "181.17",
                            "currency": "EUR"
                          }
                        }
                      ]
                    }
                  ]
                );

    });
});