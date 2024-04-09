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

    try {
        // Fetch data from the Pixabay API
        const response = await fetch(url);
        const result = await response.json();

        // Check if image data exists
        const imgData = result.hits[0];

        // Handle response errors and missing image data
        if (!response.ok) {
            const errorMsg = result.error || '';
            throw new Error(errorMsg);
        } else if (!imgData) {
            throw new Error(`0 hits: Search Keyword = ${country}`);
        } else if (imgData.webformatURL && imgData.pageURL) { // Ensure keys exist
            // Extract relevant image data and return
            const filteredResult = {
                imageHotlink: imgData.webformatURL,
                redirectLink: imgData.pageURL,
                tags: imgData.tags
            };

            return filteredResult;
        } else {
            throw new Error(`Required keys are undefined or null`);
        }
    } catch (error) {
        // Log and handle errors
        console.error('Error fetching country image:', error.message);
        console.error('Stack trace:', error.stack);
        return null;
    }
}

export default getCountryImage;
