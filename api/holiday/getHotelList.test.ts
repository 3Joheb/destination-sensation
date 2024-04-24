import fetchMock from 'jest-fetch-mock';
import getHotelList from './getHotelList';

const auth = {
    "type": "amadeusOAuth2Token",
    "username": "kaitlinmoore@gmail.com",
    "application_name": "Destination Sensation",
    "client_id": "ZwXadasdasfafTidG47EUnthzRk4mPFNc",
    "token_type": "Bearer",
    "access_token": "2HasdfgsghfUPD1ywA58D2J",
    "expires_in": 1799,
    "state": "approved",
    "scope": ""
}

beforeAll(() => {
    fetchMock.enableMocks();
});

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('getHotelLists', () => {
    it('fetches and processes hotel data correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
            "data": [
                {
                    "chainCode": "AC",
                    "iataCode": "PAR",
                    "dupeId": 700049063,
                    "name": "HOTEL RESIDENCE EUROPE",
                    "hotelId": "ACPAR733",
                    "geoCode": {
                        "latitude": 48.87321,
                        "longitude": 2.32541
                    },
                    "address": {
                        "countryCode": "FR"
                    },
                    "lastUpdate": "2023-06-15T09:57:36"
                }]
        }));

        const result = await getHotelList(auth, 'PAR');
        expect(result).toEqual({
            geoCode: {
                latitude: 48.87321,
                longitude: 2.32541
            },
            hotelIds: ['ACPAR733']
        });
    });

    it('throws an error when the API call fails', async () => {
        fetchMock.mockReject(new Error('API failure'));
        await expect(getHotelList(auth, 'PAR')).rejects.toThrow();
    });

});

// getHotelList.test.ts