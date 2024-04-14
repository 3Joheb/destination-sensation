import { useState } from "react"
import { detailsData } from "./fakeData"
import { IoIosArrowRoundDown } from "react-icons/io";

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
                <span>Flights</span>
                <span>Price: {`${flight.price}`}</span>
                <div>
                    {flight.itineraries.map((route: any, i: any) => (
                        <div key={i}>
                            <div>{route.segments.map((segment: any, j: any) => (
                                <div key={j}>
                                    <span>From: {`${segment.departure.iataCode}`}</span>
                                    <span>To: {`${segment.arrival.iataCode}`}</span>
                                </div>
                            ))}</div>
                            <span>Duration: {`${route.duration}`}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>Things to do</h1>
                <div>
                    {activities.map((activity, i) => (
                        <div className="" key={i}>
                            <img src={activity.pictures[0]} alt="" className="w-52 h-52 object-cover" />
                            <h2>{activity.name}</h2>
                            <p>{activity.description.short}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HolidayDetails