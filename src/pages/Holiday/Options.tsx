import { useEffect, useState } from "react"

const Options = () => {
    const [options, setOptions] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            // Clients current url
            const url = new URL(window.location.href)
            const searchParm = url.searchParams

            try {
                const optionsRes = await fetch(`/api/flight-inspiration?${searchParm}`)
                const optionsResult = await optionsRes.json()
                if (!optionsRes.ok) {
                    throw new Error('Failed to fetch data') // Maybe show GUI feedback
                }

                setOptions(optionsResult)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Options