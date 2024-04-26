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
const getCountryImage = async (country: string, city?: string, subdivision?: string): Promise<returnType> => {
    // Retrieve Pixabay API key from environment variables
    const key = process.env.PIXABAY_KEY;

    // Ensure strings have no spaces
    country = country;
    subdivision = subdivision ? encodeURIComponent(subdivision) : ''
    city = city ? encodeURIComponent(city) : subdivision;

    // Construct URL for Pixabay API request
    const baseUrl = 'https://pixabay.com/api/';
    const query = `portugal`
    const colors = `grayscale`
    const category = `landscape`


    const url = `${baseUrl}?key=${key}&q=${query}&category=${category}&colors${colors}`;
    console.log(url)

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

        const imgs = result.hits.slice(0, 5).map((data: any) => {
            return {
                hotLink: data.webformatURL,
                redirect: data.pageURL,
            }
        })

        // Return relevant images data and return
        return imgs;
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching country image:', error as undefined | string)
        throw new Error()
    }
}

export default getCountryImage