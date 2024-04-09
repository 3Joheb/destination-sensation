import CustomErrorHandler from "../utils/CustomErrorHandler.js";

/**
 * Function to fetch country images from the Pixabay API.
 * 
 * @param {string} country - The name of the country to search images for.
 * @returns {Promise<Object | null>} - A promise resolving to an object containing image data, or null if an error occurs.
 */
export default async (country: string): Promise<object | null> => {
    // Retrieve Pixabay API key from environment variables
    const key = process.env.PIXABAY_KEY;

    // Construct URL for Pixabay API request
    const url = `https://pixabay.com/api/?key=${key}&q=${country}&image_type=photo&category=travel&per_page=3`;

    // Initialise error handler
    const errorHandler = new CustomErrorHandler();

    try {
        // Fetch data from the Pixabay API
        const response = await fetch(url);
        errorHandler.checkResponse(response);

        const result = await response.json();
        const imgData = result.hits[0]; // Undefined if no image

        if (!imgData) { // Check if image data exists
            errorHandler.setCustomError({
                message: 'No images found on keyword',
                data: { hits: 0, search_keyword: country },
            })
        }

        errorHandler.checkKeys(imgData, ['webformatURL', 'pageURL'])

        // Return relevant image data and return
        return {
            imageHotlink: imgData.webformatURL,
            redirectLink: imgData.pageURL,
            tags: imgData.tags
        };
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching country image:', error as undefined | string)
        throw new Error()
    }
}
