


const getAirportCountryCode = async (IATA: string) => {
    const url = `https://aviation-reference-data.p.rapidapi.com/airports/${IATA}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '640916e48dmsh8aca8392f9ffe83p147ae6jsn87e3ea1edbf5',
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
    const ISO = await getAirportCountryCode(IATA)

    if(!ISO){
        return null
    }

    const url = `https://aviation-reference-data.p.rapidapi.com/countries/${ISO}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '640916e48dmsh8aca8392f9ffe83p147ae6jsn87e3ea1edbf5',
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