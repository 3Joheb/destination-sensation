import "./index.css"
import navbar from "./navbar/navbar"

const Input = () =>{
    return(
        <div>
             <nav>
        <ul>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/build">Holiday Builder</a>
          </li>
        </ul>
      </nav>



   <div>PLEASE ENTER DETAILS BELOW TO MAKE YOUR DREAM HOLIDAY</div>
   <div> <label for="start"> Holiday Date: </label>
            <input type="date" id="start" name="trip date" value="2024-03-20" min="2024-03-20" max="2024-09-20"/>
            </div>
    <div> <label for="price"> Price Range :</label> <br></br>
            <span>Minimum Price</span>
                    <input type="number"
                            class="minnum"
                            value="100"/>
                            </div>
    <div>
            <span>Maximum Price</span>
                <input type="number"
                    class="maximum"
                    value="7500"/>
                    </div>
    <div> 
        <input type="range"
            class="min-input"
            min="0"
            max="10000"
            value="100"
            step="1"/>
        <input type="range"
            class="max-input"
            min="0"
            max="10000"
            value="7500"
            step="1"/>
 </div>
 <div> <span>Number of People Attending</span>
        <input type="number select" value="8" step="8"/> </div>

<div> <span>To submit please click here!!</span>
        <input type="button"/> </div>
    )
}

export default Input