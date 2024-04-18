import fetchMock from 'jest-fetch-mock';
import getCountryImage from './getCountryImage';
import CustomErrorHandler from '../utils/CustomErrorHandler';

jest.mock('../utils/CustomErrorHandler', () => {
    return jest.fn().mockImplementation(() => {
        return {
            checkResponse: jest.fn().mockImplementation(response => {
                if (!response.ok) throw new Error('Response not OK');
            }),
            checkKeys: jest.fn(),
            setCustomError: jest.fn(),
            logError: jest.fn()
        };
    });
});


jest.mock('../utils/CustomErrorHandler');

beforeAll(() => {
    fetchMock.enableMocks();
});

beforeEach(() => {
    fetchMock.resetMocks();
    (CustomErrorHandler as jest.Mock<CustomErrorHandler>).mockClear();
});

describe('getCountryImage', () => {
    it('successfully retrieves images', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
            hits: [{ webformatURL: 'http://example.com/image.jpg', pageURL: 'http://example.com/page', tags: 'beach, summer' }]
        }));

        const result = await getCountryImage('France');
        expect(result).toEqual([
            {
                imageHotlink: 'http://example.com/image.jpg',
                redirectLink: 'http://example.com/page',
                tags: 'beach, summer'
            }
        ]);
        expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining('France'));
    });

    it('handles API errors appropriately', async () => {
        fetchMock.mockReject(new Error('Network failure'));
        const errorHandlerMock = new CustomErrorHandler();
        errorHandlerMock.logError = jest.fn();

        await expect(getCountryImage('France')).rejects.toThrow('Network failure');
        expect(errorHandlerMock.logError).toHaveBeenCalled();
    });
});
