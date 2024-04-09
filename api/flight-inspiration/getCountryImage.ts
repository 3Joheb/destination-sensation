
const getCountryImage = async (country: string) => {
    const key = process.env.PIXABAY_KEY
    const url = `https://pixabay.com/api/?key=${key}&q=${country}&image_type=photo&category=travel+places&per_page=3`

    try {
        const response = await fetch(url)
        const result = await response.json()

        if (!response.ok) {
            const errorMsg = result.error || ''
            throw new Error(errorMsg);
        } else if (result.total == 0) {
            throw new Error(`0 hits: Keyword = ${country}`)
        }

        return result
    } catch (error) {
        console.error('Error fetching country image:', error.message);
        console.error('Stack trace:', error.stack);
        return null;
    }
}

export default getCountryImage