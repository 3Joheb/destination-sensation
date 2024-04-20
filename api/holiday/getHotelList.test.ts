import fetchMock from 'jest-fetch-mock';

beforeAll(() => {
    fetchMock.enableMocks();
});

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('getHotelList', () => {
    it('fetches and processes hotel data correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
        })
    );
});
            {
                "data"; [
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
                    
                    }]}
                });

                describe('getHotelList', () => {
                    it('fetches and processes hotel address', async () => {
                        fetchMock.mockResponseOnce(JSON.stringify({
                        })
                    );
                });
                            {
                                "data"; [
                                    "address", {
                                        "countryCode": "FR"
                                    }]}
                                });

                                describe('getHotelList', () => {
                                    it('fetches and processes latitude and longitude of hotel geoCode', async () => {
                                        fetchMock.mockResponseOnce(JSON.stringify({
                                        })
                                    );
                                });
                                            {
                                                "data"; [
                                                    {
                                                        "geoCode": {
                                                            "latitude": 48.87321,
                                                            "longitude": 2.32541
                                                        },
                                                    }]}
                                                });