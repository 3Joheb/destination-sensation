
const getCountryImage = (country: string)=>{
    const key = process.env.PIXABAY_KEY
    const url = `https://pixabay.com/api/?key=${key}&q=${country}&image_type=photo`
}