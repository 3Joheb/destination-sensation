import React from "react"
import ReactDOM from "react-dom/client"
import Payment from './components/Payment/Payment'
import LoginSignup from './components/LoginSignup/LoginSignup.1'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
    <Payment/>
    <LoginSignup/>
    </React.StrictMode>
)