import CustomErrorHandler from "../utils/CustomErrorHandler.js";

interface returnType {
    imageHotlink: string,
    redirectLink: string,
    tags: string
}

/**
 * Function to fetch holiday location images from the Pixabay API.
 * 
 * @param {string} country - The name of the country to search images for.
 * @returns {Promise<Object | null>} - A promise resolving to an object containing image data, or null if an error occurs.
 */
export default async (country: string, city?: string, subdivision?: string): Promise<returnType> => {
    // Retrieve Pixabay API key from environment variables
    const key = process.env.PIXABAY_KEY;

    // Ensure strings have no spaces
    country = country.replace(/ /g, '_')
    city = city ? city?.replace(/ /g, '_') : subdivision?.replace(/ /g, '_')

    // Construct URL for Pixabay API request
    const url = `https://pixabay.com/api/?key=${key}&q=${city}+${subdivision}+${country}&image_type=photo&category=travel&per_page=3`;

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
                message: 'No images found on url',
                data: { hits: 0, url },
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
