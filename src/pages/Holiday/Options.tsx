import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { optionsData } from "./fakeData"


const HolidayOptions = () => {
    const [options, setOptions] = useState(optionsData)

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
        <div className="flex flex-col items-center">
            <span>Pick one the holidays below</span>
            <h1 className="text-2xl">You're one step away from one of these amazing holidays!</h1>
            <div className="flex flex-col gap-20 items-center my-14">
                {options.map(({ iata, destination, price, departureDate, returnDate, image }, index) => (
                    <Card
                        iata={iata}
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

export default HolidayOptions