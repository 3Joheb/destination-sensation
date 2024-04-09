import {useState } from "react"
import DatePicker from"react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./index.css"


const Input = () => {
        const [name,setName] = useState('');
        const [destination,setDestination]=useState('');
        const [startDate,setStartDate]=useState(new Date());
        const [endDate,setEndDate]=useState(new Date());

        const handleSubmit = (e: { preventDefault: () => void }) => {
            e.preventDefault();
            console.log('From Submitted:',{name,destination,startDate,endDate});
        };


    return (
        <div>

            <h2> PLEASE ENTER DETAILS BELOW TO MAKE YOUR DREAM HOLIDAY </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="destination">Destination</label>
                            <input
                            type="text"
                            id="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="startDate">StartDate</label>
                            <DatePicker
                                selected ={startDate}
                                onChange ={(date:Date|null) => date!== null && setStartDate(date)}
                                dateFormat = "dd/mm/yyyy"
                                />
                                </div>
                        <div> 
                            <label htmlFor="endDate">EndDate</label>
                            <DatePicker
                                selected ={endDate}
                                onChange ={(date:Date|null) => date!== null && setEndDate(date)}
                                dateFormat ="dd/mm/yyyy"
                                />
                                </div>
                                <button type="submit">Submit</button>
            </form>

                
        
            
        </div>
    )
}
export default Input