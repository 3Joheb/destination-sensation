/**
 * Function to fetch country images from the Pixabay API.
 * 
 * @param {string} country - The name of the country to search images for.
 * @returns {Promise<Object | null>} - A promise resolving to an object containing image data, or null if an error occurs.
 */
const getCountryImage = async (country: string): Promise<object | null> => {
    // Retrieve Pixabay API key from environment variables
    const key = process.env.PIXABAY_KEY;

    // Construct URL for Pixabay API request
    const url = `https://pixabay.com/api/?key=${key}&q=${country}&image_type=photo&category=travel&per_page=3`;

    // Initialize error object
    let errorObj: { error?: {}, code?: number, message?: string, data?: {} } = {};

    try {
        // Fetch data from the Pixabay API
        const response = await fetch(url);

        // Handle response error
        if (!response.ok) {
            console.log('test')
            const error = new Error()
            errorObj = { code: response.status, message: response.statusText }
            throw error;
        }

        const result = await response.json();

        const imgData = result.hits[0]; // Undefined if no image

        // Handle custom errors
        if (!imgData) { // Check if image data exists
            const error = new Error()
            errorObj = {
                message: 'No images found on keyword',
                data: { hits: 0, search_keyword: country },
            }
            throw error;
        } else if (!imgData.webformatURL && !imgData.pageURL) { // Ensure keys exist
            const error = new Error()
            errorObj = {
                message: "Filter key's not found",
                data: {
                    format_keys_found: false,
                    keys: {
                        webformatURL: imgData.webformatURL,
                        pageURL: imgData.pageURL
                    }
                }
            }
            throw error;
        }

        // Extract relevant image data and return
        const filteredResult = {
            imageHotlink: imgData.webformatURL,
            redirectLink: imgData.pageURL,
            tags: imgData.tags
        };

        return filteredResult;
    } catch (error) {
        // Log and handle errors
        errorObj.error = error
        console.error('Error fetching country image:', errorObj);
        return null;
    }
}

export default getCountryImage;
