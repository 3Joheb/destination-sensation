import { useEffect, useState } from "react"
import Card from "../../components/Card"
import fakeData from "./fakeData"


const Options = () => {
    const [options, setOptions] = useState(fakeData)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // Clients current url
    //         const url = new URL(window.location.href)
    //         const searchParm = url.searchParams

    //         // Send request to backend
    //         try {
    //             const optionsRes = await fetch(`/api/flight-inspiration?${searchParm}`)
    //             const optionsResult = await optionsRes.json()
    //             if (!optionsRes.ok) {
    //                 throw new Error('Failed to fetch data') // Maybe show GUI feedback
    //             }

    //             setOptions(optionsResult)
    //             console.log(optionsResult)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }

    //     fetchData()
    // }, [])

    return (
        <div>
            <span>Pick one the holidays below</span>
            <h1>You're one step away from one of these amazing holidays!</h1>
            <div>
                {options.map(({ destination, price, departureDate, returnDate, image }, index) => (
                    <Card
                        destination={destination.city}
                        price={price}
                        departureDate={departureDate}
                        returnDate={returnDate}
                        image={image}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Options