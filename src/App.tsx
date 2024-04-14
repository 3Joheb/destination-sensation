import "./index.css"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./pages/Holiday/Input"
import LoginSignup from "./pages/LoginSignup"
import Home from "./pages/Home"
import Options from "./pages/Holiday/Options";
import Details from "./pages/Holiday/Details"

export default () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="holiday" element={<Input />} />
                        <Route path="holiday/options" element={<Options />} />
                        <Route path="holiday/details" element={<Details />} />
                        <Route path="login" element={<LoginSignup />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}