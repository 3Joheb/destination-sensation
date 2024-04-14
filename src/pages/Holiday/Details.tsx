import { useState } from "react"
import { optionsData } from "./fakeData"

const HolidayDetails = () => {
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
        <div></div>
    )
}

export default HolidayDetails