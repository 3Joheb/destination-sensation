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
                <h2 className="text-2xl">Flights</h2>
                <div className="flex gap-4">
                    {flight.itineraries.map((route: any, i: any) => (
                        <div className="flex flex-col items-center" key={i}>
                            <div>{route.segments.map((segment: any, j: any) => (
                                <div className="flex flex-col items-center" key={j}>
                                    <span>{`${flight.airportsMap[segment.departure.iataCode].country}`}</span>
                                    <IoIosArrowRoundDown />
                                    <span>{`${flight.airportsMap[segment.arrival.iataCode].country}`}</span>
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