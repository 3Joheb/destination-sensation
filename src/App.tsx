import "./index.css"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./pages/Input"
import LoginSignup from "./pages/LoginSignup"
import Home from "./pages/Home"

export default () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="input" element={<Input />} />
                        <Route path="login" element={<LoginSignup />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}