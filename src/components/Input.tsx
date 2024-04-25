import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Input = () => {
    const [origin, setOrigin] = useState('MAD');
    const [endDate, setEndDate] = useState(new Date());
    const [budget, setBudget] = useState(150);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log('From Submitted:', { origin, endDate, budget, numberOfPeople });

        const formattedDate = endDate.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('-');

        const url = `/holiday/options?origin=${origin}&maxPrice=${budget}&departureDate=${formattedDate}`
        window.location.href = url
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="input-container">
                <div className="">
                    <label htmlFor="origin">From</label>
                    <input
                        type="text"
                        id="origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                </div>
                <div className="date-picker">
                    <label htmlFor="endDate">End Date</label>
                    <DatePicker
                        className="order-2"
                        selected={endDate}
                        onChange={(date: Date | null) => date !== null && setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div className="">
                    <label htmlFor="budget">Budget (€50-1,000):</label>
                    <input
                        type="range"
                        id="budget"
                        min={0}
                        max={1000}
                        step={10}
                        value={budget}
                        onChange={(e) => {
                            if (parseInt(e.target.value) <= 50) {
                                e.target.value = '50'
                            }
                            setBudget(parseInt(e.target.value))
                        }}
                    />
                    <p>€{budget}</p>
                </div>
                <div className="">
                    <label htmlFor="numberOfPeople">Number Of People (1-8):</label>
                    <select
                        id="numberOfPeople"
                        value={numberOfPeople}
                        onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                    >
                        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-sky-400 text-white w-24">Submit</button>
            </form>
        </div>
    )
}
export default Input