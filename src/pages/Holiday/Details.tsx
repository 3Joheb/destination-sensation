import { useState, useEffect } from "react"
import { detailsData } from "./fakeData"
import { IoIosArrowRoundDown } from "react-icons/io";

const HolidayDetails = () => {
    const [activities, setActivites] = useState(detailsData.activities.slice(0, 10))
    const [flight, setFlight] = useState(detailsData.flightDetails)
    const [images, setImages] = useState(detailsData.images)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // Clients current url
    //         const url = new URL(window.location.href)
    //         const searchParm = url.searchParams

    //         // Send request to backend
    //         try {
    //             const response = await fetch(`/api/holiday?${searchParm}`)
    //             const result = await response.json()
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data') // Maybe show GUI feedback
    //             }

    //             setActivites(result.activities)
    //             setFlight(result.flightDetails)
    //             setImages(result.images)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }

    //     fetchData()
    // }, [])

    return (
        <div>
            <div className="flex gap-2 max-w-2xl max-h-80 w-full h-full">
                <div className="w-1/2">
                    <img src={images[0].hotLink} className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
                    {images.slice(1).map((img, i) => (
                        <img src={img.hotLink} key={i} className="w-full h-full object-cover" />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl">Flights</h2>
                <div className="flex gap-4">
                    {flight.itineraries.map((route: any, i: any) => (
                        <div className="flex flex-col items-center" key={i}>
                            <div>{route.segments.map((segment: any, j: any) => (
                                <div className="flex flex-col items-center" key={j}>
                                    <span>{`${flight.airportsMap[segment.departure.iataCode].city}`}</span>
                                    <IoIosArrowRoundDown />
                                    <span>{`${flight.airportsMap[segment.arrival.iataCode].city}`}</span>
                                </div>
                            ))}</div>
                            <span>Duration: {`${route.duration}`}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>Things to do</h1>
                <div className="overflow-y-auto">
                    <div className="flex gap-10 min-w-fit">
                        {activities.map((activity, i) => (
                            <div className="w-52" key={i}>
                                <img src={activity.pictures[0]} alt="" className="w-52 h-52 object-cover" />
                                <h2>{activity.name}</h2>
                                <p>{activity.description.short}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HolidayDetails