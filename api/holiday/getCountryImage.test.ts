import fetchMock from 'jest-fetch-mock';
import getCountryImage from './getCountryImage'; // Update the import path as necessary

beforeAll(() => {
    fetchMock.enableMocks();
});

beforeEach(() => {
    fetchMock.resetMocks();
    process.env.PIXABAY_KEY = 'your_pixabay_api_key';
});

describe('getCountryImage', () => {
    it('fetches and processes image data correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
            hits: [{
                webformatURL: 'http://example.com/image.jpg',
                pageURL: 'http://example.com/page'
            }]
        }));

        const result = await getCountryImage('France');
        expect(result).toEqual([{
            hotLink: 'http://example.com/image.jpg',
            redirect: 'http://example.com/page'
        }]);
    });


});
