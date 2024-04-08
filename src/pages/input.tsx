import { StrictMode, useState } from "react"
import DatePicker from "react-datepicker"
import "./index.css"
import 'react-datepicker/dist/react-datepicker.css'

const Input = () => {
        const [name,setName] = useState('');
        const [destination,setDestination]=useState('');
        const [startDate,setStartDate]=useState(new Date());
        const [endDate,setEndDate]=useState(new Date());

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('From Submitted:',{name,destination,startDate,endDate});
        };


    return (
        <div>

            <h2> PLEASE ENTER DETAILS BELOW TO MAKE YOUR DREAM HOLIDAY </h2>
            <from onSubmit={handleSubmit}>
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

                </div>
            </from>

                
        
            
        </div>
    )
}
export default Input