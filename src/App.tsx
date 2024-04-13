import "./index.css"
import Navbar from "./navbar/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./pages/input"
import LoginSignup from "./components/LoginSignup/LoginSignup"
import Home from "./pages/Home"

export default () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="input" element={<Input />} />
                        <Route path="LoginSignup" element={<LoginSignup />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}