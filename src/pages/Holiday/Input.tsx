import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Input = () => {
    const [origin, setOrigin] = useState('DUB');
    const [endDate, setEndDate] = useState(new Date());
    const [budget, setBudget] = useState(50);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log('From Submitted:', { origin, endDate, budget, numberOfPeople });

        const formattedDate = endDate.toLocaleDateString('en-GB', {
            year: 'numeric',
            day: '2-digit',
            month: '2-digit',
        }).replace(/\//g, '-');
        console.log(formattedDate)

        const url = `/holiday/options?origin=${origin}&maxPrice=${budget}&departureDate=${formattedDate}`
        window.location.href = url
    };

    return (
        <div>

            <h2> PLEASE ENTER DETAILS BELOW TO MAKE YOUR DREAM HOLIDAY </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="origin">From</label>
                    <input
                        type="text"
                        id="origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="endDate">EndDate</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date: Date | null) => date !== null && setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <label htmlFor="budget">Budget (50-1,000):</label>
                    <input
                        type="range"
                        id="budget"
                        min={50}
                        max={1000}
                        step={10}
                        value={budget}
                        onChange={(e) => setBudget(parseInt(e.target.value))}
                    />
                    <p>{budget}</p>
                </div>
                <label htmlFor="numberOfPeople">Number Of People (1-8):</label>
                <select
                    id="numberOfPeople"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Input