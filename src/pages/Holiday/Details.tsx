import { useState } from "react"
import { detailsData } from "./fakeData"
import placeHolder from "../../assets/beach.jpg"

const HolidayDetails = () => {
    const [options, setOptions] = useState(detailsData)
    const [activities, setActivites] = useState(detailsData.activities.slice(0, 3))
    const [flight, setFlight] = useState(detailsData.flightDetails)

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
            <div>
                <h1>Things to do</h1>
                {activities.map((activity) => (
                    <div className="">
                        <img src={activity.pictures[0]} alt="" />
                        <h2>{activity.name}</h2>
                        <p>{activity.description.short}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HolidayDetails