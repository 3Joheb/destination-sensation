import fetchMock from 'jest-fetch-mock';
import getCountryImage from './getCountryImage'; // Update the import path as necessary

// Enable fetch mocks for all tests in this file
fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks(); // Ensure fetch mocks are cleared before each test
    process.env.PIXABAY_KEY = 'your_pixabay_api_key'; // Set your Pixabay API key for the tests
});

describe('getCountryImage', () => {

    it('fetches and processes image data correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
            hits: [{
                webformatURL: 'http://example.com/image.jpg',
                pageURL: 'http://example.com/page',
                tags: 'scenic'
            }]
        }));

        const result = await getCountryImage('France');
        expect(result).toEqual([{
            imageHotlink: 'http://example.com/image.jpg',
            redirectLink: 'http://example.com/page',
            tags: 'scenic'
        }]);
        expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining('France'));
    });

    it('handles the case where no images are found', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ hits: [] }));

        await expect(getCountryImage('Atlantis')).resolves.toEqual([]);
    });

    it('throws an error when the API call fails', async () => {
        fetchMock.mockReject(new Error('API failure'));

        await expect(getCountryImage('Mars')).rejects.toThrow('API failure');
    });
});
