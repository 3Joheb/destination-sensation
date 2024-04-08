


const getAirportCountryCode = async (IATA: string) => {
    const key = process.env.IATA_API_KEY

    const url = `https://aviation-reference-data.p.rapidapi.com/airports/${IATA}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${key}`,
            'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.alpha2countryCode
    } catch (error) {
        console.error(error);
        return null
    }

}

const getCountryName = async (IATA: string)=> {
    const key = process.env.IATA_API_KEY
    const ISO = await getAirportCountryCode(IATA)

    if(!ISO){
        return null
    }

    const url = `https://aviation-reference-data.p.rapidapi.com/countries/${ISO}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${key}`,
            'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        return result.name
    } catch (error) {
        console.error(error);
        return null
    }
}

export default getCountryName