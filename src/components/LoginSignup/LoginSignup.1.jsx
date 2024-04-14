import '../../index.css'

import { useState } from 'react';

const LoginSignup = () => {

    const {action,setAction} = useState("Signup");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
            </div>
            <div className="header">
                <h1>Sign Up</h1>
            </div>
           
            <div className="inputs">
                <div className="input">
                    <input type="name" placeholder='Name' />
                </div>
                <div className="input">
                    <input type="email" placeholder='Email Address' />
                </div>
                <div className="input">
                    <input type="password" placeholder='Password' />
                </div>
                <div className="submit-container">
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
                </div>
            </div>
       </div>

    );
}
export default LoginSignup;
