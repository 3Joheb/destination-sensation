import "./index.css"
import beachImg from "./assets/beach.jpg"
import cabinImg from "./assets/cabin.jpg"
import winterImg from "./assets/winter.jpg"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./pages/input"

const App = () => {

    return (
        <div>
            <Navbar />
            <Card destination="Spain" price="500" departuredate="15" returndate="25" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<App />} />
                        <Route path="input" element={<Input />} />

                    </Route>
                </Routes>
            </BrowserRouter>

            <div>WELCOME</div>

            <p> Hi there us fellow members of DESTINATION SENSATION are bringing this new holiday package website to you! We aim to help
                making your holiday descision easier by making the biggest factor in your holiday way easier to chose , you
                give us a price and time we will find you the places best suited to your budget!
            </p>
            <div className="images">
                <img src={beachImg} alt="" />
                <img src={cabinImg} alt="" />
                <img src={winterImg} alt="" />
            </div>

            <p></p>



        </div>

    )
}
export default App
