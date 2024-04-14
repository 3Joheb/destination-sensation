import { useState, useEffect } from "react"
import { detailsData } from "./fakeData"
import { IoIosArrowRoundDown } from "react-icons/io";

const HolidayDetails = () => {
    const [activities, setActivites] = useState(detailsData.activities)
    const [flight, setFlight] = useState(detailsData.flightDetails)
    const [images, setImages] = useState(detailsData.images)
    const [isLoading, setIsLoading] = useState(true);

    const regexPattern = /PT|H|M/g; // Regex pattern to match "PT", "H", and "M"
    const replacements = {
        "PT": "", // Replace "PT" with an empty string
        "H": " hour", // Replace "H" with " hour"
        "M": " mins" // Replace "M" with " mins"
    };

    useEffect(() => {
        const fetchData = async () => {
            // Clients current url
            const url = new URL(window.location.href)
            const searchParm = url.searchParams

            // Send request to backend
            try {
                const response = await fetch(`/api/holiday?${searchParm}`)
                const result = await response.json()
                if (!response.ok) {
                    throw new Error('Failed to fetch data') // Maybe show GUI feedback
                }

                setActivites(result.activities)
                setFlight(result.flightDetails)
                setImages(result.images)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    }, [])

    return (
        <div className="mx-4 flex flex-col gap-20">
            <div className="flex gap-2 max-h-80 w-full h-full rounded-md overflow-hidden">
                <div className="w-1/2">
                    <img src={images[0].hotLink} className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
                    {images.slice(1).map((img, i) => (
                        <img src={img.hotLink} key={i} className="w-full h-full object-cover" />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-medium">Flights</h2>
                <div className="flex gap-4 bg-neutral-200 rounded-md p-4">
                    {flight.itineraries.map((route: any, i: any) => (
                        <div className="flex flex-col items-center" key={i}>
                            <div>{route.segments.map((segment: any, j: any) => (
                                <div className="flex flex-col items-center" key={j}>
                                    <span>{`${flight.airportsMap[segment.departure.iataCode].city}`}</span>
                                    <IoIosArrowRoundDown />
                                    <span>{`${flight.airportsMap[segment.arrival.iataCode].city}`}</span>
                                    <span>{`${segment.departure.at}`}</span>
                                </div>
                            ))}</div>
                            <span>{`${route.duration.replace(regexPattern, match => replacements[match])}`}</span>

                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-medium mb-4 text-center">Things to do</h1>
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